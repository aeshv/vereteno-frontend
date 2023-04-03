import React from "react";
import styles from "./SmallFeatureBlock.module.scss";

const SmallFeatureBlock = ({ title, description, position }) => {
  return (
    <div className={`${styles.container} ${styles[`item-${position}`]}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SmallFeatureBlock;
