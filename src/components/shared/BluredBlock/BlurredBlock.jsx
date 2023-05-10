import React from 'react'
import Image from "next/image";
import noImage from '../../../../public/noimage.png'
import {BackgroundImage, Box, Center, createStyles, Group, rem, Text} from "@mantine/core";

const blurredBlockClasses = createStyles((theme, {checked, color}) => ({
	example: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		transition: "background-color 150ms ease, border-color 150ms ease",
		border: `${rem(1)} solid ${checked ? theme.fn.variant({
			variant: "outline",
			color: theme.primaryColor
		}).border : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,
		borderRadius: theme.radius.sm,
		padding: theme.spacing.sm,
		backgroundColor: checked ? theme.fn.variant({
			variant: "light",
			color: theme.primaryColor
		}).background : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
	},
}));


const BlurredBlock = () => {
	return (<>
		<Box maw={300} mx="auto">
			<BackgroundImage
				src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
				radius="xs"
			>
				<Center p="md">
					<Text color="#fff">
						BackgroundImage component can be used to add any content on image. It is useful for hero
						headers and other similar sections
					</Text>
				</Center>
			</BackgroundImage>
		</Box>
	</>)
}
export default BlurredBlock
