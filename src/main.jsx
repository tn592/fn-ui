import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Test from "./components/Test";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
  </StrictMode>,
);
