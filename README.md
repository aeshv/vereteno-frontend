# Vereteno frontend

## Local development

```bash
npm install
npm run dev
```

## Production deployment

The production application runs with PM2 outside Docker. Configure PM2 to
start after a server reboot once, following the command printed by `pm2 startup`:

```bash
pm2 startup
pm2 save
```

Deploy from the repository root:

```bash
bash deploy.sh
```

The script:

1. Refuses to deploy when tracked files have uncommitted changes.
2. Pulls the current branch with `git pull --ff-only`.
3. Installs the exact dependencies from `package-lock.json`.
4. Creates the production Next.js build.
5. Starts or restarts the `vereteno-frontend` PM2 process.
6. Saves the PM2 process list and verifies the public Next.js response.

Environment variables can override the defaults:

```bash
APP_NAME=my-frontend \
HEALTHCHECK_URL=https://example.com/ \
bash deploy.sh
```

Use `SKIP_GIT_PULL=1 bash deploy.sh` when the source has already been updated
by a separate deployment system.