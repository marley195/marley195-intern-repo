import Button from "./components/button";
import { useState } from "react";

function Tailwind() {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="border-2 border-purple-600 p-3 m-3 rounded-md">
      <h2 className="text-lg font-semibold text-purple-700 mb-2">
        Tailwind Component
      </h2>
      <p className="mb-1">Count: {count}</p>

      <div className="flex gap-2">
        <Button onClick={() => setCount((prev) => prev + 1)}>
          Increment Count
        </Button>
        <Button
          className="bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400"
          onClick={() => setIsToggled((prev) => !prev)}
        >
          Toggle unrelated state: {String(isToggled)}
        </Button>
      </div>
    </div>
  );
}
export default Tailwind;
