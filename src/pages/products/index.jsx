import HatFilter from "@/components/entity/filters/HatFilter";
import PageHead from "@/components/SEO/PageHead";
import React, {useEffect} from "react";

import styles from "./Products.module.scss";
import {Grid} from "@mantine/core";
import Card from "@/components/entity/card/Card";
import {productApi} from "@/api";
import {ProductsGrid} from "@/components/entity/ProductsGrid/ProductsGrid";
import {useRouter} from "next/router";

const Products = () => {
    return (
        <>
            <PageHead title="Все товары"/>
            <div className={styles.container}>
                <div className={styles.catalog_banner}></div>
                <div className={styles.promo_banner}></div>
                <div className={styles.content}>
                    <div className={styles.filters}>
                        <h2>Фильтры</h2>
                        <HatFilter/>
                    </div>
                    <div className={styles.store}>
                        <ProductsGrid/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
