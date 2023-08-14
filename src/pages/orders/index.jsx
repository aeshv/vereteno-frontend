import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import {Badge, Flex, Group, ScrollArea, Skeleton, Table, Text} from "@mantine/core";
import {OrderHatPreview} from "@/components/widget/Order/OrderHatPreview";
import {useOrders} from "@/utils/hooks/useOrders";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import {Enum} from "@/utils/enum";
import PageHead from "@/components/SEO/PageHead";
import {IconGardenCartOff, IconPaperBagOff} from "@tabler/icons-react";


const Index = () => {

    const getUserOrders = useOrders();

    const {isLoading, isError, data, error, refetch} = getUserOrders

    const {orders} = data?.data || []

    const OrderStatuses = Enum({new: 'Создан'})
    const PaymentStatuses = Enum({unpaid: 'Ожидает оплаты'})

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
                <Badge fullWidth>{OrderStatuses[item?.status]}</Badge>
            </td>
            <td>
                <Badge fullWidth>{PaymentStatuses[item?.paymentStatus]}</Badge>
            </td>
            <td>
                {item?.paymentMethod}
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
          <PageHead title={'Ваши заказы'}/>
            {rows?.length ?
                <ScrollArea>
                    <Table verticalSpacing="sm">
                        <thead>
                        <tr>
                            <th>Заказ</th>
                            <th>Товары</th>
                            <th>Стоимость</th>
                            <th>Статус заказа</th>
                            <th>Статус оплаты</th>
                            <th>Способ оплаты</th>
                        </tr>
                        </thead>
                        {isLoading ?

                            loadingRows

                            :
                            <tbody>{rows}</tbody>

                        }
                    </Table>
                </ScrollArea>

                :

                <>
                    <NoDataBlock title={'ВЫ НИЧЕГО НЕ ЗАКАЗЫВАЛИ'}
																 description={'Найдите что-нибудь для себя в нашем каталоге'}
																 icon={<IconPaperBagOff size="85px"/>}
                    />
                </>
            }
        </>
    );
};


Index.Layout = UserPageLayout;
export default Index;


