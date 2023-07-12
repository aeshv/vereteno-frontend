import NoDataCart from '@/components/features/cart/NoDataCart/NoDataCart'
import {Paper} from '@mantine/core'
import React, {useEffect, useState} from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {CartTable} from "@/components/features/cart/CartTable/CartTable";
import {useSelector} from "react-redux";
import {cartApi} from "@/api/cart";
import {CartPage} from "@/components/features/cart/CartPage";
import {useProducts} from "@/utils/hooks/useProducts";
import {useCarts} from "@/utils/hooks/useCarts";
import {CartContext} from "@/components/shared/Contexts/CartContext";

const Index = () => {
    const {user} = useSelector((state) => state.auth)
    const getCart = useCarts();

    const {isLoading, isError, data, error, refetch} = getCart


    return (<Paper>
        {isLoading ? <>Загрузка..</> : <>
            {data.data.totalCount >= 1 ?
                <CartContext.Provider value={{data: data?.data, refetchCartFunction: refetch}}>
                    <CartPage/>
                </CartContext.Provider>

                : <NoDataCart/>}
        </>}
    </Paper>)
}

Index.Layout = UserPageLayout;

export default Index