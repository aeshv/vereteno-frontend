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
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));
const CartItemRow = ({ item, isSelected, toggleRow, isDisabled }) => {
  const { classes, cx, theme } = useStyles();
  const currentItemInfo = item;
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const cartContext = useContext(CartContext);
  const { refetchCartFunction } = cartContext;
  console.log(item);
  const handleDeleteItemFromCart = () => {
    let id = item.id;

    setIsDeleteLoading(true);
    cartApi
      .removeItemCartById({ id: id })
      .then(
        (result) => {
          refetchCartFunction();
        },
        (error) => {
          console.log("error");
        },
      )
      .then(
        (result) => {
          setIsDeleteLoading(false);
        },
        (error) => {
          setIsDeleteLoading(false);
        },
      );
  };

  const handleChangeItemAmount = (amount) => {
    let id = item.id;
    cartApi.updateItemById({ id: id, quantity: amount }).then(
      (result) => {
        refetchCartFunction();
      },
      (error) => {
        console.log("error");
      },
    );
  };

  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: isSelected })}>
      <td>
        <Checkbox
          checked={isSelected}
          onChange={() => toggleRow(item)}
          transitionDuration={0}
          disabled={isDisabled}
        />
      </td>
      <td>
        <Group spacing="sm">
          {/*<Avatar size={26} src={item?.avatar} radius={26}/>*/}
          <Text size="sm" weight={500}>
            <Link href={`/products/${currentItemInfo?.productVendorCodeId}`}>
              {currentItemInfo?.productName}
            </Link>
          </Text>
          {/*<Text size="sm" weight={400} color={"dimmed"}>*/}
          {/*    арт. {currentItemInfo?.productVendorCodeId}*/}
          {/*</Text>*/}
        </Group>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {currentItemInfo?.size?.number}
        </Text>
      </td>
      <td>
        <QuantityInput
          disabled={isSelected}
          current={item.quantity || 1}
          handleChange={handleChangeItemAmount}
        />
      </td>
      <td>
        {currentItemInfo?.discount?.discount_coefficient ? (
          // Со скидкой
          <Stack spacing={"xs"}>
            руб.
            <Badge
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.brand[8],
              }}
            >
              Скидка{" "}
              {100 - currentItemInfo?.discount?.discount_coefficient * 100}%
            </Badge>
          </Stack>
        ) : (
          // Без скидки
          <Stack spacing="xs">
            <Text>
              1 шт. - <b>{currentItemInfo?.originalPrice}</b> руб.
            </Text>
            <Text>
              Всего - <b>{currentItemInfo?.originalTotalPrice}</b> руб.
            </Text>
          </Stack>
        )}
      </td>
      <td>
        <Group spacing={0} position="center">
          <ActionIcon
            variant="light"
            color="red"
            loading={isDeleteLoading}
            onClick={() => handleDeleteItemFromCart(item.id)}
          >
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );
};
export default CartItemRow;
