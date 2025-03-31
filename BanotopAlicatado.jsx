import React, { useState, useEffect } from "react";

const BanotopAlicatado = ({ nivel }) => {
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    setSeleccionado(null); // Reinicia selección al cambiar de nivel
  }, [nivel]);

  const opciones = {
    Esencial: [
      { nombre: "Blanco brillo", imagen: "/alicatado-esencial-1.jpg" },
      { nombre: "Beige texturizado", imagen: "/alicatado-esencial-2.jpg" },
      { nombre: "Rosa pastel", imagen: "/alicatado-esencial-3.jpg" },
    ],
    Confort: [
      { nombre: "Gris cemento", imagen: "/alicatado-confort-1.jpg" },
      { nombre: "Decorado hojas", imagen: "/alicatado-confort-2.jpg" },
      { nombre: "Rosa soft", imagen: "/alicatado-confort-3.jpg" },
    ],
    Premium: [
      { nombre: "Mármol claro", imagen: "/alicatado-premium-1.jpg" },
      { nombre: "Textura vertical", imagen: "/alicatado-premium-2.jpg" },
      { nombre: "Porcelánico beige", imagen: "/alicatado-premium-3.jpg" },
    ],
    Signature: [
      { nombre: "Diseño exclusivo 1", imagen: "/alicatado-signature-1.jpg" },
      { nombre: "Diseño exclusivo 2", imagen: "/alicatado-signature-2.jpg" },
      { nombre: "Diseño exclusivo 3", imagen: "/alicatado-signature-3.jpg" },
    ],
  };

  const materiales = opciones[nivel] || [];

  if (!nivel) return null; // No mostrar nada si no hay nivel seleccionado

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Elige el alicatado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {materiales.map((mat) => (
          <div
            key={mat.nombre}
            onClick={() => setSeleccionado(mat)}
            className={`cursor-pointer rounded-xl shadow-md p-2 border-4 transition ${
              seleccionado?.nombre === mat.nombre
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <img
              src={mat.imagen}
              alt={mat.nombre}
              className="w-full h-auto rounded-md"
            />
            <p className="text-center mt-2 font-medium">{mat.nombre}</p>
          </div>
        ))}
      </div>

      {seleccionado && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Resumen</h3>
          <p><strong>Alicatado seleccionado:</strong> {seleccionado.nombre}</p>
        </div>
      )}
    </div>
  );
};

export default BanotopAlicatado;
