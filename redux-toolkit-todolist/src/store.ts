import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './slice'

const store = configureStore({
    reducer:TodoReducer
});

export type RootState = ReturnType<typeof store.getState>;


export default store;