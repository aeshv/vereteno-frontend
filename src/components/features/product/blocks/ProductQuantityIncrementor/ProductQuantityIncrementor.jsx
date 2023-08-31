import { Button, createStyles, SegmentedControl } from "@mantine/core";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import { QuantityInput } from "@/components/features/cart/CartItemRow/QuantityInput";
import { IconShoppingCart } from "@tabler/icons-react";

export const ProductQuantityIncrementor = () => {
  const { product, vendorIndex, quantityControl, sizeControl } =
    useContext(ProductInfoContext);
  const [value, setValue] = useState(quantityControl?.quantityToBuy || "");

  const currentSize = product?.vendorCodes?.[
    vendorIndex.currentVendorIndex
  ]?.sizes.find((item) => item.id === sizeControl?.selectedSize);

  const handleChangeSize = (e) => {
    setValue(e);
    quantityControl.setQuantityToBuy(e);
  };

  return (
    <>
      <QuantityInput
        disabled={!!!currentSize?.quantity}
        max={currentSize?.quantity}
        current={value}
        handleChange={handleChangeSize}
      />
    </>
  );
};
