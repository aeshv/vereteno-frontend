import { useRouter } from "next/router";
import { useCategories } from "@/utils/hooks/useCategories";
import BlurredBlock from "@/components/shared/BluredBlock/BlurredBlock";
import { Box, Center, Loader, SimpleGrid } from "@mantine/core";
import React from "react";

export const SubCategories = () => {
  const router = useRouter();
  const { query } = router;

  const getAvailableCategories = useCategories();

  const { isLoading, data } = getAvailableCategories;
  const currentCategory = data?.data?.categories?.find(
    (cat) => cat?.id === Number(query?.["categories[]"]),
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
        <Loader />
      </Center>
    );

  if (categoryToShow?.length)
    return (
      <Box>
        <h2 style={{ marginBottom: "0.5rem" }}>{currentCategory?.name}</h2>

        <SimpleGrid
          cols={3}
          spacing="sm"
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "sm" },
            { maxWidth: "sm", cols: 3, spacing: "sm" },
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
      </Box>
    );
};
