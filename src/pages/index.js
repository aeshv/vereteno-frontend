import Head from "next/head";
import {useSelector} from "react-redux";
import {checkIsAuth} from "@/redux/features/auth/authSlice";
import Card from "@/components/entity/card/Card";
import {Flex, Grid} from "@mantine/core";
import {products} from "@/utils/tempHatsList";
import {CarouselBanner} from "@/components/entity/carousel/CarouselBanner";
import {FaqWithBg} from "@/components/entity/faq/FaqWithBg";
import MainPageFeaturesContainer
    from "@/components/shared/features/MainPageFeaturesContainer/MainPageFeaturesContainer";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";


export default function Home() {
    const isAuth = useSelector(checkIsAuth);

    return (<>
        <Head>
            <title>Веретено, магазин головных уборов</title>
            <meta
                name="description"
                content="Купить шапки, шляпы, восьмиклинки быстро и просто"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main
            style={{
                display: "flex", flexDirection: "column", gap: "2rem", paddingBottom: "4rem",
            }}
        >
            <CarouselBanner/>
            <MainPageFeaturesContainer/>
            <Grid gutter="xl">
                {products?.map((product) => (<Grid.Col key={product.id} span={3}>
                    <Card {...product} href={`/products/${product.id}`}/>
                </Grid.Col>))}
            </Grid>

            {/*Categories block*/}
            <Flex>
                <BlurredBlock title={"Кепки"}/><BlurredBlock title={"Панамы"}/><BlurredBlock
                title={"Шапки"}/><BlurredBlock title={"Шарфы"}/>
            </Flex>

            <BuyingWith title={"Часто покупают"}/>
            <FaqWithBg/>
        </main>
    </>);
}

// export async function getServerSideProps() {
//   const products = await productApi.getProducts().then(({ data }) => {
//     return data;
//   });
//   return {
//     props: {
//       products,
//     },
//   };
// }
