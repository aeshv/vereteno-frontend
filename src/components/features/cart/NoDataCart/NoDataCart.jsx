import React from "react";
import {IconMoodEmptyFilled} from "@tabler/icons-react";
import Image from "next/image";
import {Text, Title} from "@mantine/core";
import styles from "./NoDataCart.module.scss";
import BuyingWith from "../../product/blocks/BuyingWith/BuyingWith";
import Link from "next/link";

const NoDataCart = ({title = 'ВАША КОРЗИНА ПУСТА', description = 'Добавьте в нее товары из каталога'}) => {
    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <IconMoodEmptyFilled size="85px"/>
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link href={'/products'}>
                        <button className={styles.button}>Перейти в каталог</button>
                    </Link>
                </div>
            </div>

            {/*<BuyingWith title={"Рекомендуем вам"} />*/}
        </>
    );
};

export default NoDataCart;
