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
import React, {useState} from "react";
import {useRouter} from "next/router";
import {useFiltersMaterials} from "@/utils/hooks/filtersApiHooks/useFiltersMaterials";

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
    const [value, setValue] = useState(query?.materials || []);
    const {classes} = useSelectStyles();

    const getMaterials = useFiltersMaterials();

    const {isLoading, isError, data, error} = getMaterials
    const materialsToSelectArray = data?.data?.map((item) => ({...item, label: item.name, value: item.id}))

    const onMaterialChange = (e) => {
        if (e.length >= 1) {
            setValue(e)
            router.query.materials = e
            router.push(router)
        } else {
            setValue([])
            if (router.query.materials) {
                delete router.query.materials
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

        <MultiSelect classNames={classes} value={value} onChange={onMaterialChange} data={materialsToSelectArray}
                     placeholder="Выберите материал"
                     clearable
                     nothingFound="Список пуст"/>


    );
}
