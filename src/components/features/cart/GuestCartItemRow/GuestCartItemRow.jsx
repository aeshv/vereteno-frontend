import React, { useContext, useState } from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Checkbox,
  createStyles,
  Group,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { cartApi } from "@/api/cart";
import { productApi } from "@/api";
import {
  IconDots,
  IconMessages,
  IconNote,
  IconPencil,
  IconReportAnalytics,
  IconTrash,
} from "@tabler/icons-react";
import { useQuery } from "react-query";
import { CartContext } from "@/components/shared/Contexts/CartContext";
import { QuantityInput } from "@/components/features/cart/CartItemRow/QuantityInput";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));
const GuestCartItemRow = ({ item, isSelected, toggleRow, isDisabled }) => {
  const { classes, cx, theme } = useStyles();

  const currentItemVendorCode = item?.vendorCodes.find(
    (vendor) => vendor.productVendorCodeId === item?.productVendorCodeIds,
  );

  const currentItemSize = currentItemVendorCode.sizes.find(
    (size) => size.id === item?.sizeIds,
  );

  console.log("ITEM", currentItemVendorCode, currentItemSize);

  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: isSelected })}>
      <td>{item?.guestItemId + 1}</td>
      <td>
        <Group spacing="sm">
          <Text size="sm" weight={500}>
            {item?.name}
          </Text>
        </Group>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {currentItemSize?.size}
        </Text>
      </td>
      <td>
        <QuantityInput
          disabled={isSelected}
          current={item.quantity || 1}
          handleChange={() => {}}
        />
      </td>
      <td>
        {item?.discount?.discount_coefficient ? (
          // Со скидкой
          <Stack spacing={"xs"}>
            d руб.
            <Badge
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.brand[8],
              }}
            >
              Скидка {100 - item?.discount?.discount_coefficient * 100}%
            </Badge>
          </Stack>
        ) : (
          // Без скидки
          <Stack spacing="xs">
            {currentItemVendorCode?.price * item?.quantity !==
              currentItemVendorCode?.price && (
              <Text>
                1 шт. - <b>{currentItemVendorCode?.price}</b> руб.
              </Text>
            )}
            <Text>
              Всего - <b>{currentItemVendorCode?.price * item?.quantity}</b>{" "}
              руб.
            </Text>
          </Stack>
        )}
      </td>
      <td>
        <Group spacing={0} position="center">
          <ActionIcon
            variant="light"
            color="red"
            loading={false}
            onClick={() => {}}
          >
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );
};
export default GuestCartItemRow;
