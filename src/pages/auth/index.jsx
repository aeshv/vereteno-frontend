import {useToggle, upperFirst, useDisclosure} from "@mantine/hooks";
import {useForm} from "@mantine/form";
import {
    TextInput, PasswordInput, Text, Paper, Group, Button, Checkbox, Anchor, Stack, LoadingOverlay, createStyles,
} from "@mantine/core";
import {loginUser, registerUser} from "@/redux/features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {notifications} from '@mantine/notifications';
import {useRouter} from "next/router";
import {useEffect} from "react";


const registerStyles = createStyles(() => ({
    text: {
        fontFamily: '"Jost"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#282739"
    }
}));

const RegisterPage = () => {
    const [type, toggle] = useToggle(["Войти в свой аккаунт", "Зарегистрировать аккаунт",]);
    const {classes} = registerStyles();
    const router = useRouter()
    const form = useForm({
        initialValues: {
            email: "", login: "", password: "", terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Некорректный адрес электронной почты"),
            password: (val) => val.length <= 6 ? "Пароль должен состоять хотя бы из 6 символов" : null,
            terms: (val) => (val === true ? null : "Для регистрации необходимо принять условия использования"),
        },
    });

    // Проверка авторизации
    const {user} = useSelector((state) => state.auth)
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [router, user])


    const dispatch = useDispatch();
    const [visibleLoading, handlers] = useDisclosure(false);

    const handleRegister = (data) => {
        handlers.open();
        try {
            dispatch(registerUser(data)).then((a) => {
                handlers.close();
                router.push('/')
            })
        } catch (error) {
            console.log(error);
            handlers.close();
        }
    };

    const handleLogin = (data) => {
        handlers.open();
        try {
            dispatch(loginUser(data)).then((a) => {
                handlers.close();
                if (a?.meta?.requestStatus === "rejected") {
                    notifications.show({
                        title: "Ошибка авторизации",
                        message: 'Неверные данные для входа',
                        color: 'red'
                    });
                } else {
                    router.push('/');
                }

            })
        } catch (error) {
            console.log(error);
            handlers.close();
        }

    };

    return (
        <>
            <div style={{maxWidth: '650px', margin: '1rem auto'}}>
                <Paper radius="md" p="xl" withBorder pos="relative">
                    <LoadingOverlay visible={visibleLoading} overlayBlur={2}/>
                    <Text size="lg" weight={500}>
                        {type}
                    </Text>

                    <form onSubmit={form.onSubmit((fullFormData) => {
                        {
                            type === "Зарегистрировать аккаунт" ? handleRegister(fullFormData) : handleLogin(fullFormData)
                        }
                    })}>
                        <Stack>
                            {type === "Зарегистрировать аккаунт" && (<TextInput
                                label="Логин"
                                placeholder="Имя"
                                value={form.values.login}
                                onChange={(event) => form.setFieldValue("login", event.currentTarget.value)}
                                radius="md"
                            />)}

                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@vereteno.ru"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                                error={form.errors.email}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Пароль"
                                placeholder="Ваш пароль"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
                                error={form.errors.password}
                                radius="md"
                            />

                            {type === "Зарегистрировать аккаунт" && (
                                <>
                                    <Checkbox
                                        label="Я согласен со всеми правилами"
                                        checked={form.values.terms}
                                        error={form.errors.terms}
                                        onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
                                    />
                                    <Text className={classes.text}>
                                        Номер телефона необходим исключительно для связи с покупателем в целях уточнения
                                        и
                                        подтверждения заказа. Адрес электронной почты необходим исключительно для
                                        уведомлений о
                                        стадиях выполнения заказа от оформления до получения покупателем.<br/><br/>

                                        Интернет-магазин «Веретено», являющийся оператором персональных данных, согласно
                                        федеральному закону РФ № 152-ФЗ использует персональные данные исключительно для
                                        взаимодействия с покупателем и не передает персональные данные третьим лицам.
                                    </Text>
                                </>
                            )}


                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="md"
                                fw={500}
                            >
                                {type === "Зарегистрировать аккаунт" ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
                            </Anchor>
                            <Button type="submit" radius="xl">
                                {upperFirst(type)}
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </div>
        </>
    );
};

export default RegisterPage;