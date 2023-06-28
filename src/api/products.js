import {api} from ".";

export const productApi = {
    getProducts(params) {
        return api({
            method: "GET",
            url: "/product/",
            params,
        });
    },
    createProduct(data) {
        return api({
            method: "POST",
            url: `/product/`,
            data,
        });
    },
    getProduct({id}) {
        return api({
            method: "GET",
            url: `/product/${id}/`,
        });
    },
    updateProduct({id, ...data}) {
        return api({
            method: "PATCH",
            url: `/product/${id}/`,
            data,
        });
    },
    deleteProduct({id}) {
        return api({
            method: "DELETE",
            url: `/product/${id}/`,
        });
    },

};
