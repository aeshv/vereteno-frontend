import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {Badge, Flex, Group, ScrollArea, Skeleton, Table, Text} from "@mantine/core";
import {data} from "@/utils/mockdata";
import {OrderHatPreview} from "@/components/widget/Order/OrderHatPreview";
import {useCarts} from "@/utils/hooks/useCarts";
import {useOrders} from "@/utils/hooks/useOrders";

//
// {
//     "orderId": 51,
//     "status": "new",
//     "total": 2222,
//     "paymentStatus": "unpaid",
//     "paymentMethod": "online",
//     "orderItems": [
//     {
//         "id": 101,
//         "product": {
//             "id": 4,
//             "name": "non",
//             "description": "Deserunt et alias sit ad nostrum. Similique in optio quae nemo aliquam tempora. Eligendi quia ipsam officia ea aliquid iste. Quae et qui et incidunt ut.",
//             "images": []
//         },
//         "price": 2000,
//         "amount": 2,
//         "quantity": 33
//     }
// ]
// }


const Index = () => {

    const getUserOrders = useOrders();

    const {isLoading, isError, data, error, refetch} = getUserOrders

    const {orders} = data?.data || []

    const rows = orders?.map((item) => (
        <tr key={item?.orderId}>
            <td>
                <Group spacing="sm">
                    <Flex direction={"row"} gap={"xs"} align={"center"}>
                        <Text fz="sm" c="dimmed">
                            №
                        </Text>
                        <Text fz="sm" fw={500}>
                            {item?.orderId}
                        </Text>
                    </Flex>
                </Group>
            </td>
            <td>
                <Flex
                    style={{maxWidth: "250px"}}
                    direction={"row"}
                    gap={"xs"}
                    align={"center"}
                    wrap={"wrap"}
                >
                    {item?.orderItems.map((item, index) => (
                        <OrderHatPreview key={index} {...item} />
                    ))}
                </Flex>
            </td>
            <td>{item?.total} ₽</td>
            <td>
                <Badge fullWidth>{item?.status}</Badge>
            </td>
        </tr>
    ));

    const loadingRows = [0, 1, 2, 3].map((item) => (
        <tr key={item}>
            <td>
                <Skeleton w={'full'} h={50}/>
            </td>
            <td>
                <Skeleton w={'full'} h={50}/>
            </td>
            <td>
                <Skeleton w={'full'} h={50}/>
            </td>
            <td>
                <Skeleton w={'full'} h={35}/>
            </td>
        </tr>
    ));

    return (
        <>
            <ScrollArea>
                <Table miw={800} verticalSpacing="sm">
                    <thead>
                    <tr>
                        <th>Заказ</th>
                        <th>Товары</th>
                        <th>Стоимость</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    {isLoading ?

                        loadingRows

                        :
                        rows ? <tbody>{rows}</tbody> : <Text>У вас нет оформленных заказов</Text>

                    }
                </Table>
            </ScrollArea>
        </>
    );
};


Index.Layout = UserPageLayout;
export default Index;


