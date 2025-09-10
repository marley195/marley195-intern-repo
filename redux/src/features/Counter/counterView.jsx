import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

export const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const message =
    count === 0
      ? "Count is 0"
      : count > 0
      ? "Count is positive"
      : "Count is negative";

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <p>{message}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => dispatch(decrement())}>−</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
