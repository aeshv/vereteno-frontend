import React, {useContext} from "react";
import styles from "./ProductOrder.module.scss";
import {IconShare, IconScale, IconStack3,} from "@tabler/icons-react";
import ProductBuyButtons from "@/components/features/product/ProductBuyButtons";
import {ProductInfoContext} from "@/pages/products/[id]/ProductContext";

const ProductOrder = () => {

	const product = useContext(ProductInfoContext)

	return (<>
		<div className={styles.container}>
			<h1 className={styles.product__title}>{product?.name || 'Ошибка загрузки имени'}</h1>
			<div className={styles.backinfo}>
				<div className={styles.tag}>Купили: 129 раз</div>
				<div className={styles.tag}>Артикул: ЫВАЫВА-020Ы</div>
			</div>
			<div className={styles.shopinfo}>
				{product?.quantity > 0 && (
					<div className={styles.shop__item}>
						<IconStack3 size="1.05rem" stroke={1.5}/>
						<span>В наличии ({product?.quantity} шт.)</span>
					</div>
				)}
				{/*<div className={styles.shop__item}>*/}
				{/*	<IconScale size="1.05rem" stroke={1.5}/>*/}
				{/*	<span>Сравнить</span>*/}
				{/*</div>*/}
				<div className={styles.shop__item}>
					<IconShare size="1.05rem" stroke={1.5}/>
					<span>Поделиться</span>
				</div>
			</div>

			<div className={styles.price}>
				{product?.discount_id === 1 ?
					<>
						<span className={styles.current}>{product?.price} ₽</span>
					</>
					:
					<>
						<span className={styles.old}>{product?.price} ₽</span>
						<span className={styles.current}>{product?.price * product?.discount_id} ₽</span>
					</>
				}
			</div>

			<ProductBuyButtons/>

		</div>
	</>);
};

export default ProductOrder;
