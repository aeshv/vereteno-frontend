import ProductImage from "@/components/features/product/ProductImage";
import ProductInfo from "@/components/features/product/ProductInfo";
import ProductOrder from "@/components/features/product/ProductOrder";
import {Paper} from "@mantine/core";
import React, {createContext, useEffect} from "react";
import styles from "./SingleProduct.module.scss";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import {productApi} from "@/api";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import PageHead from "@/components/SEO/PageHead";


const SingleProduct = ({product}) => {
    console.log(product)

    return (

        <ProductInfoContext.Provider value={product}>
            <PageHead title={product?.name || 'Загрузка'}/>
            <Paper shadow="xl" radius="xl" p="xl">
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.body}>
                        <div className={styles.main}>
                            <ProductImage/>
                            <ProductOrder/>
                        </div>
                        <div className={styles.additional}>
                            <ProductInfo/>
                            <BuyingWith title={"С этим товаром покупают"}/>
                            <BuyingWith title={"Похожие товары"}/>
                        </div>
                    </div>
                </div>
            </Paper>
        </ProductInfoContext.Provider>

    );
};

export default SingleProduct;


export async function getStaticPaths() {

    const {products} = await productApi.getProducts().then(({data}) => {
        return {...data, products: data.products}
    });

    const paths = products.map((product) => ({
        params: {id: '' + product.id, slug: product.slug},
    }))

    return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
    const product = await productApi.getProduct(params).then(({data}) => {
        return data
    });


    return {
        props: {
            product,
        },
    };
}