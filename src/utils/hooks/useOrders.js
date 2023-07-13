import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";
import {cartApi} from "@/api/cart";
import {orderApi} from "@/api/order";


export function useOrders(params) {

    return useQuery(
        ['order'],
        () =>
            orderApi.getAllOrders({...params})
        ,
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
        },
    );
}