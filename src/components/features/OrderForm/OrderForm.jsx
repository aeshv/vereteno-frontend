import {OrderAdress} from "@/components/features/OrderForm/OrderAdress";
import {OrderShipment} from "@/components/features/OrderForm/OrderShipment";
import {OrderPayment} from "@/components/features/OrderForm/OrderPayment";
import {Button, Group, Stepper} from "@mantine/core";
import {useState} from "react";
import {IconCheckupList, IconCreditCard, IconHome2, IconTruckDelivery} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {OrderCheck} from "@/components/features/OrderForm/OrderCheck";

export const OrderForm = ({itemsToOrder}) => {

    const [active, setActive] = useState(0);


    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current;
            }
            return current < 3 ? current + 1 : current;
        });

    const form = useForm({
        initialValues: {
            cityName: '', regionName: '', shipmentType: '', paymentType: ''
        },

        validate: (values) => {
            if (active === 0) {
                return {
                    cityName:
                        values.cityName.trim().length < 1
                            ? 'Вы не ввели город'
                            : null,
                    regionName:
                        values.regionName.length < 1 ? 'Вы не выбрали регион' : null,
                };
            }

            if (active === 1) {
                return {
                    shipmentType: values.shipmentType.length < 1 ? 'Вы не выбрали способ доставки' : null,

                };
            }

            if (active === 1) {
                return {
                    paymentType: values.paymentType.length < 1 ? 'Вы не выбрали способ оплаты' : null,

                };
            }

            return {};
        },
    });

    return (
        <>
            <Stepper active={active} breakpoint="sm" onStepClick={setActive} iconPosition="right">
                <Stepper.Step icon={<IconHome2 size="1.1rem"/>} label="Шаг 1" description="Адрес">
                    <OrderAdress form={form}/>
                </Stepper.Step>

                <Stepper.Step icon={<IconTruckDelivery size="1.1rem"/>} label="Шаг 2" description="Доставка">
                    <OrderShipment form={form}/>
                </Stepper.Step>

                <Stepper.Step icon={<IconCreditCard size="1.1rem"/>} label="Шаг 3" description="Оплата">
                    <OrderPayment form={form}/>
                </Stepper.Step>

                <Stepper.Step icon={<IconCheckupList size="1.1rem"/>} label="Шаг 4" description="Проверка">
                    <OrderCheck form={form} itemsToOrder={itemsToOrder}/>
                </Stepper.Step>
            </Stepper>


            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep} disabled={active === 0}>На предыдущий шаг</Button>
                <Button onClick={nextStep}>
                    {active < 3 ? 'Далее' : 'Перейти к оплате'}
                </Button>
            </Group>
        </>
    )
}
