import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { checkIsAuth } from "@/redux/features/auth/authSlice";
import Header from "@/components/features/header/Header";
import Card from "@/components/entity/card/Card";
import Search from "@/components/shared/search/Search";
import ContentContainer from "@/components/shared/ContentContainer/ContentContainer";
import { Grid } from "@mantine/core";
import api, { productApi } from "@/api";
import { products } from "@/utils/tempHatsList";
import CatalogMenu from "@/components/features/catalogMenu/CatalogMenu";
import { CarouselBanner } from "@/components/entity/carousel/CarouselBanner";
import { FaqWithBg } from "@/components/entity/faq/FaqWithBg";

export default function Home() {
  const isAuth = useSelector(checkIsAuth);


  return (
    <>
      <Head>
        <title>Веретено, магазин головных уборов</title>
        <meta
          name="description"
          content="Купить шапки, шляпы, восьмиклинки быстро и просто"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '4rem'}}>
        <CarouselBanner/>
        <Grid gutter="xl">
          {products.map((product) => (
            <Grid.Col key={product.id} span={3}>
              <Card {...product} href={`/products/${product.id}`} />
            </Grid.Col>
          ))}
        </Grid>
        <FaqWithBg/>
      </main>
    </>
  );
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
