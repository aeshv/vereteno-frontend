import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "@/api";
import {getCookie, setCookie} from "cookies-next";
import {notifications} from "@mantine/notifications";
import {userApi} from "@/api";
import {buildApiThunk} from "@/utils/buildApiThunk";

const initialState = getCookie("token") ? {
    user: null, token: null, isLoading: false, status: null,
} : {
    user: null, token: getCookie("token"), isLoading: false, status: null,
};

export const registerUser2 = createAsyncThunk('auth/register', async ({login, password, email}) => {

    try {
        const result = await userApi.register({login, password, email})
        console.log(result)
        notifications.show({title: "Попытка", message: 'зарегаться', color: 'green'});
        return result
    } catch (e) {
        notifications.show({title: "Ошибка при регистрации", message: e, color: 'red'});
    }
});


export const registerUser = createAsyncThunk(
    'auth/register',
    buildApiThunk(userApi.register)
);

export const loginUser = createAsyncThunk(
    'auth/login',
    buildApiThunk(userApi.login)
);

export const getMe = createAsyncThunk(
    'auth/user',
    buildApiThunk(userApi.loginByToken)
);

export const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.status = null;
        },
    }, extraReducers: {
        // Register user
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        }, [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload?.message;
            state.user = action.payload?.user;
            state.token = action.payload?.authorization?.token;
        }, [registerUser.rejectWithValue]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;
        },

        // Login user
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        }, [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload?.user;
            state.token = action.payload?.authorization?.token;
        }, [loginUser.rejectWithValue]: (state, action) => {
            state.status = action.payload?.data?.message;
            state.isLoading = false;
        },

        // Проверка авторизации
        [getMe.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = null;
            state.user = action.payload
            state.token = getCookie("token");
        },
        [getMe.rejectWithValue]: (state, action) => {
            state.status = action.payload?.message;
            state.isLoading = false;
        },
    },
});


export const {logout} = authSlice.actions;

export default authSlice.reducer;
