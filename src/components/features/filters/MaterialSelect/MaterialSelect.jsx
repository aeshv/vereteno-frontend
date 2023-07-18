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
import React, {useState} from "react";
import {useRouter} from "next/router";

const mockdata = [
    {label: "Шерсть", color: "#dddd", value: 'HGHGH-33'},
    {label: "Вискоза", color: "#00cacc", value: 'SSDSAD-55'},
];

export const useSelectStyles = createStyles((theme) => ({

    root: {
        minWidth: '100%',
    },

    input: {
        marginRight: '0',
        padding: `calc(${theme.spacing.sm} / 1.4)`
    }
}));

export function MaterialSelect() {

    const router = useRouter()
    const {query} = router
    const [value, setValue] = useState(query?.material || []);
    const {classes} = useSelectStyles();

    const onMaterialChange = (e) => {
        if (e.length >= 1) {
            setValue(e)
            router.query.material = e
            router.push(router)
        } else {
            setValue([])
            if (router.query.material) {
                delete router.query.material
                router.push(router)
            }
        }

    };

    return (

        <MultiSelect classNames={classes} value={value} onChange={onMaterialChange} data={mockdata}
                     placeholder="Выберите материал"
                     clearable
                     nothingFound="Список пуст"/>


    );
}
