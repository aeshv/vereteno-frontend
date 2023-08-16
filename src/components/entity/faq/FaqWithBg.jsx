import React from "react";
import {
    createStyles,
    Title,
    Container,
    Accordion,
    ThemeIcon,
    MantineProvider,
    getStylesRef,
    rem,
} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        minHeight: rem(820),
        backgroundImage: `radial-gradient(${theme.colors.brand[9]} 0%,  ${theme.colors.brand[6]} 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        position: "relative",
        color: theme.black,
        borderRadius: '16px',
        paddingBottom: '1rem',
    },

    title: {
        color: theme.white,
        fontSize: 52,
        fontFamily: `Jost, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    item: {
        backgroundColor: theme.white,
        borderBottom: 0,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
        overflow: "hidden",
    },

    label: {
        color: theme.white
    },

    control: {
        fontSize: theme.fontSizes.lg,
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        color: theme.black,

        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    content: {
        paddingLeft: theme.spacing.xl,
        lineHeight: 1.6,
        color: theme.black,
    },

    icon: {
        ref: getStylesRef("icon"),
        marginLeft: theme.spacing.md,
    },

    gradient: {
        backgroundImage: `radial-gradient(${
            theme.colors[theme.primaryColor][6]
        } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    itemOpened: {
        [`& .${getStylesRef("icon")}`]: {
            transform: "rotate(45deg)",
        },
    },

    button: {
        display: "block",
        marginTop: theme.spacing.md,

        [theme.fn.smallerThan("sm")]: {
            display: "block",
            width: "100%",
        },
    },
}));

export function FaqWithBg() {
    const {classes} = useStyles();
    return (
        <MantineProvider inherit theme={{colorScheme: "light"}}>
            <div className={classes.wrapper}>
                <Container size="sm">
                    <Title align="center" className={classes.title}>
                        Часто задаваемые вопросы
                    </Title>

                    <Accordion
                        chevronPosition="right"
                        defaultValue="reset-password"
                        chevronSize={50}
                        variant="separated"
                        disableChevronRotation
                        chevron={
                            <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                                <IconPlus size="1.05rem" stroke={1.5}/>
                            </ThemeIcon>
                        }
                    >
                        <Accordion.Item className={classes.item} value="reset-password">
                            <Accordion.Control>
                                Как оформить заказ на индивидуальный головной убор?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Для оформления заказа на индивидуальный головной убор необходимо
                                связаться с нашим менеджером на сайте, в социальных сетях или по
                                телефону, описать желаемый вид головного убора и выбрать ткань.
                                Мы также предоставляем возможность заключения договора оферты на
                                услуги по индивидуальному пошиву.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="another-account">
                            <Accordion.Control>
                                Как оплатить заказанный головной убор?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Оплатить заказ нашего интернет-магазина можно онлайн при помощи
                                банковской карты, через мобильные приложения, электронные
                                кошельки или наличным расчетом при получении заказа.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="newsletter">
                            <Accordion.Control>
                                Можно ли изменить заказанный головной убор после подтверждения
                                заказа?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Если заказ еще не был отправлен, то да, Вы можете изменить его.
                                Для этого необходимо связаться с нашим менеджером в любом
                                удобном для Вас способе. Если заказ уже был отправлен, то
                                изменения в заказе невозможны.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="credit-card">
                            <Accordion.Control>
                                Когда будет готов заказанный головной убор?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Срок изготовления головного убора составляет от 5 до 10 рабочих
                                дней с момента поступления оплаты и утверждения дизайна.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item className={classes.item} value="payment">
                            <Accordion.Control>
                                Как происходит доставка заказа?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Мы доставляем заказанный головной убор почтой России, курьерской
                                службой или самовывозом из нашего офиса. Стоимость доставки
                                рассчитывается индивидуально в зависимости от способа доставки и
                                адреса получателя.
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item className={classes.item} value="refund">
                            <Accordion.Control>
                                Как вернуть или обменять головной убор, если он не подошел?
                            </Accordion.Control>
                            <Accordion.Panel>
                                Если заказанный головной убор не соответствует заявленным
                                параметрам или Вам не подошел по размеру, пожалуйста, свяжитесь
                                с нашим менеджером. Мы гарантируем возможность обмена или
                                возврата товара в течение 14 дней с момента получения. При этом
                                возврат необходимо согласовать с менеджером и выполнить все
                                требования для возврата товара вплоть до его внешнего вида.
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </MantineProvider>
    );
}
