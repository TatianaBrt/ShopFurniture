import { configureStore } from "@reduxjs/toolkit";
import furnitures from './furnitursSlice';
import cart from './cartSlice';


export const store=configureStore({
    reducer:{
        furnitures,
        cart
    }
})