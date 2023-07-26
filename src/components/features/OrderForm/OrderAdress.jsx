import {Select, TextInput} from "@mantine/core";
import {regions} from "@/utils/statick/regions";
import {countries} from "@/utils/statick/countries";

export const OrderAdress = ({form}) => {
    // {
    //     "status": "string",
    //     "paymentStatus": "string",
    //     "paymentMethod": "string",
    //     "country": "string",
    //     "region": "string",
    //     "city": "string",
    //     "street": "string",
    //     "postcode": 0
    // }
    return (
        <>
            <Select
                mb="md"
                data={countries}
                nothingFound="Ничего не найдено"
                placeholder="Выбирете Страну"
                label="Страна"
                withAsterisk
                {...form.getInputProps('country', {type: 'select'})}
            />
            <Select
                mb="md"
                data={regions}
                nothingFound="Ничего не найдено"
                placeholder="Выбирете регион доставки"
                label="Регион"
                withAsterisk
                {...form.getInputProps('region', {type: 'select'})}
            />
            <TextInput mb="md" label="Город" placeholder="Введите город доставки" {...form.getInputProps('city')}
                       withAsterisk/>
            <TextInput mb="md" label="Улица"
                       placeholder="Введите улицу с номером дома и квартирой" {...form.getInputProps('street')}
                       withAsterisk/>
            <TextInput mb="md" label="Почтовый индекс"
                       placeholder="Введите почтовый индекс" {...form.getInputProps('postcode')}
                       withAsterisk/>
        </>
    )
}
