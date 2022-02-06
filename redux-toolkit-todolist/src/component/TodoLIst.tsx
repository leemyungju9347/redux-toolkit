import React from 'react';
import { useSelector } from 'react-redux';
import { ITodoState, todoSelector } from '../slice';
import TodoItem from './TodoItem';

const TodoLIst = () => {
    const todoList = useSelector(todoSelector);
    
    return (
        <ul>
            {
                todoList.map((todo:ITodoState)=> (
                    <TodoItem
                        text={todo.text}
                        key={todo.id}
                        id={todo.id}
                        isCompleted={todo.isCompleted}
                    />)
                )
            }
        </ul> 
    );
};

export default TodoLIst;