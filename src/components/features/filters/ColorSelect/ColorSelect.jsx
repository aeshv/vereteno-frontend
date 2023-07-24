import {
    UnstyledButton,
    Checkbox,
    Text,
    Image,
    SimpleGrid,
    createStyles,
    rem, MultiSelect, Loader, Group,
} from "@mantine/core";
import {useUncontrolled} from "@mantine/hooks";
import {useRouter} from "next/router";
import React, {forwardRef, useState} from "react";
import {useSelectStyles} from "@/components/features/filters/MaterialSelect/MaterialSelect";
import {useCategories} from "@/utils/hooks/useCategories";
import {useFiltersColors} from "@/utils/hooks/filtersApiHooks/useFiltersColors";
import ColorDot from "@/components/shared/ColorDot/ColorDot";


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
    console.log('colorsToSelectArray', colorsToSelectArray)
    const onColorChange = (e) => {
        let selectValue = Array.isArray(e) ? e : [e]
        if (selectValue.length >= 1) {
            //Значение цвета
            setValue(selectValue)
            router.query.colors = selectValue
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
                     nothingFound="Список пуст"
                     itemComponent={SelectItem}
        />
    );
}


// eslint-disable-next-line react/display-name
const SelectItem = forwardRef(
    ({hex, label, ...others}, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <ColorDot color={hex}/>
                <div>
                    <Text size="sm">{label}</Text>
                    {/*<Text size="xs" opacity={0.65}>*/}
                    {/*    {description}*/}
                    {/*</Text>*/}
                </div>
            </Group>
        </div>
    )
);

