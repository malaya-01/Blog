// import { configureStore } from "@reduxjs/toolkit";
// import authSliceReducer from "../store/authSlice"

// const store = configureStore({
//     reducer: authSliceReducer
// });

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;