import {Grid} from "@mantine/core";
import Card from "@/components/entity/card/Card";
import React from "react";

export const ProductsGrid = ({products}) => {
    return (
        <>
            <Grid gutter="sm">
                {products?.map((product) => (
                    <Grid.Col key={product.id} span={4}>
                        <Card {...product} href={`/products/${product.id}`}/>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    )
}
