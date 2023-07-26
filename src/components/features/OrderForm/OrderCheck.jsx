import {TextInput} from "@mantine/core";
import {IconAt, IconBuildingSkyscraper, IconCreditCard, IconMapPins, IconTruckDelivery} from "@tabler/icons-react";

export const OrderCheck = ({form}) => {
    return (
        <>
            <TextInput label="Страна"
                       icon={<IconMapPins/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('country')}
                       readOnly={true}/>
            <TextInput label="Регион"
                       icon={<IconMapPins/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('region')}
                       readOnly={true}/>
            <TextInput label="Город"
                       icon={<IconBuildingSkyscraper/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('city')} readOnly={true}/>
            <TextInput label="Улица"
                       icon={<IconBuildingSkyscraper/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('street')} readOnly={true}/>
            <TextInput label="Почтовый индекс"
                       icon={<IconBuildingSkyscraper/>}
                       variant="unstyled"
                       radius="xs"
                       size="lg"
                       {...form.getInputProps('postcode')} readOnly={true}/>
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
                       {...form.getInputProps('paymentMethod')}
                       readOnly={true}/>
        </>
    )
}

