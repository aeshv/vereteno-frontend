import { Paper} from '@mantine/core'
import React from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {useSelector} from "react-redux";
import {CartPage} from "@/components/features/cart/CartPage";
import PageHead from "@/components/SEO/PageHead";
import {GuestCartPage} from "@/components/features/cart/GuestCartPage";

const Index = () => {
	const {user} = useSelector((state) => state.auth)


	return (<Paper>
		<PageHead title={'Корзина'}/>
		{user ? <CartPage/> : <GuestCartPage/>}
	</Paper>)


}

Index.Layout = UserPageLayout;

export default Index