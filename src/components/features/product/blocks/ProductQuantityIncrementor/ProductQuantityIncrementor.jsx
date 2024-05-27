import React, { useContext, useEffect, useState } from "react";
import { ProductInfoContext } from "@/components/shared/Contexts/ProductContext";
import { QuantityInput } from "@/components/features/cart/CartItemRow/QuantityInput";

export const ProductQuantityIncrementor = () => {
  const { product, quantityControl, sizeControl } =
    useContext(ProductInfoContext);
  const [value, setValue] = useState(quantityControl?.quantityToBuy || "");

  const currentSize = product?.sizes?.find(
    (item) => item.id === sizeControl?.selectedSize,
  );

  const handleChangeSize = (e) => {
    setValue(e);
    quantityControl.setQuantityToBuy(e);
  };

  useEffect(() => {
    setValue(quantityControl.quantityToBuy);
  }, [currentSize?.quantity, quantityControl.quantityToBuy, value]);

  return (
    <QuantityInput
      key={currentSize?.id}
      disabled={!!!currentSize?.quantity}
      max={currentSize?.quantity}
      current={quantityControl.quantityToBuy}
      handleChange={handleChangeSize}
    />
  );
};
