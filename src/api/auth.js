import {api} from '.';
import {setCookie, deleteCookie} from "cookies-next";
import {getNextMonth} from "@/utils/getNextMonth";
// import {deleteCookie} from "cookies-next/src";

export const userApi = {
    async register({login, password, email}) {
        const {data} = await api({
            method: 'POST',
            url: '/auth/reg/',
            data: {
                login,
                password,
                email
            },
        });

        if (data.authorization.token) {
            setCookie("token", data.authorization.token, {expires: getNextMonth()});
            api.defaults.headers.common['Authorization'] = `Bearer ${data.authorization.token}`;
        }


        return data;
    },

    async login({email, password}) {
        const res = await api({
            method: 'POST',
            url: 'auth/login/',
            data: {
                email,
                password,
            },
        });


        if (res?.data.authorization.token) {
            setCookie("token", res?.data.authorization.token, {expires: getNextMonth()});
            api.defaults.headers.common['Authorization'] = `Bearer ${res?.data.authorization.token}`;
        }

        return res;
    },

    async loginByToken() {
        const res = await api({
            method: 'get',
            url: 'auth/by-token/',
        });


        return res;
    },

    async logout() {
        const res = api({
            method: 'POST',
            url: 'auth/logout/',
        });

        deleteCookie('token');
        api.defaults.headers.common['Authorization'] = ``;

        return res;
    },

    updateUserData({login, email, firstName, lastName, middleName, smevLogin, smevPassword}) {
        return api({
            method: 'PUT',
            url: 'api/auth-token/user/',
            data: {
                login,
                email,
                first_name: firstName,
                last_name: lastName,
                middle_name: middleName,
                smev_login: smevLogin,
                smev_password: smevPassword,
            },
        });
    },
    updateUserPassword({oldPassword, newPassword}) {
        return api({
            method: 'PUT',
            url: 'api/auth-token/user/update_password/',
            data: {
                old_password: oldPassword,
                new_password: newPassword,
            },
        });
    },
};
