import { useSelector, useDispatch } from "react-redux";
import { increment } from "./features/Counter/counterSlice";
function Counter() {
  const dispatch = useDispatch();
  const countFromStore = useSelector((state) => state.counter.value);
  return (
    <div>
      <p>You clicked {countFromStore} times</p>
      <button onClick={() => dispatch(increment())}>Click me</button>
    </div>
  );
}
export default Counter;
