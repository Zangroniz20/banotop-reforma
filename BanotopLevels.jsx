import React, { useState } from "react";

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);
  const [materiales, setMateriales] = useState({});
  const [longitud, setLongitud] = useState(0);
  const [anchura, setAnchura] = useState(0);

  const niveles = ["Esencial", "Confort", "Premium", "Signature"];

  const opcionesMateriales = {
    Esencial: {
      alicatado: ["Blanco brillo", "Beige satinado", "Gris claro"],
      solado: ["Gres gris", "Madera cerámica", "Beige claro"],
      plato: ["Cerámico blanco", "Resina básica", "Acrílico"],
      mampara: ["Fija", "Corredera sencilla", "Abatible básica"],
      mueble: ["Melamina blanco", "Con patas", "Compacto"],
      espejo: ["Rectangular básico", "Sin marco", "Espejo liso"]
    },
    Confort: {
      alicatado: ["Porcelánico mate", "Textura cemento", "Color arena"],
      solado: ["Imitación madera", "Gres técnico", "Cemento pulido"],
      plato: ["Resina textura pizarra", "Cerámico antideslizante", "Color beige"],
      mampara: ["Corredera doble", "Fija con perfil negro", "Abatible media"],
      mueble: ["Suspendido con cajones", "Acabado madera", "Compacto con lavabo"],
      espejo: ["Retroiluminado", "Con marco fino", "Espejo antivaho"]
    },
    Premium: {
      alicatado: ["Mármol cerámico", "Gran formato", "Diseño geométrico"],
      solado: ["Madera natural", "Piedra cerámica", "Diseño exclusivo"],
      plato: ["Piedra natural", "Resina personalizada", "Plato extraplano"],
      mampara: ["Abatible con perfil dorado", "Corredera sin marco", "Fija con cristal serigrafiado"],
      mueble: ["Doble seno", "Suspendido premium", "Madera natural"],
      espejo: ["Espejo LED táctil", "Espejo redondo con luz", "Diseño orgánico"]
    },
    Signature: {
      alicatado: ["Porcelánico italiano", "Textura piedra", "Acabado metálico"],
      solado: ["Microcemento continuo", "Piedra volcánica", "Diseño exclusivo italiano"],
      plato: ["Plato de mármol", "Diseño autor", "Resina premium"],
      mampara: ["Cristal curvo", "Marco invisible", "Diseño exclusivo"],
      mueble: ["Diseño autor suspendido", "Integrado con lavabo", "Acabado lujo"],
      espejo: ["Espejo decorativo con luz", "Smart mirror", "Retroiluminado táctil"]
    }
  };

  const renderMateriales = () => {
    if (!nivel) return null;
    const materialesNivel = opcionesMateriales[nivel];
    return Object.entries(materialesNivel).map(([tipo, opciones]) => (
      <div key={tipo} className="mb-4">
        <h2 className="text-lg font-semibold capitalize">{tipo}</h2>
        <div className="flex flex-wrap gap-2">
          {opciones.map((opcion) => (
            <button
              key={opcion}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                materiales[tipo] === opcion
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setMateriales({ ...materiales, [tipo]: opcion })}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    ));
  };

  const renderMedidas = () => (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Medidas del baño</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        <input
          type="number"
          placeholder="Longitud (m)"
          value={longitud}
          onChange={(e) => setLongitud(parseFloat(e.target.value))}
          className="border p-2 rounded w-40"
        />
        <input
          type="number"
          placeholder="Anchura (m)"
          value={anchura}
          onChange={(e) => setAnchura(parseFloat(e.target.value))}
          className="border p-2 rounded w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Selecciona el nivel de calidad</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {niveles.map((n) => (
          <button
            key={n}
            onClick={() => setNivel(n)}
            className={`px-6 py-3 rounded-full font-medium text-sm transition ${
              nivel === n ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {nivel && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
            Personaliza tu baño nivel {nivel}
          </h2>
          {renderMateriales()}
          {renderMedidas()}
        </div>
      )}
    </div>
  );
};

export default BanotopLevels;
