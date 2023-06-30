import React, {useEffect} from "react";
import styles from "./PageLayout.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "cookies-next";

const PageLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isToken = useSelector((state) => !!state.auth.token)
  console.log('isToken',isToken)

  useEffect(() => {
    isToken && getCookie("token");
  }, [dispatch]);

  return <div className={styles.container}>{children}</div>;
};

export default PageLayout;
