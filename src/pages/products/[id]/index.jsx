import ProductImage from "@/components/features/product/ProductImage";
import ProductInfo from "@/components/features/product/ProductInfo";
import ProductOrder from "@/components/features/product/ProductOrder";
import {Paper} from "@mantine/core";
import React, {createContext, useEffect} from "react";
import styles from "./SingleProduct.module.scss";
import BuyingWith from "@/components/features/product/blocks/BuyingWith/BuyingWith";
import {productApi} from "@/api";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";


const SingleProduct = ({product}) => {

	return (<ProductInfoContext.Provider value={product}>
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
		console.log('Dasdasdasdasdasd ', typeof data, data)
		return {...data, products : data.products.slice(0, 20)}
	});

	const paths = products.map((huy) => ({
		params: {id: '' + huy.id, slug: huy.slug},
	}))

	return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
	const {product} = await productApi.getProduct(params).then(({data}) => {
		return data
	});

	return {
		props: {
			product,
		},
	};
}