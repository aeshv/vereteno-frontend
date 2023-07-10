import React, {useState} from 'react';
import {createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, rem} from '@mantine/core';
import {cartApi} from "@/api/cart";
import CartItemRow from "@/components/features/cart/CartItemRow/CartItemRow";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0],
    },
}));

export function CartTable({data}) {


    const {classes, cx} = useStyles();
    const [selection, setSelection] = useState([]);

    const toggleRow = (id) => setSelection((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    const toggleAll = () => setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);

        return <CartItemRow item={item} isSelected={selected} toggleRow={toggleRow} key={item.id}/>
    });

    return (<ScrollArea>
        <Table miw={800} verticalSpacing="sm">
            <thead>
            <tr>
                <th style={{width: rem(40)}}>
                    <Checkbox
                        onChange={toggleAll}
                        checked={selection.length === data.length}
                        indeterminate={selection.length > 0 && selection.length !== data.length}
                        transitionDuration={0}
                    />
                </th>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    </ScrollArea>);
}