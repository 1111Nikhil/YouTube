import { createSlice } from "@reduxjs/toolkit";

const videoInfo = createSlice({
    name:'video',
    initialState:{
        videoInfo:null,
    },
    reducers:{
        addInfo:(state,action) => {
           state.videoInfo = action.payload;
        }
    },
});

export const {addInfo} = videoInfo.actions;
export default videoInfo.reducer;