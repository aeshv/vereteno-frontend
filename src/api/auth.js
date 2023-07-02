import {api} from '.';
import {setCookie} from "cookies-next";
import {getNextMonth} from "@/utils/getNextMonth";

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
			setCookie("token", data.authorization.token, {expires: getNextMonth() });
			api.config.headers.Authorization = `Bearer ${data.authorization.token}`;
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
			setCookie("token", res?.data.authorization.token, {expires: getNextMonth() });
			// api.config.headers.Authorization = `Bearer ${res?.data.authorization.token}`;

			api.defaults.headers.common['Authorization'] = `Bearer ${res?.data.authorization.token}`;
		}
		console.log('LOGIN DATA IS', res)

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
			url: 'api/auth-token/logout/',
		});

		localStorage.removeItem('token');
		delete api.config.headers.Authorization

		return res;
	},
	getUserData() {
		return api({
			method: 'GET',
			url: 'api/auth-token/user/',
		});
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
