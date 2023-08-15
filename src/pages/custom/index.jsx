import {Box, Center, Container, createStyles, Paper, Space, Text, Title} from "@mantine/core";
import Image from "next/image";
import size from "@/assets/images/how-get-head-size.svg";
import {CustomOrderForm} from "@/components/features/CustomOrderForm/CustomOrderForm";
import PageHead from "@/components/SEO/PageHead";
import React from "react";


const useStyles = createStyles((theme) => ({
	text: {
		fontFamily: "Jost",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: theme.fontSizes.md,
		lineHeight: "20px",
		color: theme.colors.gray[7],
	},

	hint: {
		fontFamily: "Jost",
		padding: theme.spacing.md,
		background: theme.colors.brand[5],
		color: theme.white,
		borderRadius: theme.radius.md,
		marginTop: '1rem',
		marginBottom: '1rem',
	}
}));


const CustomPage = () => {

	const {classes, theme} = useStyles();

	return (
		<Paper p={'xl'}>
			<PageHead title={'Пошив на заказ'} description={'Заказать пошив головного убора по вашим пожеланиям'}/>
			<Container>
				<Title size={'x-large'}>Уникальная возможность заказать головной убор, который идеально подойдет именно
					вам!</Title>

				<Text mt={'md'} c="dimmed">
					Не знаете, какой головной убор выбрать? Мы предлагаем уникальный сервис персонального заказа! Наши специалисты
					учтут все ваши пожелания и создадут идеальный головной убор, который подчеркнет вашу индивидуальность. Не
					ограничивайте себя стандартными вариантами — заказывайте то, что действительно важно для вас!
				</Text>

				{/*<Center>*/}
				{/*	<Image src={size} alt={'Иллюстрация'}/>*/}
				{/*</Center>*/}

				<Text variant="gradient"
							gradient={{from: theme.colors.brand[4], to: theme.colors.brand[8], deg: 45}}
							mt={'xl'}
							fz="xl"
							fw={700}>
					Заполните небольшую форму обратной связи. <br/> Распишите ваши пожелания как можно подробнее.
				</Text>

				<Space p={'md'}/>
				<CustomOrderForm/>


			</Container>
		</Paper>
	)
}

export default CustomPage