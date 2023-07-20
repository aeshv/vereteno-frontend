import React, {useContext, useState} from 'react'
import {ActionIcon, Avatar, Checkbox, createStyles, Group, Menu, Text} from "@mantine/core";
import {cartApi} from "@/api/cart";
import {productApi} from "@/api";
import {IconDots, IconMessages, IconNote, IconPencil, IconReportAnalytics, IconTrash} from "@tabler/icons-react";
import {useQuery} from "react-query";
import {CartContext} from "@/components/shared/Contexts/CartContext";
import {QuantityInput} from "@/components/features/cart/CartItemRow/QuantityInput";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0],
    },
}));
const CartItemRow = ({item, isSelected, toggleRow, isDisabled}) => {
    const {classes, cx} = useStyles();
    const currentItemInfo = item.product;
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);

    const cartContext = useContext(CartContext)
    const {refetchCartFunction} = cartContext
    const handleDeleteItemFromCart = () => {
        let id = item.id
        setIsDeleteLoading(true)
        cartApi.removeItemCartById(({id: id})).then(
            result => {
                console.log('done')
                refetchCartFunction()
            },
            error => {
                console.log('error')
            }
        ).then(
            result => {
                setIsDeleteLoading(false)
            },
            error => {
                setIsDeleteLoading(false)
            }
        )

    }

    const handleChangeItemAmount = (amount) => {
        let id = item.id
        cartApi.updateItemById({id: id, quantity: amount})
    }


    return (<tr key={item.id} className={cx({[classes.rowSelected]: isSelected})}>
        <td>
            <Checkbox
                checked={isSelected}
                onChange={() => toggleRow(item)}
                transitionDuration={0}
                disabled={isDisabled}
            />
        </td>
        <td>
            <Group spacing="sm">
                {/*<Avatar size={26} src={item?.avatar} radius={26}/>*/}
                <Text size="sm" weight={500}>
                    {currentItemInfo?.name}
                </Text>
            </Group>
        </td>
        <td>
            <QuantityInput current={item.quantity || 1} handleChange={handleChangeItemAmount}/>
        </td>
        <td>{currentItemInfo?.price}</td>
        <td>
            <Group spacing={0} position="right">
                <ActionIcon variant="light" color="red" loading={isDeleteLoading}
                            onClick={() => handleDeleteItemFromCart(item.id)}>
                    <IconTrash size="1rem" stroke={1.5}/>
                </ActionIcon>

            </Group>
        </td>
    </tr>)

}
export default CartItemRow


