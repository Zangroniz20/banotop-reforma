import React from "react";

const HomeHero = () => {
  return (
    <div className="relative h-screen text-white">
      {/* Imagen de fondo en escala de grises */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale"
        style={{ backgroundImage: "url('/hero-banotop.jpg')" }}
      ></div>

      {/* Capa de oscurecimiento para legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Encabezado con logo */}
      <header className="absolute top-0 left-0 w-full flex items-start p-4 z-10">
        <img src="/logo-banotop.png" alt="Logo Banotop" className="h-10" />
      </header>

      {/* Texto centrado sobre la imagen */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-light">
          Tu baño nuevo, sin líos. Fácil, rápido y a medida.
        </h1>
      </div>
    </div>
  );
};

export default HomeHero;
