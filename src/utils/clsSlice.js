import { createSlice } from "@reduxjs/toolkit";


const clsSlice=createSlice({
    name: "cls",
    initialState: {
        cls: "",
    },
    reducers:{
        addCls:(state,action)=>{
            state.cls=action.payload;
        }
    },

});




export const {addCls,} =clsSlice.actions;
export default clsSlice.reducer;