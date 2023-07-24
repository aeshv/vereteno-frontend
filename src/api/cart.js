import {api} from ".";

export const cartApi = {
    getCartById({...params}) {
        return api({
            method: "GET",
            url: `/cart-item/`,
            params,
        });
    },
    updateCartById({productId, vendorCodeId, ...data}) {
        return api({
            method: "POST",
            url: `/cart-item/`,
            data: {
                productId, vendorCodeId, ...data
            }
        });
    },
    removeItemCartById({id, ...data}) {
        return api({
            method: "DELETE",
            url: `/cart-item/${id}/`,
            data,
        });
    },
    updateItemById({id, ...rest}) {
        return api({
            method: "PATCH",
            url: `/cart-item/${id}/`,
            data: {
                ...rest
            },
        });
    },

};
