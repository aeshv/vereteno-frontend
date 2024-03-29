import {api} from ".";

export const orderApi = {

    //order - получить все заказы пользователя
    getAllOrders(params) {
        return api({
            method: "GET",
            url: `/order/`,
            params
        });
    },

    //order/{id} - инфу о конкретном заказе
    getOrdersById({id}) {
        return api({
            method: "POST",
            url: `/order/${id}/`,
        });
    },

    //post на /order/ оформить
    createOrder({data}) {
        return api({
            method: "POST",
            url: `/order/`,
            data
        });
    },

    createCustomOrder({data}) {
        return api({
            method: "POST",
            url: `/order/custom/`,
            data
        });
    },

    // removeItemCartById({id, ...data}) {
    //     return api({
    //         method: "PATCH",
    //         url: `/cart/${id}/remove`,
    //         data,
    //     });
    // },
    // clearCart({id}) {
    //     return api({
    //         method: "DELETE",
    //         url: `/cart/${id}/`,
    //     });
    // },

};
