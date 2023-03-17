import React from "react";
import styles from "./ContentContainer.module.scss";

const ContentContainer = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentContainer;
