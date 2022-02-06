import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ITodoState {
    text:string;
    id: string;
    isCompleted: boolean
}

const initialState:ITodoState[] = []

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => [ ...state,{ ...payload }],
        deleteTodo : (state, { payload }) => state.filter( todo => todo.id !== payload ),
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoSelector = (state:RootState) => state

export default todoSlice.reducer