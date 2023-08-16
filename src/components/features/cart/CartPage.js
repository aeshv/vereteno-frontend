import {CartTable} from "@/components/features/cart/CartTable/CartTable";
import React from "react";
import {CartFooter} from "@/components/features/cart/CartFooter/CartFooter";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import {IconGardenCartOff} from "@tabler/icons-react";
import {Center, Loader} from "@mantine/core";
import {useSelector} from "react-redux";
import {useCarts} from "@/utils/hooks/useCarts";

export const CartPage = () => {
	const {user} = useSelector((state) => state.auth)

	const getCart = useCarts();
	const {isLoading, isError, data, refetch} = getCart

	if (isError && user) {
		return (<Center mt={'xl'}>Ошибка загрузки</Center>)
	}

	if (isLoading && user) {
		return (<Center mt={'xl'}>
			<Loader/>
		</Center>)
	}

	return (<>
			{data?.data?.totalCount >= 1 ? <CartContext.Provider value={{data: data?.data, refetchCartFunction: refetch}}>
					<CartTable/>
				</CartContext.Provider>

				: <NoDataBlock icon={<IconGardenCartOff size="85px"/>}/>}


		</>)
}
