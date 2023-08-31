import { Html, Head, Main, NextScript } from "next/document";
import YandexMetrika from "@/utils/YandexMetrika";
import React from "react";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
        <YandexMetrika
          yid={94732270}
          clickmap={true}
          trackLinks={true}
          accurateTrackBounce={true}
          webvisor={true}
          ecommerce={"dataLayer"}
        />
      </body>
    </Html>
  );
}
