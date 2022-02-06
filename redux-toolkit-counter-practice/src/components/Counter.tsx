import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelect, decrement, increment } from '../slice';

const Counter = () => {
    const dispatch = useDispatch();
    const {counterValue} = useSelector(counterSelect);

    return (
        <div>
            <div>
                Value : {counterValue}
            </div>
            <button type='button' onClick={()=> dispatch(decrement())}>-</button>
            <button type='button' onClick={()=> dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;