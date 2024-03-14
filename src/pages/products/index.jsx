import HatFilter from "@/components/entity/filters/HatFilter";
import PageHead from "@/components/SEO/PageHead";
import React from "react";

import styles from "../../components/features/product/Products.module.scss";
import { ProductsGrid } from "@/components/entity/ProductsGrid/ProductsGrid";
import {
  FilterTextStyles,
  SubCategories,
} from "@/components/entity/SubCategories/SubCategories";

const Products = () => {
  const { classes, theme } = FilterTextStyles();
  return (
    <>
      <PageHead title="Все товары - Веретено, магазин головных уборов" />
      <div className={styles.container}>
        <div className={styles.catalog_banner}></div>
        <div className={styles.promo_banner}></div>
        <div className={styles.content}>
          <div className={styles.filters}>
            <h2 className={classes.title} style={{ marginBottom: "0.5rem" }}>
              Фильтры
            </h2>
            <HatFilter />
          </div>
          <div className={styles.store}>
            <SubCategories />
            <ProductsGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
