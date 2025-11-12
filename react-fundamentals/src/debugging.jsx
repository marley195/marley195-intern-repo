import { useState, useEffect, useRef } from "react";

function StaleClosureExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Stale Closure Example</h1> <p>{count}</p>
    </div>
  );
}

function StaleClosureSolution() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  function updateCount(newCount) {
    setCount(newCount);
    countRef.current = newCount;
  }
  useEffect(() => {
    let id = setInterval(() => {
      updateCount(countRef.current + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h1>Stale Closure Solution</h1> <p>{count}</p>
    </div>
  );
}

export default function Debugging() {
  return (
    <div>
      <h1>Debugging</h1>
      <StaleClosureExample />
      <StaleClosureSolution />
    </div>
  );
}
