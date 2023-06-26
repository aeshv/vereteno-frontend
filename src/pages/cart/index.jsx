import NoDataCart from '@/components/features/cart/NoDataCart/NoDataCart'
import {Paper} from '@mantine/core'
import React from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {CarTable} from "@/components/features/cart/CartTable/CartTable";

const index = () => {
    const data = {
        "data": [{
            "id": "1",
            "avatar": "https://goggles.su/image/cache/catalog/hats/fedora/dsc_0006-400x400.jpg",
            "name": "Шляпа прикол",
            "job": "100",
            "email": "1"
        }, {
            "id": "2",
            "avatar": "https://goggles.su/image/catalog/hats/fedora/fedora-indiana-jonsa-08.jpg",
            "name": "Шляпа большая",
            "job": "8100",
            "email": "1"
        }, {
            "id": "3",
            "avatar": "https://goggles.su/image/cache/catalog/hats/fedora/IMG_20181208_171153-8-400x400.jpg",
            "name": "Шляпа женская",
            "job": "1500",
            "email": "1"
        }, {
            "id": "4",
            "avatar": "https://goggles.su/image/cache/catalog/image/cache/catalog/hats/fedora/img_20201002_143437-400x400.webp",
            "name": "Шляпа шляпная",
            "job": "1200",
            "email": "2"
        }, {
            "id": "5",
            "avatar": "https://goggles.su/image/cache/catalog/products/Fedora-Trilbi/Nova-Fedora-shlyapa-s-nizkoj-tulej-seraya-400x400.jpg",
            "name": "Шляпа детская",
            "job": "5500",
            "email": "1"
        }]
    }

    return (<Paper>
        <CarTable data={data.data}/>
        <NoDataCart/>
    </Paper>)
}

index.Layout = UserPageLayout;

export default index