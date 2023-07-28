import {OrderAdress} from "@/components/features/OrderForm/OrderAdress";
import {OrderShipment} from "@/components/features/OrderForm/OrderShipment";
import {OrderPayment} from "@/components/features/OrderForm/OrderPayment";
import {Button, Group, Stepper} from "@mantine/core";
import {useState} from "react";
import {IconCheckupList, IconCreditCard, IconHome2, IconTruckDelivery} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {OrderCheck} from "@/components/features/OrderForm/OrderCheck";
import {orderApi} from "@/api/order";
import {notifications} from "@mantine/notifications";

export const OrderForm = ({itemsToOrder}) => {

    const [active, setActive] = useState(0);
    const itemsIds = itemsToOrder.map((item) => item.id)
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current;
            }
            return current < 3 ? current + 1 : current;
        });

    const handlePurchase = (data) => {
        const handleSuccessAddToCard = () => {
            notifications.show({
                title: "Успешно куплено", message: 'Продолжите покупки', color: 'green'
            })
        }

        const handleErrorAddToCard = () => {
            notifications.show({
                title: "Произошла ошибка", message: 'Попробуйте позже', color: 'red'
            })
        }
        form.setValues((prevState) => ({...prevState, cartItemIds: itemsIds}))
        console.log()

        orderApi.createOrder({data}).then((response) => {
            switch (response && response.statusText) {
                case 'Created':
                    handleSuccessAddToCard();
                    break;
                default:
                    handleErrorAddToCard();
                    break;

            }
        }, (e) => console.log(e))

    }

    // {
    //     "status": [
    //     "The status field is required."
    // ],
    //     "paymentStatus": [
    //     "The payment status field is required."
    // ],
    //     "paymentMethod": [
    //     "The selected payment method is invalid."
    // ]
    // }
    const form = useForm({
        initialValues: {
            country: '',
            city: '',
            region: '',
            shipmentType: '',
            paymentMethod: '',
            street: '',
            postcode: '',
            cartItemIds: itemsIds
        },

        validate: (values) => {
            if (active === 0) {
                return {
                    city:
                        values.city.trim().length < 1
                            ? 'Вы не ввели город'
                            : null,
                    country:
                        values.country.length < 1 ? 'Вы не выбрали страну доставки' : null,
                    region:
                        values.region.length < 1 ? 'Вы не выбрали регион' : null,
                    street:
                        values.street.length < 1 ? 'Вы не ввели улицу' : null,
                    postcode:
                        values.postcode.length < 1 ? 'Вы не ввели почтовый индекс' : null,
                };
            }

            if (active === 1) {
                return {
                    shipmentType: values.shipmentType.length < 1 ? 'Вы не выбрали способ доставки' : null,

                };
            }

            if (active === 2) {
                return {
                    paymentMethod: values.paymentMethod?.length < 1 ? 'Вы не выбрали способ оплаты' : null,

                };
            }

            return {};
        },
    });

    return (
        <>
            <form onSubmit={form.onSubmit((fullFormData) => {
                handlePurchase(fullFormData)
            })}>

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
                        <OrderCheck form={form}/>
                    </Stepper.Step>
                </Stepper>


                <Group position="center" mt="xl">
                    <Button variant="default" onClick={prevStep} disabled={active === 0}>На предыдущий шаг</Button>
                    <Button type={active < 3 ? 'button' : 'submit'} onClick={active < 3 ? nextStep : () => {
                    }}>
                        {active < 3 ? 'Далее' : 'Перейти к оплате'}
                    </Button>
                </Group>
            </form>
        </>
    )
}
