import { api } from ".";

export const productApi = {
  getProducts(params) {
    return api({
      method: "GET",
      url: "/product/",
      params: {
        limit: 10,
        offset: 0,
        ...params,
      },
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
      },
    });
  },
  getProductsFromGuest({ productVendorCodeIds }) {
    return api({
      method: "GET",
      url: `/product/list/by-ids`,
      params: {
        productVendorCodeIds: [...productVendorCodeIds],
      },
    });
  },
  getProduct({ id }) {
    return api({
      method: "GET",
      url: `/product/${id}/`,
    });
  },
  postProductReviews(data) {
    return api({
      method: "POST",
      url: `/product/feedback/`,
      data,
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
