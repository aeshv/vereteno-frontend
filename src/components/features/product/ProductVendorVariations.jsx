import React, {useContext, useState} from "react";
import styles from "./SingleProduct.module.scss";
import ProductSectionAbout from "./sections/about/ProductSectionAbout";
import ProductSectionGuarantee from "./sections/guarantee/ProductSectionGuarantee";
import ProductSectionSpecs from "./sections/specs/ProductSectionSpecs";
import ProductSectionPayment from "./sections/payment/ProductSectionPayment";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {Center, createStyles, Flex} from "@mantine/core";
import {VendorCard} from "@/components/entity/card/VendorCard/VendorCard";


const variationStyles = createStyles((theme) => ({

    title: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "35px",
        lineHeight: "51px",
        textTransform: "uppercase",
        color: "#282739",
        marginBottom: "30px"
    },

    text: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: theme.fontSizes.md,
        lineHeight: "20px",
        color: theme.colors.gray[6],
    },

}));


const ProductVendorVariations = () => {
    const {classes} = variationStyles();

    const ctx = useContext(ProductInfoContext)
    const {product, vendorIndex} = ctx

    const {vendorCodes} = product
    const {currentVendorIndex, setCurrentVendorIndex} = vendorIndex



    return (
        <>
            <h3 className={classes.title}>Другие вариации</h3>
            <Center>
                <Flex gap={'xs'}>
                    {vendorCodes?.map((vendor, index) => (

                            <VendorCard key={index} handleChangeVendor={() => setCurrentVendorIndex(index)}
                                        material={vendor?.material}
                                        size={vendor?.size} color={vendor?.color}/>

                    ))}
                </Flex>
            </Center>
        </>
    );
};

export default ProductVendorVariations;
