import NoDataCart from '@/components/features/cart/NoDataCart/NoDataCart'
import {Paper} from '@mantine/core'
import React, {useEffect, useState} from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {CartTable} from "@/components/features/cart/CartTable/CartTable";
import {useSelector} from "react-redux";
import {cartApi} from "@/api/cart";

const Index = () => {
    const {user} = useSelector((state) => state.auth)

    const [userCartItemsList, setUserCartItemsList] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(true);


    React.useEffect(() => {
        const data = cartApi.getCartById({}).then(({data}) => {
            if (data?.items) {
                setUserCartItemsList(data?.items)
                setIsLoadingList(false)
            }
        });
    }, [])

    console.log(userCartItemsList)

    return (<Paper>
        {isLoadingList ? <>Загрузка..</> : <>
            {userCartItemsList.length >= 1 ? <CartTable data={userCartItemsList}/> : <NoDataCart/>}
        </>}
    </Paper>)
}

Index.Layout = UserPageLayout;

export default Index