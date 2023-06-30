import React, {useContext, useState} from 'react'
import {Button, createStyles} from "@mantine/core";
import {IconShoppingCart} from "@tabler/icons-react";
import {notifications} from "@mantine/notifications";
import {ProductInfoContext} from "@/components/shared/Contexts/ProductContext";
import {cartApi} from "@/api/cart";
import {useSelector} from "react-redux";

const CatalogButtonStyles = createStyles(() => ({
	button: {
		background: "#6F73EE",
		border: "1.5px solid #6F73EE",
		borderRadius: "5px",
		padding: "15px 45px",
		width: '200px',
		height: '53px',
	},

	buyContainer: {
		marginTop: '1rem',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
}));

const ProductBuyButtons = () => {

	const productInfo = useContext(ProductInfoContext)
	const {user} = useSelector((state) => state.auth)

	const {classes} = CatalogButtonStyles();

	const [isLoading, setIsLoading] = useState(false)
	console.log(productInfo)
	const handlePlaceToCart = () => {
		setIsLoading((prevState) => !prevState)

		// cartApi.updateCartById({id: user.cart.id,  productId: productInfo.id, quantity: 1})

		// eslint-disable-next-line react-hooks/rules-of-hooks
		setTimeout(() => handleSuccessAddToCard(), 1000);
	}

	const handleSuccessAddToCard = () => {
		setIsLoading(false)
		notifications.show({
			title: "Успешно добавлено в корзину", message: 'Продолжите покупки или проверьте корзину', color: 'green'
		})
	}

	const handleErrorAddToCard = () => {
		setIsLoading(false)
		notifications.show({
			title: "Произошла ошибка", message: 'Попробуйте позже', color: 'red'
		})
	}

	return (<div className={classes.buyContainer}>
		<Button className={classes.button} loading={isLoading} leftIcon={<IconShoppingCart/>}
						onClick={(e) => handlePlaceToCart(e)}>
			В корзину
		</Button>
	</div>)
}
export default ProductBuyButtons
