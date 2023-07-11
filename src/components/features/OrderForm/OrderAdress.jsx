import {Select, TextInput} from "@mantine/core";
import {regions} from "@/utils/statick/regions";

export const OrderAdress = ({form}) => {
    return (
        <>
            <Select
                mb="md"
                data={regions}
                searchable
                nothingFound="Ничего не найдено"
                placeholder="Выбирете регион доставки"
                label="Регион"
                withAsterisk
                {...form.getInputProps('regionName', {type: 'select'})}
            />
            <TextInput label="Город" placeholder="Ростов-на-Дону" {...form.getInputProps('cityName')} withAsterisk/>
        </>
    )
}
