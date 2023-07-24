import {api} from ".";

export const productApi = {
    getProducts(params) {
        return api({
            method: "GET",
            url: "/product/",
            params: {
                limit: 10,
                offset: 0,
                ...params,
            }
        });
    },
    getProductsQuery(params) {
        return api({
            method: "GET",
            url: "/product/",
            params: {
                limit: 10,
                offset: 0,
                ...params,
            }
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


    //Sorting
    getSortingAttributes() {
        return api({
            method: "GET",
            url: `/product/list/attributes/`,
        });
    },
    getSortingColors() {
        return api({
            method: "GET",
            url: `/product/list/colors/`,
        });
    },
    getSortingMaterials() {
        return api({
            method: "GET",
            url: `/product/list/materials/`,
        });
    },
    getSortingSizes() {
        return api({
            method: "GET",
            url: `/product/list/sizes/`,
        });
    },

};
