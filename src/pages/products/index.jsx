import HatFilter from "@/components/entity/filters/HatFilter";
import PageHead from "@/components/SEO/PageHead";
import React, {useEffect} from "react";

import styles from "./Products.module.scss";
import {Grid} from "@mantine/core";
import Card from "@/components/entity/card/Card";
import {productApi} from "@/api";
import {ProductsGrid} from "@/components/entity/ProductsGrid/ProductsGrid";
import {useRouter} from "next/router";

const Products = () => {
    return (
        <>
            <PageHead title="Все товары"/>
            <div className={styles.container}>
                <div className={styles.catalog_banner}></div>
                <div className={styles.promo_banner}></div>
                <div className={styles.content}>
                    <div className={styles.filters}>
                        <h2>Фильтры</h2>
                        <HatFilter/>
                    </div>
                    <div className={styles.store}>
                        <ProductsGrid/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;

// export async function getServerSideProps() {
//     const {products} = await productApi.getProducts().then(({data}) => {
//         return data;
//     });
//     return {
//         props: {
//             products,
//         },
//     };
// }

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
