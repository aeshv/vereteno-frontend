import React from "react";
import { IconMoodEmptyFilled } from "@tabler/icons-react";
import Image from "next/image";
import { Text, Title } from "@mantine/core";
import styles from "./NoDataCart.module.scss";
import BuyingWith from "../../product/blocks/BuyingWith/BuyingWith";

const NoDataCart = () => {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.image}>
            <IconMoodEmptyFilled size="85px" />
          </div>
          <h2>ВАША КОРЗИНА ПУСТА</h2>
          <p>Добавьте в нее товары из каталога</p>
          <button className={styles.button}>Перейти в каталог</button>
        </div>
      </div>

      <BuyingWith title={"Рекомендуем вам"} />
    </>
  );
};

export default NoDataCart;
