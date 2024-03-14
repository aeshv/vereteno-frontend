import { Center, Loader, Paper, ScrollArea, Table } from "@mantine/core";
import React, { useContext } from "react";
import { GuestCartContext } from "@/components/shared/Contexts/GuestCartContext";
import { useGuestCartProducts } from "@/utils/hooks/useProducts";
import GuestCartItemRow from "@/components/features/cart/GuestCartItemRow/GuestCartItemRow";

export const GuestCartTable = () => {
  const { cookieData } = useContext(GuestCartContext);
  const getGuestProducts = useGuestCartProducts({
    productVendorCodeIds: cookieData.map((item) => item?.productVendorCodeIds),
  });
  const { isLoading, isError, data } = getGuestProducts;

  //Склеивание кук пользователя со всеми найденными товарами
  //С бека приходят только уникальные позиции, а не все по списку. Приходится
  //сортировать по уникальным позициям
  const gluedData =
    cookieData?.map((item, index) => ({
      guestItemId: index,
      ...data?.data?.productVendorCodes?.find(
        (serverItem) => serverItem?.id === item?.productVendorCodeIds,
      ),
      ...item,
    })) || [];

  if (isError) {
    return (
      <Center mt={"xl"}>
        Ошибка загрузки <br />
      </Center>
    );
  }

  if (isLoading) {
    return (
      <Center mt={"xl"}>
        <Loader />
      </Center>
    );
  }

  const rows = gluedData.map((item) => {
    return (
      <GuestCartItemRow
        item={item}
        isSelected={false}
        toggleRow={() => {}}
        key={item.id}
        isDisabled={false}
      />
    );
  });

  return (
    <Paper>
      <ScrollArea>
        <Table verticalSpacing="sm" highlightOnHover>
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Размер</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
};
