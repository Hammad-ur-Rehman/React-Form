import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count:0,
}
//state.counting.count



export const counterSlice = createSlice({
    name:'counting',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count = state.count+1 

        },
        decrement:(state)=>{
            state.count = state.count-1 
        },
        reset:(state)=>{
            state.count = 0
        },
        change:(state,action)=>{
            state.count = state.count + action.payload
        },
    }
})

 export const {increment, decrement,reset,change} = counterSlice.actions


export default counterSlice.reducer

