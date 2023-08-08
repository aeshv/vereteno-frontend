import {Grid, Loader, Pagination, SimpleGrid} from "@mantine/core";
import Card from "@/components/entity/card/Card";
import React from "react";
import {useProducts} from "@/utils/hooks/useProducts";
import {ProductsPagination} from "@/components/entity/ProductsGrid/ProductsPagination";
import NoDataCart from "@/components/features/cart/NoDataCart/NoDataCart";

export const ProductsGrid = () => {


    const getProducts = useProducts();

    const {isLoading, isError, data, error} = getProducts

    if (isLoading) {
        return <Loader color="gray" size="xl"/>;

    }

    if (isError) {
        return <span>Ошибка: {error.message}</span>;
    }

    if (data?.data?.products?.length <= 0) {
        return <NoDataCart title={'Ничего не найдено'}
                           description={'Попробуйте уточнить фильтры или изменить поисковый запрос'} hideButton/>;
    }


    if (data?.data?.products) {
        return (
            <>
                <SimpleGrid cols={3}
                            spacing="lg" breakpoints={[
                    {maxWidth: '68rem', cols: 2, spacing: 'md'},
                    {maxWidth: '34rem', cols: 1, spacing: 'sm'},
                ]}>

                    {data?.data?.products?.map((product) => (
                        <Card key={product.id} {...product} href={`/products/${product.id}`}/>
                    ))}
                </SimpleGrid>
                <ProductsPagination total={data?.data?.totalCount || 1}/>
            </>
        )
    }
}
