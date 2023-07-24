import {
    UnstyledButton,
    Checkbox,
    Text,
    Image,
    SimpleGrid,
    createStyles,
    rem, MultiSelect, Loader,
} from "@mantine/core";
import {useUncontrolled} from "@mantine/hooks";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {useSelectStyles} from "@/components/features/filters/MaterialSelect/MaterialSelect";
import {useCategories} from "@/utils/hooks/useCategories";
import {useFiltersColors} from "@/utils/hooks/filtersApiHooks/useFiltersColors";


const mockdata = [
    {label: "Красный", color: "#dddd", value: 'cc-33'},
    {label: "Бирюзовый", color: "#00cacc", value: 'cc-55'},
];

export function ColorSelect() {

    const router = useRouter()
    const {query} = router
    const [value, setValue] = useState([]);
    const {classes} = useSelectStyles();

    const getColors = useFiltersColors();

    const {isLoading, isError, data, error, refetch} = getColors

    const colorsToSelectArray = data?.data?.map((item) => ({...item, label: item.name, value: item.id}))
    const onColorChange = (e) => {
        let selectValue = Array.isArray(e) ? e : [e]
        console.log('COLOLORLORLORLROLRORL', e, selectValue)
        if (selectValue.length >= 1) {
            //Значение цвета
            setValue(selectValue)
            router.query.colors = selectValue
            console.log('router.query.colors', router.query.colors)
            router.push(router)
        } else {
            setValue([])
            if (router.query.colors) {
                delete router.query.colors
                router.push(router)
            }
        }

    };

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <MultiSelect classNames={classes} value={value} onChange={onColorChange} data={colorsToSelectArray}
                     placeholder="Выберите цвет"
                     clearable
                     nothingFound="Список пуст"/>
    );
}
