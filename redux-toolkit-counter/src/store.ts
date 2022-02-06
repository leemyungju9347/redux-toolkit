import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import CounterReducer from "./slice";

export const store = configureStore({
  reducer: CounterReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;