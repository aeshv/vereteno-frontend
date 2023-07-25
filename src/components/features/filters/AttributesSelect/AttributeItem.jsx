import {Checkbox, Text} from "@mantine/core";
import {useMemo, useState} from "react";
import {useListState} from "@mantine/hooks";


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

    const initialValues = () => {

        let result = props?.values?.map((item) => {

            return (
                {label: item.value, checked: false, value: item.attributeValueId, key: item.attributeValueId}
            )
        })

        console.log('RESULT', result)

        return result
    }

    const [values, handlers] = useListState(initialValues);

    console.log(values)

    const items = values.map((value, index) => (
        <Checkbox
            mt="xs"
            ml={33}
            label={value.label}
            key={value.key}
            checked={value.checked}
            onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
        />
    ));

    return (
        <>
            <Text>☻{props?.name}</Text>

            {items}
            {/*<Checkbox.Group*/}
            {/*    label={props?.name}*/}
            {/*    value={checkboxGroupValue} onChange={setCheckboxGroupValue}*/}
            {/*>*/}

            {/*    {props?.values?.map((singleItem) => (*/}
            {/*            <Checkbox key={singleItem.attributeValueId}*/}
            {/*                      checked={checkboxGroupValue.includes('' + singleItem.attributeValueId)}*/}
            {/*                      value={singleItem.attributeValueId} label={singleItem.value}/>*/}
            {/*        )*/}
            {/*    )}*/}


            {/*</Checkbox.Group>*/}
        </>
    )
}
