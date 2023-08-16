'use client'

import React, {useCallback, useEffect, useState} from "react";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import {IconGardenCartOff} from "@tabler/icons-react";
import {GuestCartTable} from "@/components/features/cart/GuestCartTable/GuestCartTable";
import {CookieCart, useCookieCart} from "@/utils/CookieCart";
import {GuestCartContext} from "@/components/shared/Contexts/GuestCartContext";
import {Button, Center, Loader} from "@mantine/core";
import {useGuestCartProducts} from "@/utils/hooks/useProducts";


export const GuestCartPage = () => {
    const [cookieData, setCookieData] = useState([]);

    const handleCookie = () => {
        const parsedCart = CookieCart.getParsedCart();
        setCookieData(parsedCart);
    }

    useEffect(() => {
        handleCookie();
    }, []);

    //
    // console.log('cookieData', cookieData, cookieData.map((item) => item?.productVendorCodeIds))


    if (!!cookieData) return (
        <>
            <Button onClick={() => CookieCart.clearAllCart()}>Почистить куки</Button>
            {cookieData?.length >= 1 ?

                <GuestCartContext.Provider value={{cookieData: cookieData}}>
                    <GuestCartTable/>
                </GuestCartContext.Provider>

                :

                <>
                    <NoDataBlock title={'Гостевая корзина пуста'} icon={<IconGardenCartOff size="85px"/>}/>
                </>
            }
        </>)
}
