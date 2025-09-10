import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UseMemo from "./useMemo";
import UseEffect from "./useEffect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UseMemo />
    <UseEffect />
  </StrictMode>
);
