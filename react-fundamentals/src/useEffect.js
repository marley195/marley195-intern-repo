import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function UseEffect() {
  const [data, setData] = useState(null);
  const controllerRef = useRef(null); //store AbortController

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
      if (controllerRef.current) {
        controllerRef.current.abort("component unmounted"); //abort previous request
      }
    };
  }, []);
  const handleFetch = async () => {
    console.log("Fetching data...");
    if (controllerRef.current) {
      controllerRef.current.abort("New fetch initiated"); //abort previous request
    }
    const controller = new AbortController();
    controllerRef.current = controller; //store current controller

    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          signal: controller.signal,
        }
      );
      setData(res.data);
    } catch (err) {
      if (err.name === "CanceledError") {
        console.log("Request was canceled:", err.message);
      } else {
        console.error("Fetch error:", err.message);
      }
    } finally {
      controllerRef.current = null; //clear controller after request completes
    }
  };
  return (
    <div
      style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}
    >
      <h2>UseEffect Component</h2>
      <button onClick={handleFetch}>Fetch Data</button>
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
