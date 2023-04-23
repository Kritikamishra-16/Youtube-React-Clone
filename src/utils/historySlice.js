import { createSlice } from "@reduxjs/toolkit";

const historySlice=createSlice({
    name:"history",
    initialState:{
        historyArray:[]
    },
    reducers:{
        addHistory:(state,action)=>{
            console.log(action.payload);
            state.historyArray.unshift(action.payload);
        }
    }
});

export const {addHistory}=historySlice.actions;
export default historySlice.reducer;