import React from "react";
import styles from "./ProductOrder.module.scss";
import {IconShare, IconScale, IconStack3,} from "@tabler/icons-react";
import ProductBuyButtons from "@/components/features/product/ProductBuyButtons";

const ProductOrder = () => {


	return (<>
		<div className={styles.container}>
			<h1 className={styles.product__title}>ЧЕРНАЯ ШЛЯПА ФЕДОРА BLIXEN EDITION С УЗКИМИ ПОЛЯМИ</h1>
			<div className={styles.backinfo}>
				<div className={styles.tag}>Купили: 129 раз</div>
				<div className={styles.tag}>Артикул: ЫВАЫВА-020Ы</div>
			</div>
			<div className={styles.shopinfo}>
				<div className={styles.shop__item}>
					<IconStack3 size="1.05rem" stroke={1.5}/>
					<span>В наличии</span>
				</div>
				<div className={styles.shop__item}>
					<IconScale size="1.05rem" stroke={1.5}/>
					<span>Сравнить</span>
				</div>
				<div className={styles.shop__item}>
					<IconShare size="1.05rem" stroke={1.5}/>
					<span>Поделиться</span>
				</div>
			</div>

			<div className={styles.price}>
				<span className={styles.old}>32 990 р.</span>
				<span className={styles.current}>29 990 р.</span>
			</div>

			<ProductBuyButtons/>

		</div>
	</>);
};

export default ProductOrder;
