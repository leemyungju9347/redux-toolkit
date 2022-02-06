import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelect, decrement, increment } from "../slice";

const Counter = () => {
  const dispatch = useDispatch();
  const {value, isValue} = useSelector(counterSelect);
  console.log(isValue);
  
  return (
    <div>
      <h1>Counter 🧮</h1>
      <div style={{ textAlign: "center", width: 50 }}>
        <b>{ value }</b>
      </div>
      <button type="button" onClick={()=> dispatch(decrement())}>-</button>
      <button type="button" onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
