import {api} from ".";

export const cartApi = {
    getCartById({id, ...params}) {
        return api({
            method: "GET",
            url: `/cart/${id}/`,
            params,
        });
    },
    updateCartById({id, ...data}) {
        return api({
            method: "PATCH",
            url: `/cart/${id}/`,
            data,
        });
    },
    removeItemCartById({id, ...data}) {
        return api({
            method: "PATCH",
            url: `/cart/${id}/remove`,
            data,
        });
    },
    clearCart({id}) {
        return api({
            method: "DELETE",
            url: `/cart/${id}/`,
        });
    },

};
