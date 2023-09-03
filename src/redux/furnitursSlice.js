import { createSlice } from "@reduxjs/toolkit";

export const furnitursSlice=createSlice({
 name:"furnitures",
 initialState:{
selectedCategory:"All"
 },
 reducers:{
    filterCategory: (state,action)=>{
        state.selectedCategory=action.payload;
    }

 }
})

export const getSelectedCategory=state=>state.furnitures.selectedCategory;
export const {filterCategory}=furnitursSlice.actions;
export default furnitursSlice.reducer;