import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/shared/buttons/DefaultButton/DefaultButton";
import Icon from "@/components/shared/icon/Icon";
import Search from "@/components/shared/search/Search";
import {IconLogin, IconShoppingCart, IconUser} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import CatalogMenu from "@/components/features/catalogMenu/CatalogMenu";
import {useSelector} from "react-redux";

const Header = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.token)
    return (<>
        <header className={styles.container}>
            <div className={styles.top}>
                <div className={styles.contact__online}>
                    <ul>
                        <Link href="/about">О Нас</Link>
                        <Link href="/reviews">Отзывы</Link>
                        <Link href="/lk">Личный кабинет</Link>
                        <Link href="/products">Продукты</Link>
                    </ul>
                </div>

                <div className={styles.contact__call}>
                    <Link href={"tel:+79094351234"}>+7 (909) 435-12-34</Link>
                </div>
            </div>

            {/*<div className={styles.main}>*/}
            {/*	<Link href="/">*/}
            {/*		<div className="logo">LOGO</div>*/}
            {/*	</Link>*/}
            {/*	<div className={styles.catalog}>*/}

            {/*		<CatalogMenu/>*/}
            {/*	</div>*/}
            {/*	<Search/>*/}
            {/*	<Link href="/cart">*/}
            {/*		<Icon icon={<IconShoppingCart stroke="black"/>}/>*/}
            {/*	</Link>*/}

            {/*	{isLoggedIn ? <Link href="/lk">*/}
            {/*		<Icon icon={<IconUser stroke="black"/>}/>*/}
            {/*	</Link> : <Link href="/auth">*/}
            {/*		<Icon icon={<IconLogin stroke="black"/>}/>*/}
            {/*	</Link>}*/}

            {/*</div>*/}
        </header>
    </>);
};

export default Header;
