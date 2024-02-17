import {createStyles, SegmentedControl} from "@mantine/core";
import {useContext, useEffect, useMemo, useState} from "react";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {patchConsoleError} from "next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info";


const segmentSizeSelectorStyles = createStyles((theme) => ({
	root: {
		background: 'transparent'
	}, controlActive: {
		transition: 'transform 150ms ease, box-shadow 100ms ease',
		background: theme.colors.brand[1],
		transform: 'scale(1.1)',
		color: 'white'
	},
}));


export const SizeSelectorOrder = ({sizes}) => {
	const {sizeControl, product} = useContext(ProductInfoContext)
	const serializedSizes = sizes?.map((item) => ({value: item.id, label: item.size}));
	const [value, setValue] = useState(sizeControl?.selectedSize || '');
	const {classes} = segmentSizeSelectorStyles();

	//Установка первого размера при смене вендоркода
	useEffect(() => {
		setValue(sizeControl?.selectedSize)
	}, [product, sizeControl])

	const handleChangeSize = (e) => {
		setValue(e)
		sizeControl?.setSelectedSize(e)
	}

	if (!sizes && !!!sizes?.length && !serializedSizes) {
		return (<span>Нет доступных размеров</span>)
	}

	if (serializedSizes.length) return (<>
			<SegmentedControl
				classNames={{
					root: classes.root, control: classes.control, controlActive: classes.controlActive,
				}}
				value={value}
				onChange={handleChangeSize}
				data={serializedSizes}
				fullWidth={true}
			/>

		</>

	)
}
