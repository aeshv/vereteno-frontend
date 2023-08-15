import React from "react";

import Link from "next/link";
import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "1220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        padding: "0 1.77vw",
        zIndex: 1001,
        "@media screen and (max-width: 768px)": {display: "none"}
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1220px",
        padding: "11px 0"
    },
    contactOnline: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "18px",
        color: `${theme.colors.gray[5]}`,
        "& a:link, a:visited": {textDecoration: 'none', color: `${theme.colors.gray[5]}`},
        "& a:hover": {color: `${theme.colors.brand[8]}`},
        "& a:not(:last-child)": {marginRight: "30px"},
        "& ul": {margin: "0"}
    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        maxWidth: "1220px",
        padding: "11px 0"
    },
    catalog: {position: "relative"}
}));

const Header = () => {

    const {classes: styles, theme} = useStyles();

    return (<>
        <header className={styles.container}>
            <div className={styles.top}>
                <div className={styles.contactOnline}>
                    <ul>
                        <Link href="/about">О Нас</Link>
                        <Link href="/reviews">Отзывы</Link>
                        <Link href="/lk">Личный кабинет</Link>
                        <Link href="/cart">Корзина</Link>
                        <Link href="/legal">Правовая информация</Link>
                        <Link href="/info">Как узнать размер</Link>
                        <Link href="/custom">Пошив на заказ</Link>
                    </ul>
                </div>

                <div className={styles.contactOnline}>
                    <Link href={"tel:+79094351234"}>+7 (909) 435-12-34</Link>
                </div>
            </div>

        </header>
    </>);
};

export default Header;
