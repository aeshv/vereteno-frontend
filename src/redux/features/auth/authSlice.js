import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { getCookie } from "cookies-next";

const initialState =
  // ? {
  {
    user: null,
    token: null,
    isLoading: false,
    status: null,
    another: null,
    another2: null,
  };
// : {
//     user: null,
//     token: getCookie("token"),
//     isLoading: false,
//     status: null,
//     another: null,
//     another2: null,
//   };

export const registerUser = createAsyncThunk(
  "register",
  async ({ name, password, email }) => {
    try {
      const { data } = await axios.post("/auth/reg", {
        name,
        password,
        email,
      });
      if (data.authorization.token) {
        console.log(data);
        setCookie("token", data.authorization.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "login",
  async ({ email, password }) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      if (data.authorization.token) {
        setCookie("token", data.authorization.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const result = {
  message: "User created successfully",
  user: {
    name: "kklkl@kklkl.ru",
    email: "kklkl@kklkl.ru",
    updated_at: "2023-03-05T17:47:37.000000Z",
    created_at: "2023-03-05T17:47:37.000000Z",
    id: 6,
  },
  authorization: {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdmVyZXRlbm8vYXBpL2F1dGgvcmVnIiwiaWF0IjoxNjc4MDM4NDU4LCJleHAiOjE2NzgwNDIwNTgsIm5iZiI6MTY3ODAzODQ1OCwianRpIjoic1EzaXBjMGJONnpRTHp5aiIsInN1YiI6IjYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.HIjXsDJQ56OXEurxtRCtWi8UqtThrPKdbcEbLr9IPwI",
    type: "bearer",
  },
};
// export const getMe = createAsyncThunk("getMe", async ({ token }) => {
//   try {
//     const { data } = await axios.get("/user");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: {
    // Register user
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = "LOADED";
      state.status = action.payload?.message;
      state.user = action.payload?.user;
      state.token = action.payload?.authorization?.token;
      state.another = action;
      state.another2 = action.payload;
    },
    [registerUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },

    // Login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.authorization?.token;
    },
    [loginUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },

    // // Проверка авторизации
    // [getMe.pending]: (state) => {
    //   state.isLoading = true;
    //   state.status = null;
    // },
    // [getMe.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.status = null;
    //   state.user = action.payload?.user;
    //   state.token = action.payload?.authorization.token;
    // },
    // [getMe.rejectWithValue]: (state, action) => {
    //   state.status = action.payload.message;
    //   state.isLoading = false;
    // },
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
