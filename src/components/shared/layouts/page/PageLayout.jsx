import React from "react";
import styles from "./PageLayout.module.scss";

const PageLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageLayout;
