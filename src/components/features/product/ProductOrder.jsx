import React, {useContext} from "react";
import styles from "./ProductOrder.module.scss";
import {IconShare, IconScale, IconStack3,} from "@tabler/icons-react";
import ProductBuyButtons from "@/components/features/product/ProductBuyButtons";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {useClipboard} from "@mantine/hooks";
import {useRouter} from "next/router";
import LoginToBuyButton from "@/components/features/product/LoginToBuyButton";
import {Skeleton} from "@mantine/core";

const ProductOrder = () => {

    const product = useContext(ProductInfoContext)
    const clipboard = useClipboard({timeout: 1400});

    return (<>
        <div className={styles.container}>
            {product?.name ? <h1 className={styles.product__title}>{product?.name}</h1> :
                <Skeleton height={30} width={100} radius="xl"/>}

            <div className={styles.backinfo}>
                {product?.vendor_code?.code ? <div className={styles.tag}>Артикул: {product?.vendor_code?.code}</div> :
                    <Skeleton height={15} width={60} mt={2} radius="xl"/>}

            </div>
            <div className={styles.shopinfo}>
                {product?.quantity > 0 && (
                    <div className={styles.shop__item}>
                        <IconStack3 size="1.05rem" stroke={1.5}/>
                        <span>В наличии ({product?.quantity} шт.)</span>
                    </div>
                )}
                <div className={styles.shop__item}>
                    <IconShare size="1.05rem" stroke={1.5}/>
                    <span
                        onClick={() => clipboard.copy(window?.location?.href && '')}>{clipboard.copied ? 'Скопировано!' : 'Поделиться'}</span>
                </div>
            </div>
            <div className={styles.price}>

                {product?.price ? product?.discount === 1 ?
                        <>
                            <span className={styles.current}>{product?.price} ₽</span>
                        </>
                        :
                        <>
                            <span className={styles.old}>{product?.price * product?.discount} ₽</span>
                            <span className={styles.current}>{product?.price} ₽</span>
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
