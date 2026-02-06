import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
    reducer:{ //big reducer
        cart:cartReducer,
    }
});
export default appStore;
