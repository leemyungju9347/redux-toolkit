import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice';
import {nanoid} from 'nanoid';


const AddTodo = () => {
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = useCallback((e)=> {
        e.preventDefault();

        dispatch(addTodo({
            text : todoValue,
            id : nanoid(),
        }));

        setTodoValue('')


    },[todoValue,dispatch]);

    const handleChange = useCallback((e)=> {
        setTodoValue(e.target.value);
    },[]);
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={todoValue}/>
            <button>👾</button>
        </form>
    );
};

export default AddTodo;