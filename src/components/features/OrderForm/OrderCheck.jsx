import {TextInput} from "@mantine/core";
import {IconAt, IconBuildingSkyscraper, IconCreditCard, IconMapPins, IconTruckDelivery} from "@tabler/icons-react";

export const OrderCheck = ({form, itemsToOrder}) => {
    return (
        <>
            <TextInput label="Регион"
                       icon={<IconMapPins/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('regionName')}
                       readOnly={true}/>
            <TextInput label="Город"
                       icon={<IconBuildingSkyscraper/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('cityName')} readOnly={true}/>
            <TextInput label="Доставка"
                       icon={<IconTruckDelivery/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('shipmentType')}
                       readOnly={true}/>
            <TextInput label="Оплата"
                       icon={<IconCreditCard/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('paymentType')}
                       readOnly={true}/>
        </>
    )
}

