import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "normalize.css";
import App from "./App.jsx";

// Common styles
import "../src/styles/common.style.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
