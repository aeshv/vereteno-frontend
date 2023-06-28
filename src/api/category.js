import {api} from ".";

export const categoryApi = {
    getAll(params) {
        return api({
            method: "GET",
            url: "/category/",
            params,
        });
    },
    // createProduct(data) {
    //   return api({
    //     method: "POST",
    //     url: `/product/`,
    //     data,
    //   });
    // },
    // getProduct({ id }) {
    //   return api({
    //     method: "GET",
    //     url: `/product/${id}/`,
    //   });
    // },
    // updateProduct({ id, ...data }) {
    //   return api({
    //     method: "PATCH",
    //     url: `/product/${id}/`,
    //     data,
    //   });
    // },
    // deleteProduct({ id }) {
    //   return api({
    //     method: "DELETE",
    //     url: `/product/${id}/`,
    //   });
    // },
    //
};
