import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { checkIsAuth } from "@/redux/features/auth/authSlice";
import Header from "@/components/features/header/Header";
import Card from "@/components/entity/card/Card";
import Search from "@/components/shared/search/Search";
import ContentContainer from "@/components/shared/ContentContainer/ContentContainer";
import { Grid } from "@mantine/core";
import api, {productApi} from "@/api";

export default function Home({ products }) {
  const isAuth = useSelector(checkIsAuth);
  console.log(products);
  return (
    <>
      <Head>
        <title>VERETENO HATS</title>
        <meta
          name="description"
          content="Купить шапки, шляпы, восьмиклинки быстро и просто"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="class">Главная</h1>
        {/* <ContentContainer> */}
        <Grid grow gutter="xl">
          {products.products.map((product) => (
            <Grid.Col key={product.id} span={4}>
              <Card {...product}/>
            </Grid.Col>
          ))}
        </Grid>
        {/* </ContentContainer> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await productApi.getProducts().then(({ data }) => {
    return data;
  });
  return {
    props: {
      products,
    },
  };
}
