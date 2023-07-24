import {createStyles, Loader, MultiSelect, rem, Select, TextInput} from '@mantine/core';
import {useRouter} from "next/router";
import React from "react";
import {useFiltersColors} from "@/utils/hooks/filtersApiHooks/useFiltersColors";
import {useFiltersSizes} from "@/utils/hooks/filtersApiHooks/useFiltersSizes";

const useStyles = createStyles((theme) => ({
    root: {
        minWidth: '100%',
    },

}));

export function SizeRadio() {
    const {classes} = useStyles();


    const router = useRouter()
    const {query} = router
    const [value, setValue] = React.useState(query.size ? query.size : null);

    const sizes = [
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
        '60',
        '61',
        '62',
        '63',
        '64',
        '65',
    ]

    const getSizes = useFiltersSizes();

    const {isLoading, isError, data, error} = getSizes
    console.log(data)
    const sizesToSelectArray = data?.data?.map((item) => ({...item, label: item.number, value: item.id}))
    const onSelectedChange = (e) => {
        if (e !== null) {
            //Значение поиска
            setValue(e)
            router.query.sizes = e
            router.push(router)
        } else {
            setValue(null)
            if (router.query.sizes) {
                delete router.query.sizes
                router.push(router)
            }
        }
    }

    if (isLoading) {
        return (
            <Loader/>
        )
    }


    return (

        <MultiSelect
            value={value}
            onChange={onSelectedChange}
            withinPortal
            data={sizesToSelectArray}
            placeholder="Все размеры"
            classNames={classes}
            clearable
        />

    );
}