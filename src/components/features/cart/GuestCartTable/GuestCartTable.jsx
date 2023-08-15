import {useCookieCart} from "@/utils/CookieCart";
import {Center, Checkbox, Loader, Paper, ScrollArea, Table} from "@mantine/core";
import React, {useContext} from "react";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import {GuestCartContext} from "@/components/shared/Contexts/GuestCartContext";
import {useGuestCartProducts, useProducts} from "@/utils/hooks/useProducts";

export const GuestCartTable = () => {
    const {cookieData} = useContext(GuestCartContext)

    const getGuestProducts = useGuestCartProducts(
        {productVendorCodeIds: cookieData.map((item) => item?.productVendorCodeIds)}
    );
    const {isLoading, isError, data, error} = getGuestProducts


    if (isError) {
        return (<Center mt={'xl'}>Ошибка загрузки</Center>)
    }

    if (isLoading) {
        return (<Center mt={'xl'}>
            <Loader/>
        </Center>)
    }

    return (
        <Paper>
            Загружено
            {/*<ScrollArea>*/}
            {/*	<Table verticalSpacing="sm" highlightOnHover>*/}
            {/*		<thead>*/}
            {/*		<tr>*/}
            {/*			<th>*/}
            {/*				<Checkbox*/}
            {/*					// onChange={toggleAll}*/}
            {/*					checked={selection.length === items.length}*/}
            {/*					indeterminate={selection.length > 0 && selection.length !== items.length}*/}
            {/*					transitionDuration={0}*/}
            {/*					disabled={isOrderFormVisible}*/}
            {/*				/>*/}
            {/*			</th>*/}
            {/*			<th>Название</th>*/}
            {/*			<th>Размер</th>*/}
            {/*			<th>Количество</th>*/}
            {/*			<th>Цена</th>*/}
            {/*			<th>Действия</th>*/}
            {/*		</tr>*/}
            {/*		</thead>*/}
            {/*		<tbody>{rows}</tbody>*/}
            {/*	</Table>*/}
            {/*</ScrollArea>*/}

        </Paper>
    )
}
