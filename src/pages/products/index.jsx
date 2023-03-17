import React, { useEffect } from "react";
import axios from "@/api";

const Products = ({ singleProduct }) => {
  useEffect(() => {
    const singleProduct = async () => {
      await axios.get(`/products`);
    };
    console.log(singleProduct());
  }, []);

  return (
    <div>
      <h1>Продукты</h1>
    </div>
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
