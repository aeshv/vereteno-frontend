import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";
import {cartApi} from "@/api/cart";
import {orderApi} from "@/api/order";
import {categoryApi} from "@/api/category";


export function useFiltersAttributes(params) {

    return useQuery(
        ['attributes'],
        () =>
            productApi.getSortingAttributes()
        ,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        },
    );
}