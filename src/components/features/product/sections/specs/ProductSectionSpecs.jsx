import SpecRow from "@/components/shared/SpecRow/SpecRow";
import React, {useContext} from "react";
import styles from "./sectionSpecs.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";

const ProductSectionSpecs = () => {
    const {product} = useContext(ProductInfoContext)

    return (
        <div className={styles.container}>
            {product?.attributes?.map((spec, index) => (
                <SpecRow key={index} {...spec} />
            ))}
        </div>
    );
};

export default ProductSectionSpecs;
