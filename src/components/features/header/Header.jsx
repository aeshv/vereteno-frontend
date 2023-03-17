import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/shared/buttons/DefaultButton/DefaultButton";
import Icon from "@/components/shared/icon/Icon";
import Search from "@/components/shared/search/Search";
import { IconLogin, IconShoppingCart } from '@tabler/icons-react';
import { ActionIcon } from "@mantine/core";

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.top}>
          <div className={styles.contact__online}>
            <ul>
              <Link href="/about">О Нас</Link>
              <Link href="/lk">Личный кабинет</Link>
              <Link href="/products">Продукты</Link>
            </ul>
          </div>

          <div className={styles.contact__call}>
            <Link href={"tel:+799999999999"}>8 (846) 202-60-82</Link>
          </div>
        </div>

        <div className={styles.main}>
          <Link href="/">
            <div className="logo">LOGO</div>
          </Link>
          <DefaultButton>Каталог</DefaultButton>
          <Search/>
          <Link href='/cart'>
            <Icon icon={<IconShoppingCart stroke="black"/>} />
          </Link>
          <Link href='/auth'>
          <Icon icon={<IconLogin stroke="black"/>} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
