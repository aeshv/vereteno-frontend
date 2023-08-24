import {
  Center,
  Checkbox,
  Loader,
  Paper,
  ScrollArea,
  Table,
} from "@mantine/core";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { GuestCartContext } from "@/components/shared/Contexts/GuestCartContext";
import { useGuestCartProducts, useProducts } from "@/utils/hooks/useProducts";
import { useId } from "@mantine/hooks";
import CartItemRow from "@/components/features/cart/CartItemRow/CartItemRow";
import GuestCartItemRow from "@/components/features/cart/GuestCartItemRow/GuestCartItemRow";

export const GuestCartTable = () => {
  const { cookieData } = useContext(GuestCartContext);
  const getGuestProducts = useGuestCartProducts({
    productVendorCodeIds: cookieData.map((item) => item?.productVendorCodeIds),
  });
  const { isLoading, isError, data, error } = getGuestProducts;
  console.log("cookieData", cookieData);
  const gluedData = cookieData.map((item, index) => ({
    guestItemId: index,
    ...item,
    ...data?.data?.products[index],
  }));

  if (isError) {
    return <Center mt={"xl"}>Ошибка загрузки</Center>;
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
