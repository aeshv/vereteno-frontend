import {
    UnstyledButton,
    Checkbox,
    Text,
    Image,
    SimpleGrid,
    createStyles,
    rem, MultiSelect,
} from "@mantine/core";
import {useUncontrolled} from "@mantine/hooks";
import {useRouter} from "next/router";
import React, {useState} from "react";


const mockdata = [
    {label: "Красный", color: "#dddd", value: 'cc-33'},
    {label: "Бирюзовый", color: "#00cacc", value: 'cc-55'},
];

export function ColorSelect() {

    const router = useRouter()
    const {query} = router
    const [value, setValue] = useState(query?.color || []);


    const onColorChange = (e) => {
        if (e.length >= 1) {
            //Значение цвета
            setValue(e)
            router.query.color = e
            router.push(router)
        } else {
            setValue([])
            if (router.query.color) {
                delete router.query.color
                router.push(router)
            }
        }

    };

    return (
        <SimpleGrid cols={1}>
            <MultiSelect value={value} onChange={onColorChange} data={mockdata} placeholder="Выберите цвет"
                         searchable clearable
                         nothingFound="Список пуст"/>
        </SimpleGrid>
    );
}
