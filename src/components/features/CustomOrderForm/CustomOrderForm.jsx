import {useForm} from "@mantine/form";
import {Button, Center, Divider, Textarea, TextInput} from "@mantine/core";
import React from "react";
import {notifications} from "@mantine/notifications";
import {userApi} from "@/api";
import {useSelector} from "react-redux";
import {orderApi} from "@/api/order";

export const CustomOrderForm = () => {
	const {user} = useSelector((state) => state.auth)
	const getFullUserName = () => {

		const noName = '';
		const result = `${user?.surname || ''} ${user?.name || ''} ${user?.patronymic || ''} `

		return result.length > 3 ? result : noName
	}
	const form = useForm({
		initialValues: {
			name: getFullUserName(), phone: user?.phone || '', description: '',
		},

		validate: (values) => ({
			name: values.name.length < 2 ? 'Имя слишком короткое' : null,
			phone: values.phone.length < 2 ? 'Номер телефона слишком коротки' : null,
		}),
	});

	const handleCustomOrderForm = (data) => {
		const successEdit = () => {
			notifications.show({
				title: "Успешно отправлено", message: 'С вами свяжутся в течение рабочего дня', color: 'green'
			})
		}
		const errorEdit = (message = 'Попробуйте позже') => {
			notifications.show({
				title: "Произошла ошибка", message: message, color: 'red'
			})
		}

		orderApi.createCustomOrder({data}).then((response) => successEdit(), ({response}) => errorEdit(response?.data?.message))

	}

	return (<>
		<form onSubmit={form.onSubmit((fullFormData) => {
			handleCustomOrderForm(fullFormData)
		})}>
			<TextInput mb="md" label="ФИО"
								 placeholder="Введите ФИО" {...form.getInputProps('name')}
			/>
			<TextInput mb="md" label="Контактный номер"
								 placeholder="Введите ваш номер телефона" {...form.getInputProps('phone')}
			/>
			<Textarea mb="md" label="Пожелания"
								placeholder="Введите ваши пожелания" {...form.getInputProps('description')}
			/>
			<Center>
				<Button type={'submit'}>Отправить</Button>
			</Center>
		</form>
	</>)
}
