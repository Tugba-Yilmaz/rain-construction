import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeadProvider } from "react-head"; // ✅ YENİ
import "./index.css";
import App from "./App.jsx";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </StrictMode>
);
