import {createStyles, rem, Select, TextInput} from '@mantine/core';
import {useRouter} from "next/router";
import React from "react";

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
    console.log(value, query)
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
    const onSelectedChange = (e) => {
        if (e !== null) {
            //Значение поиска
            setValue(e)
            router.query.size = e
            router.push(router)
        } else {
            setValue(null)
            if (router.query.size) {
                delete router.query.size
                router.push(router)
            }
        }
    }

    return (

        <Select
            value={value}
            onChange={onSelectedChange}
            withinPortal
            data={sizes}
            placeholder="Все размеры"
            classNames={classes}
            clearable
        />

    );
}