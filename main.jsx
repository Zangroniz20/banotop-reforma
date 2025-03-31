import React from "react";
import ReactDOM from "react-dom/client";
import BanotopLevels from "./BanotopLevels";
import BanotopAlicatado from "./BanotopAlicatado"; // 👈 importante importar
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BanotopLevels />
    <BanotopAlicatado nivel="Esencial" /> {/* 👈 mostrar el componente directamente */}
  </React.StrictMode>
);
