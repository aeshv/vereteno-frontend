import React, {useContext} from "react";
import styles from "./SingleProduct.module.scss";
import ProductSectionAbout from "./sections/about/ProductSectionAbout";
import ProductSectionGuarantee from "./sections/guarantee/ProductSectionGuarantee";
import ProductSectionSpecs from "./sections/specs/ProductSectionSpecs";
import ProductSectionPayment from "./sections/payment/ProductSectionPayment";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        transition: "all 0.3s",
        maxWidth: "100%"
    },
    container: {
        background: "#f0f1f5",
        borderRadius: "10px",
        transition: "all 0.3s"
    },
    image: {
        position: "relative",
        background: "#f0f1f5",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    tabs: {
        backgroundColor: "#fff",
        border: `1.5px solid ${theme.colors.brand[6]}`,
        borderRadius: "4px",
        overflow: "hidden"
    },
    tab_header: {
        display: "flex",
        width: "100%",
        "@media screen and (max-width: 768px)": {flexDirection: "column"}
    },
    tab_item: {
        cursor: "pointer",
        padding: "10px 10px 20px",
        transition: "all 0.2s ease-in-out",
        width: "100%",
        textAlign: ["center", "center"],
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#5d6c7b",
        borderBottom: "2px solid transparent",
    },
    tab_item__selected: {
        color: `${theme.colors.brand[6]}`,
        backgroundColor: "#f4f4f4",
        borderBottom: `2px solid ${theme.colors.brand[6]}`
    },
    tab_content: {padding: "16px 2rem"}
}));


const ProductInfo = () => {
    const {classes: styles, theme, cx} = useStyles();
    const tabs = [
        {label: "О товаре", content: <ProductSectionAbout/>},
        {label: "Характеристики", content: <ProductSectionSpecs/>},
        {label: "Гарантии", content: <ProductSectionGuarantee/>},
        {label: "Доставка и оплата", content: <ProductSectionPayment/>},
    ];
    const [selectedTab, setSelectedTab] = React.useState(0);
    return (
        <div className={styles.tabs}>
            <div className={styles.tab_header}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={cx(styles.tab_item,
                            selectedTab === index && styles.tab_item__selected
                        )}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className={styles.tab_content}>{tabs[selectedTab].content}</div>
        </div>
    );
};

export default ProductInfo;
