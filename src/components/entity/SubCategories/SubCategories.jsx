import {useRouter} from "next/router";
import {useCategories} from "@/utils/hooks/useCategories";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";
import {Box, Center, createStyles, Divider, getStylesRef, Loader, SimpleGrid} from "@mantine/core";
import React from "react";
import {rotate} from "@/components/shared/AboutAdvertisementBlock/AboutAdvertisementBlock";
import PageHead from "@/components/SEO/PageHead";
export const FilterTextStyles = createStyles((theme) => ({
	title: {
		fontFamily: '"Jost"',
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: theme.fontSizes.xl,
		color: "#2c2a4f",
		ref: getStylesRef("title"),
		zIndex: 3,
		position: "relative",
	},

	text: {
		fontFamily: '"Jost"',
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: theme.fontSizes.md,
		color: "#282739",
		zIndex: 3,
		position: "relative",
	},

}));
export const SubCategories = () => {
	const router = useRouter();
	const {query} = router;
	const { classes, theme } = FilterTextStyles();
	const getAvailableCategories = useCategories();

	const {isLoading, data} = getAvailableCategories;
	const currentCategory = data?.data?.categories?.find(
		(cat) => cat?.id === Number(query?.["categories"]),
	);

	const categoryToShow =
		data?.data?.categories?.filter(
			(category) =>
				category?.parent?.id === Number(query?.["categories"]) &&
				category?.level !== 1,
		) || [];

	if (isLoading)
		return (
			<Center mt={"xl"}>
				<Loader/>
			</Center>
		);

	if (categoryToShow?.length)
		return (
			<Box>
				<PageHead title={`Купить ${currentCategory?.name} для себя на каждый день или для особого случая - Лаборатория головных уборов Веретено`} />
				<Box style={{marginBottom: "0.5rem"}}>
					<h2 className={classes.title}>{currentCategory?.name}</h2>
					<p className={classes.text}>{currentCategory?.description}</p>
				</Box>

				<SimpleGrid
					cols={3}
					spacing="sm"
					breakpoints={[
						{maxWidth: "md", cols: 2, spacing: "sm"},
						{maxWidth: "sm", cols: 3, spacing: "sm"},
					]}
				>
					{categoryToShow?.map((category) => (
						<BlurredBlock
							title={category.name}
							key={category.id}
							id={category.id}
							{...category}
						/>
					))}
				</SimpleGrid>
				<Divider my="sm" />
			</Box>
		);
};
