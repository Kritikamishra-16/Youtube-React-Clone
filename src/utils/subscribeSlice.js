import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice=createSlice({
    name:"subscribe",
    initialState:{
        items:[]
    },
    reducers:{
        //if presenr in array then remove and if not present then add
        toggleSubscribe: (state,action)=>{
            const idx=state.items.findIndex(obj => JSON.stringify(obj) === JSON.stringify(action.payload));
            if(idx>-1){
                state.items.splice(idx,1);
            }else{
                state.items.push(action.payload);
            }
        }
    }
});

export const {toggleSubscribe} =subscribeSlice.actions;
export default subscribeSlice.reducer;