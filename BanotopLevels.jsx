import React, { useState } from "react";

const materialesPorNivel = {
  Esencial: {
    alicatados: ["Blanco brillo", "Blanco mate", "Azulejo metro blanco"],
    platos: ["Cerámico blanco", "Cerámico gris", "Cerámico antideslizante"],
    mamparas: ["Corredera acrílica", "Corredera de cristal", "Panel fijo simple"],
    muebles: ["Con patas blanco", "Melamina roble", "Melamina gris"],
    espejos: ["Rectangular sin marco", "Espejo básico", "Redondo clásico"]
  },
  Confort: {
    alicatados: ["Porcelánico mate gris", "Porcelánico blanco", "Relieve moderno"],
    platos: ["Resina textura pizarra", "Resina color grafito", "Resina blanca lisa"],
    mamparas: ["Abatible transparente", "Abatible serigrafiada", "Panel fijo moderno"],
    muebles: ["Suspendido blanco", "Suspendido madera clara", "Con patas diseño"],
    espejos: ["Redondo retroiluminado", "Rectangular con LED", "Marco blanco"]
  },
  Premium: {
    alicatados: ["Mármol cerámico blanco", "Mármol cerámico gris", "Porcelánico efecto piedra"],
    platos: ["Piedra natural gris", "Piedra natural blanca", "Resina alta gama"],
    mamparas: ["Fija con antical", "Corredera negra", "Abatible premium"],
    muebles: ["Doble seno suspendido", "Suspendido con cajones", "Madera maciza"],
    espejos: ["Espejo con luz", "Retroiluminado sin marco", "Marco metálico"]
  },
  Signature: {
    alicatados: ["Mármol natural", "Porcelánico gran formato", "Piedra tallada", "Mosaico artístico"],
    platos: ["Piedra natural a medida", "Resina exclusiva", "Cerámica esmaltada premium"],
    mamparas: ["Walk-in sin perfilería", "Cristal curvo", "Abatible diseño italiano"],
    muebles: ["Lavabo integrado", "Diseño exclusivo", "Madera de nogal"],
    espejos: ["Espejo inteligente", "Sensor táctil", "Marco dorado artístico"]
  }
};

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);
  const [selecciones, setSelecciones] = useState({});

  const handleSeleccion = (categoria, valor) => {
    setSelecciones((prev) => ({ ...prev, [categoria]: valor }));
  };

  const renderOpciones = (categoria, opciones) => (
    <>
      <h2 className="text-xl font-semibold mt-6 mb-2">{categoria}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {opciones.map((op) => (
          <button
            key={op}
            onClick={() => handleSeleccion(categoria, op)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selecciones[categoria] === op
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {op}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Selecciona el nivel de tu reforma</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {Object.keys(materialesPorNivel).map((n) => (
          <button
            key={n}
            onClick={() => {
              setNivel(n);
              setSelecciones({}); // reiniciar selecciones al cambiar de nivel
            }}
            className={`px-6 py-3 rounded-lg text-lg font-semibold transition ${
              nivel === n
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {nivel && (
        <>
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">
            Opciones para el nivel <span className="underline">{nivel}</span>
          </h2>

          {Object.entries(materialesPorNivel[nivel]).map(([categoria, opciones]) =>
            renderOpciones(categoria, opciones)
          )}

          <div className="mt-8 bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Resumen:</h3>
            <ul className="list-disc list-inside text-sm">
              {Object.entries(selecciones).map(([cat, val]) => (
                <li key={cat}>
                  <strong>{cat}:</strong> {val}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BanotopLevels;
