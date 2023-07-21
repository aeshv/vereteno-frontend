import React, {useContext, useState} from 'react'
import {Button, createStyles, Text} from "@mantine/core";
import {IconExternalLink, IconShoppingCart} from "@tabler/icons-react";
import {notifications} from "@mantine/notifications";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {cartApi} from "@/api/cart";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

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

const LoginToBuyButton = () => {

    const {user} = useSelector((state) => state.auth)
    const router = useRouter()
    const {classes} = CatalogButtonStyles();


    const handleRedirectToAuth = () => {
        router.push('/auth')
    }

    if (!user) {
        return (<div className={classes.buyContainer}>
            <Text className={classes.text}>
                Для покупки на сайте необходимо зарегистрироваться или авторизоваться под своим профилем
            </Text>
            <Button className={classes.button} leftIcon={<IconExternalLink/>}
                    onClick={(e) => handleRedirectToAuth(e)}>
                Авторизоваться
            </Button>
        </div>)
    } else {
        <></>
    }
}
export default LoginToBuyButton
