import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
