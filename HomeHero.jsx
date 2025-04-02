import React from "react";
import "./style.css"; // Asegúrate de que está importado si no lo tienes ya

const HomeHero = () => {
  return (
    <div className="hero-container">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/hero-banotop.jpg')" }}
      ></div>
      <div className="hero-overlay"></div>
      <header className="hero-header">
        <img src="/logo-banotop.png" alt="Logo Banotop" className="hero-logo" />
      </header>
      <div className="hero-text">
        <h1>Tu baño nuevo, sin líos. Fácil, rápido y a medida.</h1>
      </div>
    </div>
  );
};

export default HomeHero;
