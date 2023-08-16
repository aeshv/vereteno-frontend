import {Center, Checkbox, Loader, Paper, ScrollArea, Table} from "@mantine/core";
import React, {useContext, useState} from "react";
import {GuestCartContext} from "@/components/shared/Contexts/GuestCartContext";
import {useGuestCartProducts, useProducts} from "@/utils/hooks/useProducts";

export const GuestCartTable = () => {
    const {cookieData} = useContext(GuestCartContext)
    const getGuestProducts = useGuestCartProducts(
        {productVendorCodeIds: cookieData.map((item) => item?.productVendorCodeIds)}
    );
    const {isLoading, isError, data, error} = getGuestProducts


    const [gluedData, setGluedData] = useState([data?.data?.products]);

    console.log('Guest ready to use data: ', gluedData)
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
            <ScrollArea>
                <Table verticalSpacing="sm" highlightOnHover>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Размер</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </ScrollArea>

        </Paper>
    )
}
