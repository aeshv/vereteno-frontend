import React, {useContext, useState} from 'react';
import {createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Collapse} from '@mantine/core';
import {cartApi} from "@/api/cart";
import CartItemRow from "@/components/features/cart/CartItemRow/CartItemRow";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import {CartFooter} from "@/components/features/cart/CartFooter/CartFooter";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0],
    },
}));

export function CartTable() {
    const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
    const {items} = useContext(CartContext)
    const {classes, cx} = useStyles();
    const [selection, setSelection] = useState([]);
    const toggleRow = (newItem) => setSelection((current) => current.includes(newItem) ? current.filter((item) => item.id !== newItem.id) : [...current, newItem]);
    const toggleAll = () => setSelection((current) => (current.length === items.length ? [] : items.map((item) => item.id)));

    const rows = items.map((item) => {
        const selected = selection.includes(item);

        return <CartItemRow item={item} isSelected={selected} toggleRow={toggleRow} key={item.id}
                            isDisabled={isOrderFormVisible}/>
    });

    return (
        <>
            {/*<Collapse in={!isOrderFormVisible}>*/}
            <ScrollArea>
                <Table miw={800} verticalSpacing="sm">
                    <thead>
                    <tr>
                        <th style={{width: rem(40)}}>
                            <Checkbox
                                onChange={toggleAll}
                                checked={selection.length === items.length}
                                indeterminate={selection.length > 0 && selection.length !== items.length}
                                transitionDuration={0}
                                disabled={isOrderFormVisible}
                            />
                        </th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
            {/*</Collapse>*/}
            <CartFooter selectedItems={selection} isOrderFormVisible={isOrderFormVisible}
                        setIsOrderFormVisible={setIsOrderFormVisible}/>
        </>
    );
}