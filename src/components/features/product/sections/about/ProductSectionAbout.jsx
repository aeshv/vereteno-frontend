import React, {useContext} from "react";
import styles from "./sectionAbout.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import SpecRow from "@/components/shared/SpecRow/SpecRow";

const ProductSectionAbout = () => {
    const {product} = useContext(ProductInfoContext)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {product?.name}
                    </h1>
                    <p className={styles.description}>
                        {product?.description}
                    </p>
                </div>
                <div className={styles.additional}>
                    <div className={styles.tags}>
                        {product?.attributes?.map((spec, index) => {
                            if (spec.value !== 'Отсутствует') return (
                                <div key={index} className={styles.tag}>{spec.value}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSectionAbout;
