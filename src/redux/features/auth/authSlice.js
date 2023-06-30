import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "@/api";
import {getCookie, setCookie} from "cookies-next";
import {notifications} from "@mantine/notifications";
import {userApi} from "@/api/auth";

const initialState = getCookie("token") ? {
	user: null, token: null, isLoading: false, status: null,
} : {
	user: null, token: getCookie("token"), isLoading: false, status: null,
};

// export const registerUser = createAsyncThunk("auth/register", async ({name, password, email}) => {
// 	try {
// 		const {data} = await axios.post("/auth/reg", {
// 			name, password, email,
// 		});
// 		if (data.authorization.token) {
// 			setCookie("token", data.authorization.token);
// 		}
// 		return data;
// 	} catch (error) {
// 		notifications.show({title: "Ошибка при регистрации", message: 'Нет связи с сервером', color: 'red'});
// 		console.log(error);
// 	}
// });

export const registerUser = createAsyncThunk('auth/register', async ({login, password, email}) => {
	await userApi.register({login, password, email})
});

export const loginUser = createAsyncThunk("auth/login", async ({email, password}) => {
	try {
		const {data} = await axios.post("/auth/login", {
			email, password,
		});

		if (data.authorization.token) {
			setCookie("token", data.authorization.token);
		}
		return data;
	} catch (error) {
		notifications.show({title: "Ошибка при авторизации", message: 'Нет связи с сервером', color: 'red'});
		// if (!error.response) {
		// 	throw error
		// }

	}
});

// export const getMe = createAsyncThunk("getMe", async ({ token }) => {
//   try {
//     const { data } = await axios.get("/user");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

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
			state.status = action.payload?.message;
			state.isLoading = false;
		},

		//   // // Проверка авторизации
		//   // [getMe.pending]: (state) => {
		//   //   state.isLoading = true;
		//   //   state.status = null;
		//   // },
		//   // [getMe.fulfilled]: (state, action) => {
		//   //   state.isLoading = false;
		//   //   state.status = null;
		//   //   state.user = action.payload?.user;
		//   //   state.token = action.payload?.authorization.token;
		//   // },
		//   // [getMe.rejectWithValue]: (state, action) => {
		//   //   state.status = action.payload.message;
		//   //   state.isLoading = false;
		//   // },
	},
});


export const {logout} = authSlice.actions;

export default authSlice.reducer;
