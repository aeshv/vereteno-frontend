import axios from "axios";
import {getCookie, setCookie} from 'cookies-next';
import {QueryClient} from "react-query";
import {getNextMonth} from "@/utils/getNextMonth";

const token = getCookie("token")

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_API,
    timeout: 30000
});

if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

// api.interceptors.response.use(response => response, error => {
//     const { response, config } = error
//
//     if (response.status !== 401) {
//         return Promise.reject(error)
//     }
//
//     // Use a 'clean' instance of axios without the interceptor to refresh the token. No more infinite refresh loop.
//     return axios.get('/user/', {
//         baseURL: process.env.NEXT_PUBLIC_HOST_API,
//         timeout: 30000
//     })
//       .then((data) => {
//           // If you are using localStorage, update the token and Authorization header here
//           console.log('expired token data', data)
//           // setCookie("token", data.authorization.token, {expires: getNextMonth()});
//           return api(config)
//       })
//       .catch(() => {
//           return Promise.reject(error)
//       })
// })



const queryClient = new QueryClient();

export default api;
export {queryClient};
export {api};
export {productApi} from './products';
export {userApi} from './auth';
