import ProductImage from "@/components/features/product/ProductImage";
import ProductInfo from "@/components/features/product/ProductInfo";
import ProductOrder from "@/components/features/product/ProductOrder";
import { Paper } from "@mantine/core";
import React from "react";
import styles from './SingleProduct.module.scss'

const SingleProduct = () => {
  return (
    <Paper shadow="xl" radius="xl" p="xl">
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.body}>
          <div className={styles.main}>
            <ProductImage />
            <ProductOrder />
          </div>
          <div className={styles.additional}>
            <ProductInfo />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default SingleProduct;
