import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import  toolKitSlice from './toolkitReducer.js'

const rootReducer = combineReducers({
    toolkit: toolKitSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
export const useAppDispatch = () => useDispatch();


