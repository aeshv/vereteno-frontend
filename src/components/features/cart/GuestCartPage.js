"use client";

import React, { useCallback, useEffect, useState } from "react";
import NoDataBlock from "@/components/features/cart/NoDataCart/NoDataBlock";
import { IconGardenCartOff } from "@tabler/icons-react";
import { GuestCartTable } from "@/components/features/cart/GuestCartTable/GuestCartTable";
import { CookieCart } from "@/utils/CookieCart";
import { GuestCartContext } from "@/components/shared/Contexts/GuestCartContext";
import { Button, Center, Flex, Loader } from "@mantine/core";

export const GuestCartPage = () => {
  const [cookieData, setCookieData] = useState([]);

  const handleCookie = () => {
    const parsedCart = CookieCart.getParsedCart();
    setCookieData(parsedCart);
  };

  useEffect(() => {
    handleCookie();
  }, []);

  if (!!cookieData)
    return (
      <>
        {/*<Flex direction={"row"} gap={"xs"} justify={"center"}>*/}
        {/*  <Button onClick={() => CookieCart.clearAllCart()}>*/}
        {/*    Почистить куки*/}
        {/*  </Button>*/}
        {/*  <Button onClick={handleCookie}>Обновить Товары</Button>*/}
        {/*  <Button onClick={() => console.log(CookieCart.getParsedCart())}>*/}
        {/*    Показать куки*/}
        {/*  </Button>*/}
        {/*</Flex>*/}
        {cookieData?.length >= 1 ? (
          <GuestCartContext.Provider
            value={{ cookieData: cookieData, handleCookie }}
          >
            <GuestCartTable />
          </GuestCartContext.Provider>
        ) : (
          <>
            <NoDataBlock
              title={"Гостевая корзина пуста"}
              icon={<IconGardenCartOff size="85px" />}
            />
          </>
        )}
      </>
    );
};
