import {Grid, Loader, Pagination} from "@mantine/core";
import Card from "@/components/entity/card/Card";
import React from "react";
import {useProducts} from "@/utils/hooks/useProducts";
import {ProductsPagination} from "@/components/entity/ProductsGrid/ProductsPagination";

export const ProductsGrid = () => {


    const getProducts = useProducts();

    const {isLoading, isError, data, error} = getProducts

    if (isLoading) {
        return <Loader color="gray" size="xl"/>;

    }

    if (isError) {
        return <span>Ошибка: {error.message}</span>;
    }

    return (
        <>
            <Grid gutter="sm">
              {console.log('datadatadatadata', data)}
                {data?.data?.products.map((product) => (
                    <Grid.Col key={product.id} span={4}>
                        <Card {...product} href={`/products/${product.id}`}/>
                    </Grid.Col>
                ))}
            </Grid>
            <ProductsPagination total={data?.data?.totalCount || 1}/>
        </>
    )
}
