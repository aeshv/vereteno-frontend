import {
    UnstyledButton,
    Checkbox,
    Text,
    Image,
    SimpleGrid,
    createStyles,
    rem, MultiSelect, Loader, Stack,
} from "@mantine/core";
import {useUncontrolled} from "@mantine/hooks";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {useSelectStyles} from "@/components/features/filters/MaterialSelect/MaterialSelect";
import {useCategories} from "@/utils/hooks/useCategories";
import {useFiltersColors} from "@/utils/hooks/filtersApiHooks/useFiltersColors";
import {useFiltersAttributes} from "@/utils/hooks/filtersApiHooks/useFiltersAttributes";
import {AttributeItem} from "@/components/features/filters/AttributesSelect/AttributeItem";


export function AttributesSelect() {

    const router = useRouter()
    const {query} = router
    const [value, setValue] = useState([]);
    const {classes} = useSelectStyles();

    const getAttributes = useFiltersAttributes();

    const {isLoading, isError, data, error} = getAttributes
    const tempData = data?.data || []
    // const AttributesToSelectArray = data?.data?.map((item) => ({...item, label: item.name, value: item.id}))

    const onAttributesChange = (e) => {
        let selectValue = Array.isArray(e) ? e : [e]

        if (selectValue.length >= 1) {
            //Значение цвета
            setValue(selectValue)
            router.query.attributes = selectValue
            router.push(router)
        } else {
            setValue([])
            if (router.query.attributes) {
                delete router.query.attributes
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
        <Stack>
            {tempData.slice(0, 1)?.map((singleAttribute) => {

                return (
                    <>
                        <AttributeItem key={singleAttribute.id} {...singleAttribute}/>
                    </>
                )

            })}
        </Stack>
    );
}
