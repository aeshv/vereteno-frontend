#!/usr/bin/env bash

set -Eeuo pipefail

APP_NAME="${APP_NAME:-vereteno-frontend}"
APP_DIR="${APP_DIR:-$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)}"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-https://vereteno-hats.ru/}"
SKIP_GIT_PULL="${SKIP_GIT_PULL:-0}"

log() {
  printf '\n==> %s\n' "$1"
}

fail() {
  printf '\nDeployment failed: %s\n' "$1" >&2
  exit 1
}

for command in git node npm pm2 curl; do
  command -v "$command" >/dev/null 2>&1 || fail "Required command is missing: $command"
done

node_major="$(node -p 'Number(process.versions.node.split(".")[0])')"
if ((node_major < 20)); then
  fail "Node.js 20 or newer is required; found $(node --version)"
fi

cd "$APP_DIR"

if [[ "$SKIP_GIT_PULL" != "1" ]]; then
  if ! git diff --quiet || ! git diff --cached --quiet; then
    fail "Tracked files contain local changes. Review 'git status --short' before deploying."
  fi

  log "Pulling the latest source"
  git pull --ff-only
fi

log "Installing locked dependencies"
npm ci

log "Building the production bundle"
npm run build

log "Restarting $APP_NAME"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 restart "$APP_NAME" --update-env
else
  pm2 start npm --name "$APP_NAME" -- start
fi
pm2 save

log "Checking $HEALTHCHECK_URL"
for attempt in {1..10}; do
  headers="$(curl --fail --silent --show-error --dump-header - --output /dev/null \
    --header 'Accept: text/html' "$HEALTHCHECK_URL" 2>/dev/null || true)"

  if grep -qi '^x-powered-by: Next.js' <<<"$headers"; then
    printf 'Deployment completed successfully.\n'
    exit 0
  fi

  sleep 2
done

pm2 logs "$APP_NAME" --nostream --lines 50 || true
fail "Health check did not receive an x-powered-by: Next.js response"
