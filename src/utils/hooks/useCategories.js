import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";
import {cartApi} from "@/api/cart";
import {orderApi} from "@/api/order";
import {categoryApi} from "@/api/category";


export function useCategories(params) {

    return useQuery(
        ['category'],
        () =>
            categoryApi.getAll()
        ,
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
        },
    );
}