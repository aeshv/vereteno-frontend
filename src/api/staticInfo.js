import {api} from ".";

export const staticApi = {
    getBanners(params) {
        return api({
            method: "GET",
            url: "/product/stat-page/banner",
            params: {
                ...params,
            }
        });
    },
};
