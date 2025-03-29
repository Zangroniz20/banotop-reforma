import React, { useState } from "react";

const BanotopLevels = () => {
  const [nivelSeleccionado, setNivelSeleccionado] = useState(null);
  const [selecciones, setSelecciones] = useState({});
  const [longitud, setLongitud] = useState(0);
  const [anchura, setAnchura] = useState(0);

  const superficie = longitud * anchura;
  const base = 500;
  const extraNivel = nivelSeleccionado ? ["Esencial", "Confort", "Premium", "Signature"].indexOf(nivelSeleccionado) * 100 : 0;
  const precio = superficie * (base + extraNivel);

  const niveles = ["Esencial", "Confort", "Premium", "Signature"];
  const imagenesNivel = {
    Esencial: "/esencial.jpg",
    Confort: "/confort.jpg",
    Premium: "/premium.jpg",
    Signature: "/signature.jpg"
  };

  const materialesPorNivel = {
    Esencial: {
      alicatado: ["Blanco brillo", "Beige básico", "Gris claro"],
      plato: ["Cerámico blanco", "Cerámico beige"],
    },
    Confort: {
      alicatado: ["Porcelánico mate", "Imitación madera", "Textura piedra"],
      plato: ["Resina antideslizante", "Resina pizarra"],
    },
    Premium: {
      alicatado: ["Mármol cerámico", "Textura cemento", "Imitación granito"],
      plato: ["Resina pizarra", "Piedra natural clara"],
    },
    Signature: {
      alicatado: ["Mármol auténtico", "Diseño exclusivo", "Custom a elegir"],
      plato: ["Piedra natural negra", "Compuesto mineral deluxe"],
    },
  };

  const handleSeleccion = (categoria, valor) => {
    setSelecciones((prev) => ({ ...prev, [categoria]: valor }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!nivelSeleccionado ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Selecciona el nivel de calidad</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {niveles.map((nivel) => (
              <div key={nivel} className="text-center">
                <button
                  onClick={() => setNivelSeleccionado(nivel)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mb-2"
                >
                  {nivel}
                </button>
                <img
                  src={imagenesNivel[nivel]}
                  alt={nivel}
                  style={{ width: "200px", height: "auto" }}
                  className="mx-auto rounded-xl shadow"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Nivel seleccionado: {nivelSeleccionado}</h1>

          <h2 className="text-lg font-semibold mt-6 mb-2">Alicatado</h2>
          <div className="flex flex-wrap gap-2">
            {materialesPorNivel[nivelSeleccionado].alicatado.map((opcion) => (
              <button
                key={opcion}
                onClick={() => handleSeleccion("alicatado", opcion)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selecciones.alicatado === opcion
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-2">Plato de ducha</h2>
          <div className="flex flex-wrap gap-2">
            {materialesPorNivel[nivelSeleccionado].plato.map((opcion) => (
              <button
                key={opcion}
                onClick={() => handleSeleccion("plato", opcion)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selecciones.plato === opcion
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-2">Medidas del baño</h2>
          <div className="flex gap-4 mb-6">
            <input
              type="number"
              placeholder="Longitud (m)"
              value={longitud}
              onChange={(e) => setLongitud(parseFloat(e.target.value))}
              className="border rounded p-2 w-40"
            />
            <input
              type="number"
              placeholder="Anchura (m)"
              value={anchura}
              onChange={(e) => setAnchura(parseFloat(e.target.value))}
              className="border rounded p-2 w-40"
            />
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Resumen:</h3>
            <ul className="space-y-1">
              <li><strong>Nivel:</strong> {nivelSeleccionado}</li>
              {selecciones.alicatado && <li><strong>Alicatado:</strong> {selecciones.alicatado}</li>}
              {selecciones.plato && <li><strong>Plato de ducha:</strong> {selecciones.plato}</li>}
              <li><strong>Superficie:</strong> {superficie.toFixed(2)} m²</li>
              <li><strong>Presupuesto estimado:</strong> {precio.toFixed(2)} €</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BanotopLevels;
