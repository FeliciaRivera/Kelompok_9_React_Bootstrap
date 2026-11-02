import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap 5 (interaksi navbar/dropdown dikendalikan state React)
import "bootstrap/dist/css/bootstrap.min.css";
// Tema warna warung (menimpa variabel Bootstrap agar konsisten dengan versi HTML)
import "./styles/custom.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
