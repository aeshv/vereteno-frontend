import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/shared/buttons/DefaultButton/DefaultButton";

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
            <Link href={"tel:+799999999999"}>+799999999999</Link>
          </div>
        </div>

        <div className={styles.main}>
          <Link href="/">
            <div className="logo">LOGO</div>
          </Link>
          <DefaultButton>Каталог</DefaultButton>
          <div className="search">SEARCH</div>
          <div className="cart">cart</div>
        </div>
      </header>
    </>
  );
};

export default Header;
