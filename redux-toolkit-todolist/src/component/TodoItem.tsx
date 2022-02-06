import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, ITodoState } from '../slice';


const TodoItem:FC<ITodoState> = ({text,id,isCompleted}) => {
    const dispatch = useDispatch();
    const removeHandler = useCallback(()=> {
        dispatch(deleteTodo(id));
        
    },[dispatch,id]);


    return (
        <li>
            <span>{text}</span>
            <button onClick={removeHandler}>❎</button>
        </li>
    );
};

export default TodoItem;