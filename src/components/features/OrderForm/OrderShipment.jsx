import {Group, Radio, Stack} from "@mantine/core";

export const OrderShipment = ({form}) => {
    return (
        <>
            <Radio.Group
                name="shipmentType"
                label="Выбирете способ доставки"
                description=""
                withAsterisk
                {...form.getInputProps('shipmentType')}
            >
                <Stack mt="xs">
                    <Radio value="Согласовать способ доставки с оператором — подберет оптимальный тариф"
                           label="Согласовать способ доставки с оператором — подберет оптимальный тариф"/>
                    <Radio value="Самовывоз со склада: г. Ростов-на-Дону, ул. Курская д.1"
                           label="Самовывоз со склада: г. Ростов-на-Дону, ул. Курская д.1"/>
                    <Radio value="Самовывоз из магазина: г. Ростов-на-Дону, ЦУМ. 2 этаж"
                           label="Самовывоз из магазина: г. Ростов-на-Дону, ЦУМ. 2 этаж"/>
                    <Radio value="Почта (только при онлайн оплате), срок: 1 дн. - 230 р."
                           label="Почта (только при онлайн оплате), срок: 1 дн. - 230 р."/>
                </Stack>
            </Radio.Group>
        </>
    )
}
