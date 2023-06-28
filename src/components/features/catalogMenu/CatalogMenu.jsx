import React, {forwardRef, useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import animationStyle from "./CatalogMenuAnimations.module.scss";
import styles from "./CatalogMenuStyles.module.scss";
import {useClickOutside} from "@mantine/hooks";
import DefaultButton from "../../shared/buttons/DefaultButton/DefaultButton";
import Link from "next/link";
import {Button, createStyles, Group, HoverCard, Popover} from "@mantine/core";
import {IconMenu2} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "@/redux/features/products/productsSlice";

const CatalogButtonStyles = createStyles(() => ({
    button: {
        background: "#6F73EE",
        border: "1.5px solid #6F73EE",
        borderRadius: "5px",
        padding: "8px 18px",
        height: "100%",
        minHeight: "46px",
    },
}));

const CatalogMenu = () => {
    const dispatch = useDispatch();
    // const {categories, loading} = useSelector((state) => state.products)
    const {classes} = CatalogButtonStyles();
    const menuItems = [{label: "Каталог", url: "/products"}, {label: "О нас", url: "/about"}, {
        label: "Личный кабинет", url: "/lk"
    },];

    const menuItems2 = [{label: "Домой", url: "/"}, {label: "О нас", url: "/about"}, {
        label: "Личный кабинет", url: "/lk"
    },];

    // useEffect(() => {
    //     dispatch(getCategories())
    //
    // }, [dispatch])

    return (<>
        <HoverCard position={"bottom-start"}>
            <HoverCard.Target>
                <Button className={classes.button} leftIcon={<IconMenu2/>}>
                    Каталог
                </Button>
            </HoverCard.Target>
            {/*<HoverCard.Dropdown>*/}
            {/*	{loading ? 'loading' : <>*/}
            {/*		<CatalogMenuContent*/}
            {/*			menuItems={menuItems}*/}
            {/*			menuItems2={categories}*/}
            {/*		/>*/}
            {/*	</>}*/}
            {/*</HoverCard.Dropdown>*/}
        </HoverCard>
    </>);
};

export default CatalogMenu;

// eslint-disable-next-line react/display-name
const CatalogMenuContent = forwardRef(({menuItems, menuItems2, menuItems3}, ref) => (
    <Group ref={ref} styles={{zIndex: "1001"}}>
        <div className={styles.content}>
            <div className={`${styles.col} ${styles.col_main}`}>
                {menuItems?.map((menuItem) => (<Link key={menuItem.url} href={menuItem.url}>
                    {menuItem.label}
                </Link>))}
            </div>
            <div className={[styles.col]}>
                {menuItems2?.map((menuItem) => (
                    <Link key={menuItem.url || menuItem.name} href={menuItem.url || menuItem.name}>
                        {menuItem.label || menuItem.name}
                    </Link>))}
            </div>

        </div>
    </Group>));
