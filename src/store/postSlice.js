// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     postData : [],
// }

// const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers:{
//         allPosts: (state, action) => { 
//             state.postData = action.payload;
//         },
//     },
// });

// export const {allPosts} = postSlice.actions;

// export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        allPosts: (state, action) => {
            state.postData = action.payload;
        },
    },
});

export const { allPosts } = postSlice.actions;

export default postSlice.reducer;
