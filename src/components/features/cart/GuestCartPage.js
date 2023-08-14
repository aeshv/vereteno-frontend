import {CartTable} from "@/components/features/cart/CartTable/CartTable";
import React, {useEffect, useState} from "react";
import {CartFooter} from "@/components/features/cart/CartFooter/CartFooter";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import {IconGardenCartOff} from "@tabler/icons-react";
import {Center, Loader} from "@mantine/core";
import {useSelector} from "react-redux";
import {useCarts} from "@/utils/hooks/useCarts";
import {GuestCartTable} from "@/components/features/cart/GuestCartTable/GuestCartTable";
import {useCookieCart} from "@/utils/CookieCart";
import CartItemRow from "@/components/features/cart/CartItemRow/CartItemRow";

export const GuestCartPage = () => {
	const [getCurrentCart, pushToCart, clearAllCart] = useCookieCart()
	const [data, setData] = useState([]);

	console.log('Гостевые товары', data)

	useEffect(()=>{
		const items = getCurrentCart()
		setData(items)
		
	}, [getCurrentCart])
	
	// const data = getCurrentCart
	//
	// const [selection, setSelection] = useState([]);
	// const toggleRow = (newItem) => setSelection((current) => current.includes(newItem) ? current.filter((item) => item.id !== newItem.id) : [...current, newItem]);
	// const toggleAll = () => setSelection((current) => (current.length === items.length ? [] : items.map((item) => item)));
	// const rows = items.map((item) => {
	// 	const selected = selection.includes(item);
	//
	// 	return <CartItemRow item={item} isSelected={selected} toggleRow={toggleRow} key={item.id}
	// 											isDisabled={isOrderFormVisible}/>
	// });

	return (<>
		{false >= 1 ?

			<CartContext.Provider value={{data: data}}>
				<GuestCartTable/>
			</CartContext.Provider>

			:

			<NoDataBlock title={'Гостевая корзина пуста'} icon={<IconGardenCartOff size="85px"/>}/>}


	</>)
}
