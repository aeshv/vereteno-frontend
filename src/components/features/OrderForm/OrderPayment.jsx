import {Radio, Stack} from "@mantine/core";

export const OrderPayment = ({form}) => {
    return (
        <>
            <Radio.Group
                name="paymentType"
                label="Выберете способ доставки"
                description=""
                withAsterisk
                {...form.getInputProps('paymentMethod')}
            >
                <Stack mt="xs">
                    <Radio value="Онлайн - картой любого банка"
                           label="Онлайн - картой любого банка"/>
                    <Radio value="При получении"
                           label="При получении"/>
                    <Radio value="Наложенным платежом"
                           label="Наложенным платежом"/>
                </Stack>
            </Radio.Group>
        </>
    )
}
