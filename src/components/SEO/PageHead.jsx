import Head from "next/head";
import React from "react";
import YandexMetrika from "@/utils/YandexMetrika";

const PageHead = ({
										title = "Веретено, магазин головных уборов",
										description = "Купить шапки, шляпы, восьмиклинки быстро и просто",
									}) => {
	return (
		<Head>
			<title>{title} - Веретено, магазин головных уборов</title>
			<meta name="description" content={description}/>
			<meta name="yandex-verification" content="8c42054833b5f11d"/>
			<YandexMetrika
				yid={94732270}
				clickmap={true}
				trackLinks={true}
				accurateTrackBounce={true}
				webvisor={true}
				ecommerce={"dataLayer"}
			/>
		</Head>
	);
};

export default PageHead;
