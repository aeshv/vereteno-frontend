import {api} from ".";

export const cartApi = {
    getCartById({...params}) {
        return api({
            method: "GET",
            url: `/cart-item/`,
            params,
        });
    },
    updateCartById({id, ...data}) {
        return api({
            method: "POST",
            url: `/cart-item/${id}/`,
            data,
        });
    },
    removeItemCartById({id, ...data}) {
        return api({
            method: "DELETE",
            url: `/cart-item/${id}/`,
            data,
        });
    },
    updateItemById({id, ...data}) {
        return api({
            method: "PATCH",
            url: `/cart-item/${id}/`,
            data,
        });
    },

};
