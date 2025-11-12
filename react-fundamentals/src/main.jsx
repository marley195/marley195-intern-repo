import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UseMemo from "./useMemo";
import UseEffect from "./useEffect";
import FormikForm from "./form";
import "./index.css";
import Tailwind from "./tailwind";
import Debugging from "./debugging";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UseMemo />
    <UseEffect />
    <FormikForm />
    <Tailwind />
    <Debugging />
  </StrictMode>
);
