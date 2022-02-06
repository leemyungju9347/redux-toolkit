import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


const initialState = {
    counterValue: 0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counterValue += 1
        },
        decrement: (state) => {
            state.counterValue -= 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

export const counterSelect = (state:RootState) => state;

export default counterSlice.reducer