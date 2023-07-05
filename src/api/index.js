import axios from "axios";
import {getCookie} from 'cookies-next';
import {QueryClient} from "react-query";

const token = getCookie("token")

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

const queryClient = new QueryClient();

export default api;
export {queryClient};
export {api};
export {productApi} from './products';
export {userApi} from './auth';
