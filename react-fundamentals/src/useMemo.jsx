import { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount");
    return count * 2;
  }, [count]);

  console.log("%cUseMemo Component Rendered", "color: purple;");

  return (
    <div
      style={{ border: "2px solid purple", padding: "10px", margin: "10px" }}
    >
      <h2>UseMemo Component</h2>
      <p>Count: {count}</p>
      <p>Double Count (memoized): {doubleCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <button onClick={() => setIsToggled((prev) => !prev)}>
        Toggle unrelated state: {String(isToggled)}
      </button>
    </div>
  );
}
export default UseMemo;
