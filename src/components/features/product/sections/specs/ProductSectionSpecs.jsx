import SpecRow from "@/components/shared/SpecRow/SpecRow";
import React, {useContext} from "react";
import styles from "./sectionSpecs.module.scss";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";

const ProductSectionSpecs = () => {
    const {product, vendorIndex} = useContext(ProductInfoContext)
    const productInfo = product?.vendor_codes?.[vendorIndex.currentVendorIndex]
    console.log(product)
    return (
        <div className={styles.container}>
            {productInfo?.attributes?.map((spec, index) => (
                <SpecRow key={index} {...spec} />
            ))}
        </div>
    );
};

export default ProductSectionSpecs;
