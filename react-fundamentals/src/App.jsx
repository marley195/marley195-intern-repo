import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("%cParentComponent Rendered", "color: green;");

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={() => setIsToggled((prev) => !prev)}>
        Toggle unrealted state: {String(isToggled)}
      </button>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

function Child({ onIncrement }) {
  console.log("%cChild Rendered", "color: blue;");

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <button onClick={onIncrement}>Increment Count from Child</button>
    </div>
  );
}

export default App;
