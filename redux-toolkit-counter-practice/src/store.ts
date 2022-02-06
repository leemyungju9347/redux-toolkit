import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './slice'

const store = configureStore({
    reducer : CounterReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store