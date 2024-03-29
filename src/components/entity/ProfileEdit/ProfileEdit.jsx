import {
  Avatar,
  Button,
  Center,
  createStyles,
  Divider,
  Flex,
  Group,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import React from "react";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";
import { notifications } from "@mantine/notifications";
import { orderApi } from "@/api/order";
import { userApi } from "@/api";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[3]
        : theme.colors.gray[5],
  },

  name: {
    color: theme.colors.brand[5],
  },
}));

export const ProfileEdit = () => {
  const { classes } = useStyles();
  const { user } = useSelector((state) => state.auth);

  const form = useForm({
    initialValues: {
      name: user?.name || "",
      surname: user?.surname || "",
      patronymic: user?.patronymic || "",
      login: user?.login || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },

    validate: (values) => ({
      name:
        values.name.length < 2 && form.isDirty("name")
          ? "Имя слишком короткое"
          : null,
      surname:
        values.surname.length < 2 && form.isDirty("surname")
          ? "Фамилия слишком короткое"
          : null,
      login:
        values.login.length < 2 &&
        values.login.length !== 0 &&
        form.isDirty("login")
          ? "Логин слишком короткий"
          : null,
      email:
        /^\S+@\S+$/.test(values.email) || !form.isDirty("email")
          ? null
          : "Неверный вид электронной почты",
      phone:
        values.phone.length < 2 && form.isDirty("phone")
          ? "Номер телефона слишком коротки"
          : null,
    }),
  });

  const handleEditProfile = (data) => {
    const successEdit = () => {
      notifications.show({
        title: "Данные изменены",
        message: "Перезагрузите страницу, для актуализации данных",
        color: "green",
      });
    };
    const errorEdit = (message = "Попробуйте позже") => {
      notifications.show({
        title: "Произошла ошибка",
        message: message,
        color: "red",
      });
    };

    userApi.patchUserData({ data }).then(
      ({ response }) => successEdit(),
      ({ response }) => errorEdit(response?.data?.message),
    );
  };

  return (
    <>
      <Flex p={"xs"} direction={"column"} gap={"sm"}>
        <Title>Редактирование профиля</Title>
        <form
          onSubmit={form.onSubmit((fullFormData) => {
            handleEditProfile(fullFormData);
          })}
        >
          <TextInput
            mb="md"
            label="Фамилия"
            placeholder="Введите вашу фамилию"
            {...form.getInputProps("surname")}
          />
          <TextInput
            mb="md"
            label="Имя"
            placeholder="Введите ваше имя"
            {...form.getInputProps("name")}
          />
          <TextInput
            mb="md"
            label="Отчество"
            placeholder="Введите ваше отчество"
            {...form.getInputProps("patronymic")}
          />

          <TextInput
            mb="md"
            label="Логин"
            placeholder="Введите желаемый логин"
            {...form.getInputProps("login")}
          />
          <TextInput
            mb="md"
            label="Эл. Почта"
            description={
              user?.email_verified_at !== null &&
              "Вы не можете изменить подтвержденную электронную почту"
            }
            placeholder="Введите вашу электронную почту"
            {...form.getInputProps("email")}
            disabled={user?.email_verified_at !== null}
          />
          <TextInput
            mb="md"
            label="Телефон"
            placeholder="Введите ваш номер телефона"
            {...form.getInputProps("phone")}
          />

          <Divider my={"xl"} />

          <Center>
            <Button type={"submit"}>Изменить данные профиля</Button>
          </Center>
        </form>
      </Flex>
    </>
  );
};
