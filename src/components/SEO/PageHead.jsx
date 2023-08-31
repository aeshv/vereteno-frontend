import Head from "next/head";
import React from "react";
import YandexMetrika from "@/utils/YandexMetrika";

const PageHead = ({
  title = "Веретено, магазин головных уборов",
  description = "Купить шапки, шляпы, восьмиклинки быстро и просто",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="yandex-verification" content="8c42054833b5f11d" />
    </Head>
  );
};

export default PageHead;
