import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterState {
  value: number;
  isValue: boolean
}

const initialState: CounterState = {
  value: 0,
  isValue:false
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterSelect = (state:RootState) => state;


export default counterSlice.reducer;
