import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import productsSlice from "./features/products/productsSlice";
// import postSlice from "./features/post/postSlice";
// import productsSlice from "./features/products/productsSlice";
// import searchSlice from "./features/search/searchSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice, // post: postSlice,
		products: productsSlice, // search: searchSlice,
	},
});
