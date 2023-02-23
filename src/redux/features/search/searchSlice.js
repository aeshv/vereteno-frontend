import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "@/shared/utils/axios";

const initialState = {
    result: [],
    loading: false,
}

export const getSearchResult = createAsyncThunk(
    'search',
    async (postId) => {
        try {
            const { data } = await axios.get(`/posts/comments/${postId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: {

        // Получение поиска
        [getSearchResult.pending]: (state) => {
            state.loading = true
        },
        [getSearchResult.fulfilled]: (state, action) => {
            state.loading = false
            state.result = action.payload
        },
        [getSearchResult.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default searchSlice.reducer
