import { useRouter } from "next/router";
import { useCategories } from "@/utils/hooks/useCategories";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";
import {
  Box,
  Center,
  createStyles,
  Divider,
  Loader,
  SimpleGrid,
} from "@mantine/core";
import React from "react";
import PageHead from "@/components/SEO/PageHead";

export const FilterTextStyles = createStyles((theme) => ({
  title: {
    fontFamily: '"Jost"',
    fontWeight: 500,
    fontSize: theme.fontSizes.xl,
    color: "#2c2a4f",
    position: "relative",
    zIndex: 3,
  },
  text: {
    fontFamily: '"Jost"',
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    color: "#282739",
    position: "relative",
    zIndex: 3,
  },
}));

export const SubCategories = () => {
  const router = useRouter();
  const { query } = router;
  const { classes } = FilterTextStyles();
  const { isLoading, data } = useCategories();

  const categories = data?.data?.categories || [];
  const currentCategory = categories.find(
    (cat) => cat.id === Number(query.categories)
  );

  const categoryToShow = categories.filter(
    (category) =>
      category.parent?.id === Number(query.categories) && category.level !== 1
  );

  if (isLoading) {
    return (
      <Center mt="xl">
        <Loader />
      </Center>
    );
  }

  if (categoryToShow.length > 0) {
    return (
      <Box>
        <PageHead
          title={`Купить ${currentCategory?.name} для себя на каждый день или для особого случая - Лаборатория головных уборов Веретено`}
        />
        <Box mb="0.5rem">
          <h2 className={classes.title}>{currentCategory?.name}</h2>
          <p className={classes.text}>{currentCategory?.description}</p>
        </Box>
        <SimpleGrid
          cols={3}
          spacing="sm"
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "sm" },
            { maxWidth: "sm", cols: 1, spacing: "sm" },
          ]}
        >
          {categoryToShow.map((category) => (
            <BlurredBlock
              key={category.id}
              title={category.name}
              id={category.id}
              {...category}
            />
          ))}
        </SimpleGrid>
        <Divider my="sm" />
      </Box>
    );
  }

  return null; // Return null if no categories to show
};
