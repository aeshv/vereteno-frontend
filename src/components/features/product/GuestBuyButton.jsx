import React, { useContext, useEffect, useState } from "react";
import { Button, createStyles } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import { useSelector } from "react-redux";
import { CookieCart } from "@/utils/CookieCart";

const CatalogButtonStyles = createStyles(() => ({
  button: {
    background: "#61e591",
    // border: "1.5px solid #6F73EE",
    borderRadius: "5px",
    padding: "15px 25px",
    width: "200px",
    height: "53px",
    border: "1.5px solid #61e591",
    "&:hover": {
      background: "#79e561",
    },
  },

  buyContainer: {
    marginTop: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "1rem",
  },

  text: {
    fontFamily: '"Jost"',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#282739",
  },
}));

const GuestBuyButton = () => {
  const { user } = useSelector((state) => state.auth);
  const { classes } = CatalogButtonStyles();

  const { product, sizeControl, quantityControl } =
    useContext(ProductInfoContext);

  const { selectedSize } = sizeControl;

  const currentVendorCodeId = product?.id;

  const [cookieData, setCookieData] = useState([]);

  const handleCookie = () => {
    const parsedCart = CookieCart.getParsedCart();
    setCookieData(parsedCart);
  };

  useEffect(() => {
    handleCookie();
  }, []);

  const currentSize = product?.sizes?.find(
    (item) => item.id === sizeControl?.selectedSize,
  );

  const isCurrentVendorCodeInCart = !!cookieData?.find(
    (item) =>
      item?.productVendorCodeIds === currentVendorCodeId &&
      item?.sizeIds === currentSize?.id,
  );

  const handlePlaceToCart = () => {
    CookieCart.pushToCart({
      productVendorCodeIds: currentVendorCodeId,
      quantity: quantityControl?.quantityToBuy || 1,
      sizeIds: selectedSize,
    });
    notifications.show({
      title: "Успешно добавлено в корзину",
      message: "Продолжите покупки или проверьте корзину",
      color: "green",
    });
    handleCookie();
  };

  if (!user && !!!currentSize?.quantity) {
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

  if (!user) {
    return (
      <div className={classes.buyContainer}>
        <Button
          className={classes.button}
          leftIcon={<IconShoppingCart />}
          onClick={(e) => handlePlaceToCart(e)}
          disabled={isCurrentVendorCodeInCart}
        >
          {isCurrentVendorCodeInCart ? "Уже в корзине" : "В корзину"}
        </Button>
      </div>
    );
  }
};

export default GuestBuyButton;
