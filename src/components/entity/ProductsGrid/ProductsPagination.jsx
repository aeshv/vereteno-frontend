import {Pagination} from "@mantine/core";
import React from "react";
import {useRouter} from "next/router";

export const ProductsPagination = () => {

    const router = useRouter()
    const {query} = router
    const [activePage, setPage] = React.useState(query.page ? query.page : 1)

    const onPageChanged = (e) => {
        if (e > 1) {
            //Значение поиска
            setPage(e)
            router.query.page = e
            router.push(router)
        } else {
            setPage(1)
            if (router.query.page) {
                delete router.query.page
                router.push(router)
            }
        }
    }

    return (
        <>
            <Pagination value={activePage} onChange={onPageChanged} total={10}/>
        </>
    )
}
