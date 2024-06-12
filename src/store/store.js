import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice.js"

const store = configureStore({
    reducer: authSliceReducer
});

export default store;