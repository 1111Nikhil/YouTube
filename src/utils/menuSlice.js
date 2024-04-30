import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'Menu',
    initialState:{
      ismenu:false  
    },
    reducers:{
        toggelmenu:(state) => {
            state.ismenu = !state.ismenu
        }
    },
});

export const {toggelmenu} = menuSlice.actions;
export default menuSlice.reducer;