import {getCookie, setCookie} from "cookies-next";


export function useCookieCart() {


	function getCurrentCart  () {

		return getCookie('guestCart')
	}

	function pushToCart(item) {
		const currentCartTemp = JSON.parse(getCurrentCart())
		setCookie('guestCart', [...currentCartTemp, item])
		return (currentCartTemp)
	}

	function clearAllCart() {
		setCookie('guestCart', [])
	}

	return [ getCurrentCart, pushToCart, clearAllCart,]


}