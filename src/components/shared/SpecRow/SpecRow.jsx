import React from "react";
import styles from './SpecRow.module.scss'

const SpecRow = ({ id, title = "", value = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
};

export default SpecRow;
