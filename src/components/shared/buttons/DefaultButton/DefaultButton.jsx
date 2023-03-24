import React from "react";
import styles from "./DefaultButton.module.scss";

const DefaultButton = ({ children, onClick = () => {} }) => {
  return (
    <button
      className={styles.DefaultButton}
      onClick={(e) => {
        e.preventDefault;
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
