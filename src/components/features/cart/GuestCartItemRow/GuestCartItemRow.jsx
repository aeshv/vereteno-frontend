import React, { useContext, useState } from "react";
import {
  ActionIcon,
  Badge,
  createStyles,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconTrash,
} from "@tabler/icons-react";
import { CookieCart } from "@/utils/CookieCart";
import { GuestCartContext } from "@/components/shared/Contexts/GuestCartContext";

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
  const { handleCookie } = useContext(GuestCartContext);
  const [isRowLoading, setIsRowLoading] = useState(false);
  const currentItemVendorCode = item?.vendorCode;

  const currentItemSize = item?.sizes?.find(
    (size) => size.id === item?.sizeIds,
  );

  const handleRemoveCurrentItem = () => {
    setIsRowLoading(true);
    CookieCart?.removeFromCartById(item?.id).then(
      (message) => {
        console.log(message);
        handleCookie();
        setIsRowLoading(false);
      },
      (message) => {
        console.log(message);
        setIsRowLoading(false);
      },
    );
  };

  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: isSelected })}>
      <td>{item?.guestItemId + 1}</td>
      <td>
        <Stack spacing="xs">
          <Text size="sm" weight={500}>
            {item?.name}
          </Text>
          <Text size="sm" c={"dimmed"}>
            Артикул: {currentItemVendorCode?.code}
          </Text>
        </Stack>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {currentItemSize?.size}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {item.quantity || 1}
        </Text>
        {/*<QuantityInput*/}
        {/*  disabled={isSelected}*/}
        {/*  current={item.quantity || 1}*/}
        {/*  handleChange={() => {}}*/}
        {/*/>*/}
      </td>
      <td>
        {currentItemVendorCode?.discount ? (
          // Со скидкой
          <Stack spacing={"xs"}>
            <Stack spacing="xs">
              {item?.price * item?.quantity !==
                item?.price && (
                <Text>
                  1 шт. -{" "}
                  <b>
                    {item?.price *
                      item?.discount}
                  </b>{" "}
                  руб.
                </Text>
              )}
              <Text>
                Всего -{" "}
                <b>
                  {item?.price *
                    item?.discount *
                    item?.quantity}
                </b>{" "}
                руб.
              </Text>
            </Stack>
            <Badge
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.brand[8],
              }}
            >
              Скидка {100 - item?.discount * 100}%
            </Badge>
          </Stack>
        ) : (
          // Без скидки
          <Stack spacing="xs">
            {item?.price * item?.quantity !==
              item?.price && (
              <Text>
                1 шт. - <b>{item?.price}</b> руб.
              </Text>
            )}
            <Text>
              Всего - <b>{item?.price * item?.quantity}</b>{" "}
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
            loading={isRowLoading}
            onClick={handleRemoveCurrentItem}
          >
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );
};
export default GuestCartItemRow;
