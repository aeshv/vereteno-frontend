import React, { useContext, useEffect, useState } from "react";
import { Button, createStyles } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import { cartApi } from "@/api/cart";
import { useSelector } from "react-redux";
import { getCookie, setCookie } from "cookies-next";
import { getNextMonth } from "@/utils/getNextMonth";
import { useCookieCart } from "@/utils/CookieCart";
import { useId } from "@mantine/hooks";
import { useCarts } from "@/utils/hooks/useCarts";

const CatalogButtonStyles = createStyles((theme) => ({
  button: {
    background: `${theme.colors.brand[8]}`,
    border: `1.5px solid ${theme.colors.brand[9]}`,
    borderRadius: "5px",
    padding: "15px 25px",
    width: "200px",
    height: "53px",
  },

  buyContainer: {
    marginTop: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

const ProductBuyButtons = () => {
  const { product, vendorIndex, sizeControl, quantityControl } =
    useContext(ProductInfoContext);
  const { user } = useSelector((state) => state.auth);

  //id выбранного пользователем вендоркода (вариации товара)
  const currentVendorCodeId =
    product?.vendorCodes?.[vendorIndex.currentVendorIndex]?.productVendorCodeId;
  const { selectedSize } = sizeControl;
  const { classes } = CatalogButtonStyles();

  //Корзина пользователя
  const getCart = useCarts();
  const {
    isLoading: isCartLoading,
    isError,
    data: cartData,
    refetch,
  } = getCart;
  const isCurrentVendorCodeInCart = !!cartData?.data?.items?.find(
    (item) => item?.productVendorCodeId === currentVendorCodeId,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [currentButtonStatus, setCurrentButtonStatus] = useState("В корзину");

  useEffect(() => {
    if (isCurrentVendorCodeInCart) {
      setCurrentButtonStatus("В корзине");
    }
  }, [isCurrentVendorCodeInCart]);

  const handlePlaceToCart = () => {
    setIsLoading((prevState) => !prevState);
    cartApi
      .addToCart({
        productVendorCodeIds: [currentVendorCodeId],
        quantity: [quantityControl?.quantityToBuy || 1],
        // TODO: FIX SIZE
        sizeIds: [1],
      })
      .then(handleSuccessAddToCard, handleErrorAddToCard);
  };

  const handleSuccessAddToCard = () => {
    setIsLoading(false);
    notifications.show({
      title: "Успешно добавлено в корзину",
      message: "Продолжите покупки или проверьте корзину",
      color: "green",
    });
    setCurrentButtonStatus("В корзине");
  };

  const handleErrorAddToCard = () => {
    setIsLoading(false);
    notifications.show({
      title: "Произошла ошибка",
      message: "Попробуйте позже",
      color: "red",
    });
    setCurrentButtonStatus("В корзину");
  };

  const currentSize = product?.vendorCodes?.[
    vendorIndex.currentVendorIndex
  ]?.sizes.find((item) => item.id === selectedSize);

  if (user && !!!currentSize?.quantity) {
    return (
      <div className={classes.buyContainer}>
        <Button
          className={classes.button}
          leftIcon={<IconShoppingCart />}
          disabled={true}
        >
          Нет в наличии
        </Button>
      </div>
    );
  }

  if (user)
    return (
      <div className={classes.buyContainer}>
        <Button
          className={classes.button}
          loading={isLoading}
          leftIcon={<IconShoppingCart />}
          disabled={currentButtonStatus === "В корзине"}
          onClick={(e) => handlePlaceToCart(e)}
        >
          {currentButtonStatus}
        </Button>
      </div>
    );
};
export default ProductBuyButtons;
