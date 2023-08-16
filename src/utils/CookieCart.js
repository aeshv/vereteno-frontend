import {getCookie, setCookie} from "cookies-next";
import {useState} from "react";


export const CookieCart = {
    pushToCart(item) {
        const stringCart = getCookie('guestCart') || null
        const currentCartTemp = stringCart !== null ? JSON.parse(stringCart) : []
        setCookie('guestCart', [...currentCartTemp, item])
        return (currentCartTemp)
    },

    clearAllCart() {
        setCookie('guestCart', null)
    },

    getParsedCart() {
        const stringCart = getCookie('guestCart') || null
        return stringCart !== null ? JSON.parse(stringCart) : []
    },

}