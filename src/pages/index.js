import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import Card from "@/components/entity/card/Card";
import {Flex, Grid, SimpleGrid} from "@mantine/core";
import {CarouselBanner} from "@/components/entity/carousel/CarouselBanner";
import {FaqWithBg} from "@/components/entity/faq/FaqWithBg";
import MainPageFeaturesContainer
    from "@/components/shared/features/MainPageFeaturesContainer/MainPageFeaturesContainer";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";
import {useEffect} from "react";
import {getCategories, getProducts} from "@/redux/features/products/productsSlice";
import axios, {productApi} from "@/api";
import {categoryApi} from "@/api/category";


export default function Home({products, categories}) {
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
            <SimpleGrid cols={4}
                        spacing="lg" breakpoints={[
                {maxWidth: '68rem', cols: 3, spacing: 'md'},
                {maxWidth: '48rem', cols: 2, spacing: 'sm'},
                {maxWidth: '36rem', cols: 1, spacing: 'sm'},
            ]}>
                {products?.map((product) =>
                    <Card {...product} href={`/products/${product.id}`} key={product.id}/>
                )}
            </SimpleGrid>

            {/*Categories block*/}
            <Flex>
                {categories?.slice(0, 4)?.map((category) => (
                    <BlurredBlock title={category.name} key={category.id} link={category.name}/>

                ))}
            </Flex>

            <BuyingWith title={"Часто покупают"}/>
            <FaqWithBg/>
        </main>
    </>);
}

export async function getServerSideProps() {
    const {products} = await productApi.getProducts().then(({data}) => {
        return data;
    });

    const {categories} = await categoryApi.getAll().then(({data}) => {
        return data;
    });
    return {
        props: {
            products,
            categories
        },
    };
}
