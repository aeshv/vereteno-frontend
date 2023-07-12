import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";
import {cartApi} from "@/api/cart";


export function useCarts(params) {

    return useQuery(
        ['cart'],
        () =>
            cartApi.getCartById({...params})
        ,
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
        },
    );
}