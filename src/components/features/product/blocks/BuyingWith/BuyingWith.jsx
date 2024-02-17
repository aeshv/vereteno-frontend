import React from "react";
import styles from "./BuyingWith.module.scss";
import Card from "@/components/entity/card/Card";
import { useProductsBanner } from "@/utils/hooks/useProductsBanner";

const BuyingWith = ({ title, params = {} }) => {
  const getBannerContent = useProductsBanner(params);

  const { isLoading, isError, data, error } = getBannerContent;

  const items = data?.data?.productVendorCodes?.map((product) => (
    <div className={styles.scrollable} key={product.id}>
      <Card {...product} href={`/products/${product.id}`} />
    </div>
  ));

  if (isError) {
    return <></>;
  }

  if (!items?.length) {
    return <></>;
  }

  return <BuyingWithContainer title={title}>{items}</BuyingWithContainer>;
};

const BuyingWithContainer = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>{children}</div>
    </div>
  );
};

export default BuyingWith;
