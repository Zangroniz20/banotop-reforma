import React from "react";
import ReactDOM from "react-dom/client";
import HomeHero from "./HomeHero"; // 👈 importa el nuevo componente
import BanotopLevels from "./BanotopLevels";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <HomeHero />         {/* 👈 Aquí se muestra tu cabecera con fondo y logo */}
      <BanotopLevels />    {/* 👈 Esto se queda como lo tenías */}
    </div>
  </React.StrictMode>
);
