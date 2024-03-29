import {OrderForm} from "@/components/features/OrderForm/OrderForm";
import {useState} from "react";
import {Badge, Button, Center, Chip, Collapse, Divider, Group, Paper, Stack, Text} from "@mantine/core";

export const CartFooter = ({selectedItems, isOrderFormVisible, setIsOrderFormVisible}) => {
    const totalPrice = selectedItems.reduce((acc, obj) => {
        const temp = obj?.discountTotalPrice !== null
            ? obj?.discountTotalPrice : obj?.originalTotalPrice

        return (
            acc + temp
        )
    }, 0);


    return (
        <>

            <Center my={'xl'}>
                <Stack>
                    <Group px={'xl'}>
                        <Text>Итого:</Text><Badge variant="gradient" gradient={{
                        from: 'teal',
                        to: 'lime',
                        deg: 105
                    }}>{totalPrice} руб.</Badge>
                    </Group>

                    {!isOrderFormVisible &&
                        <Button onClick={() => setIsOrderFormVisible(true)} disabled={!selectedItems.length}>Перейти к
                            оформлению </Button>
                    }

                </Stack>
            </Center>


            <Collapse in={isOrderFormVisible}>
                <Divider my="xl"/>
                <Paper shadow="xs" radius="xl" p="xl" my={'xl'}>
                    <OrderForm itemsToOrder={selectedItems}/>
                </Paper>
            </Collapse>

        </>
    )
}
