import {Center, Pagination} from "@mantine/core";
import React, {useMemo} from "react";
import {useRouter} from "next/router";

export const ProductsPagination = ({total}) => {

    const router = useRouter()
    const {query} = router
    const [activePage, setPage] = React.useState(query.page ? query.page : 1)

    const ITEMSONPAGE = 10
    const totalPageAmount = useMemo(() => total / ITEMSONPAGE < 1 ? 1 : total / ITEMSONPAGE, [total])
    const onPageChanged = (e) => {
        if (e > 1) {
            //Значение поиска
            setPage(e)
            router.query.offset = (e - 1) * 10
            router.push(router)
        } else {
            setPage(1)
            if (router.query.offset) {
                delete router.query.offset
                router.push(router)
            }
        }
    }

    return (
        <>
            <Center>
                <Pagination mt={'xl'} value={activePage} onChange={onPageChanged} total={totalPageAmount}/>
            </Center>
        </>
    )
}
