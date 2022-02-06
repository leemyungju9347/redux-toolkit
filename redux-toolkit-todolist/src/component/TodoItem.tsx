import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, ITodoState } from '../slice';


const TodoItem:FC<ITodoState> = ({text,id,isCompleted}) => {
    const dispatch = useDispatch();
    const [editing,setEditing] = useState(false);
    const [editText,setEditText] = useState('')

    const deleteTodoHandler = useCallback(()=> {
        dispatch(deleteTodo(id));
        
    },[dispatch,id]);

    const editToggle = useCallback(()=> { // editing true / false 시점,,?

        if ( editing ) {

            // submit? 
            dispatch(editTodo({
                text : editText,
                id : id,
                isCompleted
            }));    

        } else {
            
            // input에 value 넣어주기
            setEditText(text);
        }

        setEditing(prevState => !prevState);

    },[editing,text,id,dispatch,editText,isCompleted]);

    const handleChange = useCallback((e)=> {
        setEditText(e.target.value);
        
    },[])


    return (
        <li>
            {
                !editing ? <>
                    <span>{text}</span> 
                    <button onClick={deleteTodoHandler}>❎</button>
                </>: (
                    <input type="text" value={editText} onChange={handleChange}/>
                )
            }
            {/* 수정버튼 */}
            <button onClick={editToggle}>
                {
                    !editing ? '✏️' : '☑️'
                }
            </button> 
        </li>
    );
};

export default TodoItem;