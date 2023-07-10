import React from 'react'
import {Avatar, Checkbox, createStyles, Group, Text} from "@mantine/core";
import {cartApi} from "@/api/cart";
import {productApi} from "@/api";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0],
    },
}));
const CartItemRow = ({item, isSelected, toggleRow}) => {
    const {classes, cx} = useStyles();
    const currentItemInfo = item.product;
    console.log('item from cat', item)

    // React.useEffect(() => {
    // 	const data = productApi.getProduct({id: item.product_id}).then(({data}) => {
    // 		if (data) {
    // 			setCurrentItemInfo(data?.product)
    // 		}
    // 	});
    // }, [item])

    return (<tr key={item.id} className={cx({[classes.rowSelected]: isSelected})}>
        <td>
            <Checkbox
                checked={isSelected}
                onChange={() => toggleRow(item.id)}
                transitionDuration={0}
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
        <td>{item?.quantity}</td>
        <td>{currentItemInfo?.price}</td>
    </tr>)

}
export default CartItemRow
