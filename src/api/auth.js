import {api} from '.';
import {setCookie} from "cookies-next";

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
			setCookie("token", data.authorization.token);
			api.defaults.headers.common['Authorization'] = `Token ${data.authorization.token}`;
		}

		return data;
	},


	async login({login, password}) {
		const res = await api({
			method: 'POST',
			url: 'api/auth-token/login/',
			data: {
				login,
				password,
			},
		});

		if (res.status === 200) {
			const token = res.data.token;

			localStorage.setItem('token', token);
			api.defaults.headers.common['Authorization'] = `Token ${token}`;
		}

		return res;
	},
	async logout() {
		const res = api({
			method: 'POST',
			url: 'api/auth-token/logout/',
		});

		localStorage.removeItem('token');
		delete api.defaults.headers.common['Authorization'];

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
