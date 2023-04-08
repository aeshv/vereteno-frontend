import HatFilter from "@/components/entity/filters/HatFilter";
import PageHead from "@/components/SEO/PageHead";
import Head from "next/head";
import React, { useEffect } from "react";

const Products = () => {
  return (
    <>
      <PageHead title="Все товары"/>
      <div className="container">
        <div className="catalog_banner"></div>
        <div className="promo_banner"></div>
        <div className="content">
          <div className="filters">
            <h2>Фильтры</h2>
            <HatFilter/>
          </div>
          <div className="store">Товары</div>
        </div>
      </div>
    </>
  );
};

export default Products;

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
