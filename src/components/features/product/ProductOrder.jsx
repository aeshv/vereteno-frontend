import React, {useContext, useMemo} from "react";
import styles from "./ProductOrder.module.scss";
import {IconShare, IconScale, IconStack3,} from "@tabler/icons-react";
import ProductBuyButtons from "@/components/features/product/ProductBuyButtons";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {useClipboard} from "@mantine/hooks";
import {useRouter} from "next/router";
import LoginToBuyButton from "@/components/features/product/LoginToBuyButton";
import {Skeleton} from "@mantine/core";
import {VendorInfo} from "@/components/features/product/blocks/vendorInfo/VendorInfo";

const ProductOrder = () => {

	const ctx = useContext(ProductInfoContext)
	const {product, vendorIndex, sizeControl} = ctx
	const clipboard = useClipboard({timeout: 1400});
	const productInfo = product?.vendorCodes?.[vendorIndex.currentVendorIndex]
	const currentSizeAmount = useMemo(() => productInfo?.sizes.filter((item) => item?.id === sizeControl.selectedSize)?.[0]?.quantity, [productInfo, sizeControl.selectedSize]);

	return (<>
		<div className={styles.container}>
			{product?.name ? <h1 className={styles.product__title}>{product?.name}</h1> :
				<Skeleton height={30} width={100} radius="xl"/>}

			<div className={styles.backinfo}>
				{productInfo?.code ?
					<div
						className={styles.tag}>Артикул: {productInfo?.code}</div> :
					<Skeleton height={15} width={60} mt={2} radius="xl"/>}

			</div>
			<div className={styles.shopinfo}>
				{/*Наличие*/}
				{currentSizeAmount > 0 ? (
						<div className={styles.shop__item__disabled}>
							<IconStack3 size="1.05rem" stroke={1.5}/>
							<span>В наличии ({currentSizeAmount} шт.)</span>
						</div>
					) :
					(
						<div className={styles.shop__item__disabled}>
							<IconStack3 size="1.05rem" stroke={1.5}/>
							<span>Нет в наличии этого размера</span>
						</div>
					)
				}


				{/*Кнопка Поделиться*/}
				<div className={styles.shop__item__active}>
					<IconShare size="1.05rem" stroke={1.5}/>
					<span
						onClick={() => clipboard.copy(window?.location?.href || '')}>{clipboard.copied ? 'Скопировано!' : 'Поделиться'}</span>
				</div>
			</div>

			<VendorInfo/>
			{/*Цена*/}
			<div className={styles.price}>

				{productInfo?.price ? !productInfo?.discount ?
						<>
							<span className={styles.current}>{productInfo?.price} руб.</span>
						</>
						:
						<>
							<span className={styles.old}>{productInfo?.price * productInfo?.discount} руб.</span>
							<span className={styles.current}>{productInfo?.price} руб.</span>
						</>
					:
					<Skeleton height={90} mt={2} radius="xl"/>}

			</div>

			<ProductBuyButtons/>
			<LoginToBuyButton/>
		</div>
	</>);
};

export default ProductOrder;
