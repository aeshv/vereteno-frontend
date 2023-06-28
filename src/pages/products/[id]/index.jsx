import ProductImage from "@/components/features/product/ProductImage";
import ProductInfo from "@/components/features/product/ProductInfo";
import ProductOrder from "@/components/features/product/ProductOrder";
import {Paper} from "@mantine/core";
import React from "react";
import styles from "./SingleProduct.module.scss";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import {productApi} from "@/api";

const SingleProduct = () => {
    // const {products: currentProduct} = product
    return (
        <Paper shadow="xl" radius="xl" p="xl">
            <div className={styles.container}>
                <div className={styles.top}></div>
                <div className={styles.body}>
                    <div className={styles.main}>
                        <ProductImage/>
                        {/*<ProductOrder product={currentProduct[0]}/>*/}
                    </div>
                    <div className={styles.additional}>
                        {/*<ProductInfo product={product}/>*/}
                        <BuyingWith title={"С этим товаром покупают"}/>
                        <BuyingWith title={"Похожие товары"}/>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default SingleProduct;


// export async function getStaticPaths() {
//
// 	const {products} = await productApi.getProducts().then(({data}) => {
// 		return data;
// 	});
//
// 	const paths = products.map((huy) => ({
// 		params: {id: '' + huy.id, slug: huy.slug},
// 	}))
//
// 	return {paths, fallback: false}
// }
//
// export const getStaticProps = async ({params}) => {
// 	console.log('getStaticProps', params)
// 	const product = await productApi.getProducts(params).then(({data}) => {
// 		return data;
// 	});
// 	return {
// 		props: {
// 			product,
// 		},
// 	};
// }