import {createStyles, rem, Select, TextInput} from '@mantine/core';
import {useRouter} from "next/router";
import React from "react";

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: rem(54),
        paddingTop: rem(18),
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
    },
}));

export function SizeRadio() {
    const {classes} = useStyles();


    const router = useRouter()
    const {query} = router
    const [value, setValue] = React.useState(query.size ? query.size : null);
    console.log(value, query)

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
            mt="md"
            withinPortal
            data={['XS', 'SM', 'MD', 'XL']}
            placeholder="Все размеры"
            label="Размер"
            classNames={classes}
            clearable
        />

    );
}