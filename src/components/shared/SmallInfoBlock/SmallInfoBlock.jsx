import React from "react";
import styles from "./SmallInfoBlock.module.scss";

const SmallInfoBlock = ({ title = "", description = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.imageSection}>
        
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default SmallInfoBlock;
