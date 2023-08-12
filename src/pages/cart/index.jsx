import NoDataCart from '@/components/features/cart/NoDataCart/NoDataCart'
import {Center, Loader, Paper} from '@mantine/core'
import React from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {useSelector} from "react-redux";
import {CartPage} from "@/components/features/cart/CartPage";
import {useCarts} from "@/utils/hooks/useCarts";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import PageHead from "@/components/SEO/PageHead";
import {IconGardenCartOff} from "@tabler/icons-react";

const Index = () => {
    const {user} = useSelector((state) => state.auth)
    const getCart = useCarts();

    const {isLoading, isError, data, error, refetch} = getCart


    if (isError) {
        return (
            <>Ошибка загрузки</>
        )
    }

    if (isLoading) {
        return (
            <Center mt={'xl'}>
                <Loader/>
            </Center>
        )
    }

    return (<Paper>
        <>
            <PageHead title={'Корзина'}/>
            {data?.data?.totalCount >= 1 ?
                <CartContext.Provider value={{data: data?.data, refetchCartFunction: refetch}}>
                    <CartPage/>
                </CartContext.Provider>

                : <NoDataCart icon={<IconGardenCartOff size="85px"/>}/>}
        </>
    </Paper>)
}

Index.Layout = UserPageLayout;

export default Index