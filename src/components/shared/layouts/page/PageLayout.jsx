import React, {useEffect} from "react";
import styles from "./PageLayout.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "cookies-next";
import {getMe} from "@/redux/features/auth/authSlice";

const PageLayout = ({children}) => {
	const dispatch = useDispatch();
	const token = getCookie("token")

	useEffect(() => {
		if (token) {
			dispatch(getMe());
		}

	}, [dispatch, token]);

	return <div className={styles.container}>{children}</div>;
};

export default PageLayout;
