import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import videoReducer from './videoInfo'
import searchReducer from './searchSlice'

const appStore = configureStore({
    reducer:{
        menu:menuReducer,
        video:videoReducer,
        search:searchReducer
    }
});

export  default appStore