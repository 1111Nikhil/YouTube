import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import videoReducer from './videoInfo'

const appStore = configureStore({
    reducer:{
        menu:menuReducer,
        video:videoReducer
    }
});

export  default appStore