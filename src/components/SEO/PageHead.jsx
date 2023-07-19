import Head from "next/head";
import React from "react";

const PageHead = ({
                      title = "Веретено, магазин головных уборов",
                      description = "Купить шапки, шляпы, восьмиклинки быстро и просто",
                  }) => {
    return (
        <Head>
            <title>{title} - Веретено, магазин головных уборов</title>
            <meta name="description" content={description}/>
        </Head>
    );
};

export default PageHead;
