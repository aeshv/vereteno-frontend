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
        padding: "15px 25px",
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

    const {product, vendorIndex} = useContext(ProductInfoContext)
    const {user} = useSelector((state) => state.auth)

    //id выбранного пользователем вендоркода (вариации товара)
    const currentVendorCodeId = product?.vendorCodes?.[vendorIndex.currentVendorIndex]?.productVendorCodeId

    const {classes} = CatalogButtonStyles();

    const [isLoading, setIsLoading] = useState(false)
    const [currentButtonStatus, setCurrentButtonStatus] = useState('В корзину');


    const handlePlaceToCart = () => {
        setIsLoading((prevState) => !prevState)

        cartApi.updateCartById({productVendorCodeId: currentVendorCodeId, quantity: 1}).then((response) => {
            switch (response && response.statusText) {
                case 'Created':
                    handleSuccessAddToCard();
                    break;
                default:
                    handleErrorAddToCard();
                    break;

            }
        })
    }

    const handleSuccessAddToCard = () => {
        setIsLoading(false)
        notifications.show({
            title: "Успешно добавлено в корзину", message: 'Продолжите покупки или проверьте корзину', color: 'green'
        })
        setCurrentButtonStatus('Добавить еще')
    }

    const handleErrorAddToCard = () => {
        setIsLoading(false)
        notifications.show({
            title: "Произошла ошибка", message: 'Попробуйте позже', color: 'red'
        })
        setCurrentButtonStatus('В корзину')
    }

    if (user) {

        return (

            <div className={classes.buyContainer}>
                <Button className={classes.button} loading={isLoading} leftIcon={<IconShoppingCart/>}
                        onClick={(e) => handlePlaceToCart(e)}>
                    {currentButtonStatus}
                </Button>
            </div>

        )
    } else {
        <></>
    }
}
export default ProductBuyButtons

