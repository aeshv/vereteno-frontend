import React, { useState } from "react";
import styles from "./BuyingWith.module.scss";
import { products } from "@/utils/tempHatsList";
import Card from "@/components/entity/card/Card";

const BuyingWith = ({ title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        {products.map((product, index) => (
          <>
            <div className={styles.scrollable} key={index}>
              <Card {...product} href={`/products/${product.id}`} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BuyingWith;
