import {useQuery, UseQueryResult} from 'react-query';
import {useRouter} from "next/router";
import {productApi} from "@/api";


export function useProducts() {
    const router = useRouter()
    const {query} = router

    return useQuery(
        ['items', router.asPath],
        () =>
            productApi.getProductsQuery(query)
        ,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        },
    );
}