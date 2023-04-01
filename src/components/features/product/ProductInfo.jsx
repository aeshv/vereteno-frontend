import React from "react";
import styles from "./SingleProduct.module.scss";
import ProductSectionAbout from "./ProductSectionAbout";
import ProductSectionGuarantee from "./ProductSectionGuarantee";
import ProductSectionSpecs from "./ProductSectionSpecs";
import ProductSectionPayment from "./ProductSectionPayment";

const ProductInfo = () => {
  const tabs = [
    { label: "О товаре", content: <ProductSectionAbout/> },
    { label: "Характеристики", content: <ProductSectionSpecs/>},
    { label: "Гарантии", content: <ProductSectionGuarantee/>},
    { label: "Доставка и оплата", content: <ProductSectionPayment/>},
  ];
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div className={styles.tabs}>
      <div className={styles.tab_header}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab_item} ${
              selectedTab === index && styles.tab_item__selected
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tab_content}>{tabs[selectedTab].content}</div>
    </div>
  );
};

export default ProductInfo;
