import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";
import {cartApi} from "@/api/cart";
import {staticApi} from "@/api/staticInfo";


export function useBanners(params) {

    return useQuery(
        ['banners'],
        () =>
            staticApi.getBanners({...params})
        ,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        },
    );
}