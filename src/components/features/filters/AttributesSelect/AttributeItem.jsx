import {Checkbox, Stack} from "@mantine/core";
import {useMemo, useState} from "react";


// {
//     "id": 1,
//     "name": "totam",
//     "values": [
//     {
//         "attributeValueId": 18,
//         "value": "dolor"
//     },
//     {
//         "attributeValueId": 24,
//         "value": "omnis"
//     },
//     {
//         "attributeValueId": 26,
//         "value": "vitae"
//     }
// ]
// }


export const AttributeItem = (props) => {
    const [checkboxGroupValue, setCheckboxGroupValue] = useState([]);

    const handleChange = (e) => {
        props?.onChange(e, props?.name)
        setCheckboxGroupValue(e)
    }

    const initialValues = useMemo(() => {
        return props?.values?.map((item) => {
            return (
                {label: item.value, value: '' + item.attributeValueId, key: item.attributeValueId}
            )
        })
    }, [props?.values])

    return (
        <>

            <Checkbox.Group
                value={checkboxGroupValue} onChange={(e) => handleChange(e)}

            >
                <Stack spacing={'xs'}>
                    {initialValues?.map((singleItem) => (
                            <Checkbox key={singleItem.key}
                                      value={singleItem.value}
                                      label={`${singleItem.label}`}

                            />
                        )
                    )}
                </Stack>


            </Checkbox.Group>
        </>
    )
}
