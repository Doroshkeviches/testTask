import { createSlice } from "@reduxjs/toolkit"

export const toolKitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        bookList: [],
        searchParams: {
            title: '',
            category: '',
            sortingBy: 'relevance',
            startIndex: 0
        },
        totalCount: 0
    },
    reducers: {
        setBookListRedux(state, action) {
            state.bookList = action.payload

        },
        setSearchParamsRedux(state, action) {
            state.searchParams = action.payload

        },
        setTotalCountRedux(state, action) {
            state.totalCount = action.payload

        }
    }
})
export default toolKitSlice.reducer
export const { setBookListRedux } = toolKitSlice.actions
export const bookListRedux = (state) => state.toolkit.bookList;

export const { setSearchParamsRedux } = toolKitSlice.actions
export const searchParamsRedux = (state) => state.toolkit.searchParams; 

export const { setTotalCountRedux } = toolKitSlice.actions
export const totalCountRedux = (state) => state.toolkit.totalCount; 