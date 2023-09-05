import { createSlice } from "@reduxjs/toolkit"

export const toolKitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        bookList: []
    },
    reducers: {
        setBookListRedux(state, action) {
            state.bookList = action.payload

        }
    }
})
export default toolKitSlice.reducer
export const { setBookListRedux } = toolKitSlice.actions
export const bookListRedux = (state) => state.toolkit.bookList; 