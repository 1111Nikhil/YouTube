import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'Menu',
    initialState:{
      ismenu:true  
    },
    reducers:{
        toggelmenu:(state) => {
            state.ismenu = !state.ismenu
        },
        closeMenu:(state) => {
            state.ismenu = false;
        }
    },
});

export const {toggelmenu,closeMenu} = menuSlice.actions;
export default menuSlice.reducer;