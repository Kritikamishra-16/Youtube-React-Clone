import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name: "search",
    initialState :{},

    //mapping between action {addItem} and reducer function
    //state->previous State
    //action payload-> here we get the items which we need to add in our cache object
    //the payload is the data that your reducer will use to update the state.   
    reducers:{
        cacheResults:(state,action)=>{
            //{"ip" :["iphone", "iphone 11"]}
            //console.log(action.payload);
            
            //this method allows us to copy all enumerable properties from one 
            //or more objects to target object and returns the target object
            state= Object.assign(state, action.payload);
        },
    }
});

export const {cacheResults} =searchSlice.actions;
export default searchSlice.reducer;
