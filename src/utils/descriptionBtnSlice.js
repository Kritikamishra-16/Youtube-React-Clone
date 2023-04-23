import { createSlice } from "@reduxjs/toolkit";

const descriptionBtnSlice= createSlice({
    name:"description",
    initialState:{
        isSubBtnOpen:false,
    },
    reducers:{
        toggleSubBtn:(state)=>{
            state.isSubBtnOpen=!state.isSubBtnOpen;
        }
    }
});

export const {toggleSubBtn}=descriptionBtnSlice.actions;
export default descriptionBtnSlice.reducer;