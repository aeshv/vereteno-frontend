import axios from "axios";
import {getCookie} from 'cookies-next';

const token = getCookie("token")

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

// api.interceptors.request.use((config) => {
//     if (token) config.headers.Authorization = `Bearer1 ${token}`;
//     if (token) api.defaults.headers.common['Authorization'] = `Bearer2 ${token}`;
//     config.headers.Accept = "application/json";
//
//     return config;
// });


if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
api.defaults.headers.common['Content-Type'] = 'application/json';


export default api;
export {api};
export {productApi} from './products';
export {userApi} from './auth';
