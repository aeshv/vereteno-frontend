import React, {useEffect} from "react";
import styles from "./PageLayout.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "cookies-next";
import {getMe} from "@/redux/features/auth/authSlice";

const PageLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isToken = useSelector((state) => !!state.auth.token)
  console.log('isToken',isToken);
  const token = getCookie("token")

  useEffect(() => {
    isToken && dispatch(getMe());
  }, [dispatch, isToken]);

  return <div className={styles.container}>{children}</div>;
};

export default PageLayout;
