import React, {useContext, useState} from 'react'
import {Button, createStyles, Text} from "@mantine/core";
import {IconExternalLink, IconShoppingCart} from "@tabler/icons-react";
import {notifications} from "@mantine/notifications";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {cartApi} from "@/api/cart";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {CookieCart, useCookieCart} from "@/utils/CookieCart";
import {getCookie, setCookie} from "cookies-next";

const CatalogButtonStyles = createStyles(() => ({
    button: {
        background: "#61e591",
        // border: "1.5px solid #6F73EE",
        borderRadius: "5px",
        padding: "15px 25px",
        width: '200px',
        height: '53px',
        border: "1.5px solid #61e591",
        '&:hover': {
            background: "#79e561",
        }
    },

    buyContainer: {
        marginTop: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '1rem',
    },

    text: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#282739"
    }
}));

const GuestBuyButton = () => {

    const {user} = useSelector((state) => state.auth)
    const {classes} = CatalogButtonStyles();


    const {product, vendorIndex, sizeControl} = useContext(ProductInfoContext)
    const currentVendorCodeId = product?.vendorCodes?.[vendorIndex.currentVendorIndex]?.productVendorCodeId
    const {selectedSize} = sizeControl


    const handlePlaceToCart = () => {
        CookieCart.pushToCart({
            productVendorCodeIds: currentVendorCodeId,
            quantity: 1,
            sizeIds: selectedSize,
        })
        notifications.show({
            title: "Успешно добавлено в корзину", message: 'Продолжите покупки или проверьте корзину', color: 'green'
        })
    }

    if (!user) {
        return (<div className={classes.buyContainer}>
            {/*<Text className={classes.text}>*/}
            {/*    Для покупки на сайте необходимо зарегистрироваться или авторизоваться под своим профилем*/}
            {/*</Text>*/}
            <Button className={classes.button} leftIcon={<IconShoppingCart/>}
                    onClick={(e) => handlePlaceToCart(e)}>
                В корзину (Гость)
            </Button>
        </div>)
    }
}
export default GuestBuyButton

