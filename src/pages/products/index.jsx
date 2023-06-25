import HatFilter from "@/components/entity/filters/HatFilter";
import PageHead from "@/components/SEO/PageHead";
import Head from "next/head";
import React, { useEffect } from "react";

import styles from "./Products.module.scss";
import { Grid } from "@mantine/core";
import Card from "@/components/entity/card/Card";
import { products } from "@/utils/tempHatsList";
import {productApi} from "@/api";

const Products = ({products}) => {
  return (
    <>
      <PageHead title="Все товары" />
      <div className={styles.container}>
        <div className={styles.catalog_banner}></div>
        <div className={styles.promo_banner}></div>
        <div className={styles.content}>
          <div className={styles.filters}>
            <h2>Фильтры</h2>
            <HatFilter />
          </div>
          <div className={styles.store}>
            <Grid gutter="xl">
              {products?.map((product) => (
                <Grid.Col key={product.id} span={4}>
                  <Card {...product} href={`/products/${product.id}`} />
                </Grid.Col>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
export async function getServerSideProps() {
  const {products} = await productApi.getProducts().then(({data}) => {
    return data;
  });
  return {
    props: {
      products,
    },
  };
}
// export async function getServerSideProps() {
//   const singleProduct2 = async ({ id }) => {
//     try {
//       const { data } = await axios.get(`/product/${id}`);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const singleProduct = async ({ id }) => {
//     await axios.get(`/product/${id}`).then(({ data }) => {
//       return data;
//     });
//     return data;
//   };

//   // const post = await fetchersService
//   //   .get("product", params.slug)
//   //   .then(({ data }) => {
//   //     return data;
//   //   });

//   return {
//     props: {
//       singleProduct,
//     },
//   };
// }
