import { Box, Center, Loader, SimpleGrid } from "@mantine/core";
import Card from "@/components/entity/card/Card";
import React from "react";
import { useProducts } from "@/utils/hooks/useProducts";
import { ProductsPagination } from "@/components/entity/ProductsGrid/ProductsPagination";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import { FilterTextStyles } from "@/components/entity/SubCategories/SubCategories";

export const ProductsGrid = () => {
  const { classes } = FilterTextStyles();
  const { isLoading, isError, data, error } = useProducts();

  if (isLoading) {
    return (
      <Center mt="xl">
        <Loader color="gray" size="xl" />
      </Center>
    );
  }

  if (isError) {
    return <span>Ошибка: {error.message}</span>;
  }

  const products = data?.data?.productVendorCodes || [];

  if (products.length === 0) {
    return (
      <NoDataBlock
        title="Ничего не найдено"
        description="Попробуйте уточнить фильтры или изменить поисковый запрос"
        hideButton
      />
    );
  }

  return (
    <Box>
      <Box mb="0.5rem">
        <h2 className={classes.title}>Найденные товары:</h2>
      </Box>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "68rem", cols: 2, spacing: "md" },
          { maxWidth: "34rem", cols: 1, spacing: "sm" },
        ]}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            {...product}
            href={`/products/${product.id}`}
          />
        ))}
      </SimpleGrid>
      <ProductsPagination total={data?.data?.totalCount || 1} />
    </Box>
  );
};
