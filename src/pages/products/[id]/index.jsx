import ProductImage from "@/components/features/product/ProductImage";
import ProductInfo from "@/components/features/product/ProductInfo";
import ProductOrder from "@/components/features/product/ProductOrder";
import { Paper, Space } from "@mantine/core";
import React, { createContext, useEffect, useState } from "react";
import styles from "./SingleProduct.module.scss";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import { productApi } from "@/api";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import PageHead from "@/components/SEO/PageHead";
import { ProductBreadcrumbs } from "@/components/features/product/ProductBreadcrumbs";
import ProductVendorVariations from "@/components/features/product/ProductVendorVariations";
import { cartApi } from "@/api/cart";
import { useCarts } from "@/utils/hooks/useCarts";

const SingleProduct = ({ product }) => {
  const [currentVendorIndex, setCurrentVendorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product?.vendorCodes?.[currentVendorIndex]?.sizes[0]?.id,
  );
  const [quantityToBuy, setQuantityToBuy] = useState(1);

  const vendorIndex = { currentVendorIndex, setCurrentVendorIndex };
  const sizeControl = { selectedSize, setSelectedSize };
  const quantityControl = { quantityToBuy, setQuantityToBuy };

  useEffect(() => {
    setSelectedSize(product?.vendorCodes?.[currentVendorIndex]?.sizes[0]?.id);
  }, [currentVendorIndex, product]);

  return (
    <ProductInfoContext.Provider
      value={{
        product: { ...product },
        vendorIndex,
        sizeControl,
        quantityControl,
      }}
    >
      <PageHead title={product?.name || "Загрузка"} />
      <Paper shadow="md" radius="xl" p="xl" mb={"xl"}>
        <div className={styles.container}>
          <div className={styles.top}>
            <ProductBreadcrumbs />
          </div>
          <div className={styles.body}>
            <div className={styles.main}>
              <ProductImage />
              <ProductOrder />
            </div>
            <div className={styles.additional}>
              {product?.vendorCodes?.length > 1 && <ProductVendorVariations />}
              <Space h={"xl"} />
              <ProductInfo />
              <Space h={"xl"} />
              <BuyingWith
                title={`Товары из этой же категории`}
                params={{ "categories[]": product?.category?.id }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </ProductInfoContext.Provider>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  const { products } = await productApi.getProducts().then(({ data }) => {
    return { ...data, products: data.products };
  });

  const paths = products.map((product) => ({
    params: { id: "" + product.id, slug: product.slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({ params }) => {
  const product = await productApi.getProduct(params).then(({ data }) => {
    return data;
  });

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};
