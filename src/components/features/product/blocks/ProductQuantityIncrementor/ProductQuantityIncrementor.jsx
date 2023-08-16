import {createStyles, SegmentedControl} from "@mantine/core";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {QuantityInput} from "@/components/features/cart/CartItemRow/QuantityInput";


export const ProductQuantityIncrementor = ({sizes}) => {
	const { quantityControl } = useContext(ProductInfoContext)
	const [value, setValue] = useState(quantityControl?.quantityToBuy || '');

	const handleChangeSize = (e) => {
		setValue(e)
		quantityControl.setQuantityToBuy(e)
	}

	return (
		<QuantityInput disabled={false} current={value} handleChange={handleChangeSize}/>
	)
}
