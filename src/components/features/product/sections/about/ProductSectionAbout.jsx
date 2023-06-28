import React, {useContext} from "react";
import styles from "./sectionAbout.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";

const ProductSectionAbout = () => {
  const product = useContext(ProductInfoContext)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {product?.name}
          </h1>
          <p className={styles.description}>
            {product?.description}
          </p>
        </div>
        <div className={styles.additional}>
          <div className={styles.tags}>
            <div className={styles.tag}>Демисезонная</div>
            <div className={styles.tag}>Крепкая</div>
            <div className={styles.tag}>На каждый день</div>
            <div className={styles.tag}>Мужская</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSectionAbout;
