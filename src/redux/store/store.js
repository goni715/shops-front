import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/api/apiSlice.js";
import authSliceReducer from "../features/auth/authSlice.js";
import productSliceReducer from "../features/product/productSlice.js";
import cartSliceReducer from "../features/cart/cartSlice.js";
import contactSliceReducer from "../features/contact/contactSlice.js";
import modalSliceReducer from "../features/modal/modalSlice.js";



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSliceReducer,
        product:productSliceReducer,
        cart:cartSliceReducer,
        contact:contactSliceReducer,
        modal:modalSliceReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)
})


export default store;