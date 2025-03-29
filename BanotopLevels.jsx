import React, { useState } from "react";

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);

  const niveles = [
    { nombre: "Esencial", imagen: "/esencial.jpg" },
    { nombre: "Confort", imagen: "/confort.jpg" },
    { nombre: "Premium", imagen: "/premium.jpg" },
    { nombre: "Signature", imagen: "/signature.jpg" }
  ];

  const handleSelectNivel = (nombre) => {
    setNivel(nombre);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Elige el nivel de calidad de tu reforma
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {niveles.map(({ nombre, imagen }) => (
          <div key={nombre} className="text-center">
            <button
              onClick={() => handleSelectNivel(nombre)}
              className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-all shadow-md w-40
                ${nivel === nombre ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {nombre}
            </button>
            <img
              src={imagen}
              alt={`Nivel ${nombre}`}
              style={{ width: "200px", height: "auto" }}
              className="mx-auto rounded-xl shadow"
            />
          </div>
        ))}
      </div>

      {nivel && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">
            Has elegido el nivel: {nivel}
          </h2>
          <p className="text-center text-gray-600">A continuación podrás personalizar los materiales según tu elección.</p>
          {/* Aquí insertaremos los materiales personalizados según el nivel */}
        </div>
      )}
    </div>
  );
};

export default BanotopLevels;
