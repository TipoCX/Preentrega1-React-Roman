import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
