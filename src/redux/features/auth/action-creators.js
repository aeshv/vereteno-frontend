import { deleteCookie } from 'cookies-next';
import { loginUser, registerUser, logout } from './authSlice';


export const loginUserAction = (user) => async (dispatch) => {
  dispatch(loginUser(user));
};

export const logoutUserAction = (user) => async (dispatch) => {
  deleteCookie('token');
  dispatch(logout(user));
};

export const registerUserAction = (user) => async (dispatch) => {
  dispatch(registerUser(user));
};

//TODO:
// export const refreshUserAction = (user) => async (dispatch) => {
//     dispatch(registerUser(user));
//   };