import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import { Badge, Flex, Group, ScrollArea, Table, Text } from "@mantine/core";
import { data } from "@/utils/mockdata";
import { OrderHatPreview } from "@/components/widget/Order/OrderHatPreview";

const Index = () => {
  return (
    <>
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Заказ</th>
              <th>Дата</th>
              <th>Товары</th>
              <th>Стоимость</th>
              <th>Статус</th>
            </tr>
          </thead>
          {rows && <tbody>{rows}</tbody>}
        </Table>
      </ScrollArea>
    </>
  );
};

const rows = data.map((item) => (
  <tr key={item?.name}>
    <td>
      <Group spacing="sm">
        <Flex direction={"row"} gap={"xs"} align={"center"}>
          <Text fz="sm" c="dimmed">
            №
          </Text>
          <Text fz="sm" fw={500}>
            {item?.orderNumber}
          </Text>
        </Flex>
      </Group>
    </td>
    <td>{item?.orderDate}</td>
    <td>
      <Flex
        style={{ maxWidth: "250px" }}
        direction={"row"}
        gap={"xs"}
        align={"center"}
        wrap={"wrap"}
      >
        {item?.orderList.map((item, index) => (
          <OrderHatPreview key={index} {...item} />
        ))}
      </Flex>
    </td>
    <td>{item?.orderPrice} ₽</td>
    <td>
      <Badge fullWidth>{item?.status}</Badge>
    </td>
  </tr>
));

Index.Layout = UserPageLayout;
export default Index;
