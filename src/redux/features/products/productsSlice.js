import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios, {productApi} from "@/api";
import {categoryApi} from "@/api/category";

const initialState = {
    categories: [], products: [], loading: false,
}

export const getCategories = createAsyncThunk('products/getCategories', async () => {
    try {
        const {data} = await categoryApi.getAll()
        console.log('categoryApi', data)
        return data
    } catch (error) {
        console.log(error)
    }
},)
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const {data} = await productApi.getProducts()
        return data
    } catch (error) {
        console.log(error)
    }
},)

export const productsSlice = createSlice({
    name: 'products', initialState, reducers: {}, extraReducers: {

        // Получение категорий
        [getCategories.pending]: (state) => {
            state.loading = true
        }, [getCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = action.payload?.categories
        }, [getCategories.rejected]: (state) => {
            state.loading = false
        },

        // Получение Продуктов
        [getProducts.pending]: (state) => {
            state.loading = true
        }, [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload.products
        }, [getProducts.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default productsSlice.reducer
