import React, { useState } from "react";
import BanotopAlicatado from "./BanotopAlicatado";

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);
  const [medidas, setMedidas] = useState({ longitud: 0, anchura: 0 });

  const [seleccion, setSeleccion] = useState({
    alicatado: null,
    solado: null,
    plato: null,
    mampara: null,
    mueble: null,
    espejo: null,
  });

  const niveles = ["Esencial", "Confort", "Premium", "Signature"];

  const opcionesPorNivel = {
    Esencial: {
      alicatado: ["Blanco brillo", "Beige básico", "Azulejo estándar"],
      solado: ["Gres básico", "Cemento pulido", "Imitación madera clara"],
      plato: ["Cerámico blanco", "Cerámico antideslizante"],
      mampara: ["Cortina simple", "Panel fijo básico"],
      mueble: ["Con patas", "Compacto bajo lavabo"],
      espejo: ["Espejo liso", "Espejo pequeño rectangular"],
    },
    Confort: {
      alicatado: ["Porcelánico mate", "Relieve decorativo", "Imitación piedra"],
      solado: ["Gres porcelánico", "Textura cemento", "Imitación roble"],
      plato: ["Resina blanca", "Resina gris", "Cerámico antideslizante"],
      mampara: ["Corredera", "Fija moderna", "Abatible básica"],
      mueble: ["Suspendido", "Con cajones", "Acabado madera"],
      espejo: ["Con luz LED", "Marco fino negro", "Circular retroiluminado"],
    },
    Premium: {
      alicatado: ["Mármol cerámico", "Grandes formatos", "Diseño geométrico"],
      solado: ["Porcelánico rectificado", "Color oscuro", "Piedra natural"],
      plato: ["Resina textura pizarra", "Color grafito", "Cemento gris"],
      mampara: ["Fija (walk-in)", "Abatible premium", "Corredera sin marco"],
      mueble: ["Doble seno", "Suspendido con led", "Acabado roble oscuro"],
      espejo: ["LED táctil", "Redondo con marco oro", "Espejo XL moderno"],
    },
    Signature: {
      alicatado: ["Mármol natural", "Porcelánico diseño exclusivo", "Diseño autor"],
      solado: ["Piedra natural", "Porcelánico italiano", "Microcemento premium"],
      plato: ["Piedra natural", "Diseño personalizado", "Resina efecto mármol"],
      mampara: ["Cristal con serigrafía", "Fijo y abatible top", "Doble hoja corredera"],
      mueble: ["Diseño italiano", "Flotante con iluminación", "Roble macizo"],
      espejo: ["Retroiluminado de autor", "Forma orgánica", "Espejo con bluetooth"],
    },
  };

  const imagenesNivel = {
    Esencial: "/esencial.jpg",
    Confort: "/confort.jpg",
    Premium: "/premium.jpg",
    Signature: "/signature.jpg",
  };

  const superficie = medidas.longitud * medidas.anchura;
  const base = 500;
  const extraNivel = nivel ? niveles.indexOf(nivel) * 100 : 0;
  const precio = superficie * (base + extraNivel);

  const handleSeleccion = (tipo, valor) => {
    setSeleccion((prev) => ({ ...prev, [tipo]: valor }));
  };

  const renderOpciones = (tipo, opciones) => (
    <div className="mb-6">
      <h3 className="text-md font-medium mb-1 capitalize">{tipo}</h3>
      <div className="flex flex-wrap gap-2">
        {opciones.map((op) => (
          <button
            key={op}
            onClick={() => handleSeleccion(tipo, op)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              seleccion[tipo] === op
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Empieza ahora la reforma de tu baño
      </h1>

      {!nivel && (
        <>
          <p className="text-sm text-center text-blue-800 mb-6">
            📢 Elige tu nivel de calidad para comenzar
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {niveles.map((n) => (
              <div key={n} className="text-center">
                <button
                  onClick={() => setNivel(n)}
                  className={`px-4 py-2 mb-2 rounded-full text-sm font-medium ${
                    nivel === n
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {n}
                </button>
                <img
                  src={imagenesNivel[n]}
                  alt={`Baño nivel ${n}`}
                  style={{ width: "200px", height: "auto" }}
                  className="mx-auto rounded-xl shadow"
                />
              </div>
            ))}
            {nivel && (
  <BanotopAlicatado 
    nivel={nivel} 
    seleccion={seleccion} 
    setSeleccion={setSeleccion} 
  />
)}

          </div>
        </>
      )}

      {nivel && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-center text-blue-700">
            Has seleccionado el nivel <strong>{nivel}</strong>
          </h2>

          {Object.entries(opcionesPorNivel[nivel]).map(([tipo, opciones]) =>
            renderOpciones(tipo, opciones)
          )}

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Medidas del baño</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <input
                type="number"
                placeholder="Longitud (m)"
                value={medidas.longitud}
                onChange={(e) =>
                  setMedidas({ ...medidas, longitud: parseFloat(e.target.value) })
                }
                className="border rounded p-2 w-40"
              />
              <input
                type="number"
                placeholder="Anchura (m)"
                value={medidas.anchura}
                onChange={(e) =>
                  setMedidas({ ...medidas, anchura: parseFloat(e.target.value) })
                }
                className="border rounded p-2 w-40"
              />
            </div>
            <p className="font-medium">
              🧮 Superficie: {superficie.toFixed(2)} m²<br />
              💰 Presupuesto estimado: {precio.toFixed(2)} €
            </p>
          </div>

          {/* Resumen de selección */}
          <div className="bg-gray-100 mt-8 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4 text-blue-700">Resumen de tu selección:</h2>
            <ul className="space-y-1 text-sm">
              <li><strong>Nivel:</strong> {nivel}</li>
              <li><strong>Alicatado:</strong> {seleccion.alicatado || "No seleccionado"}</li>
              <li><strong>Solado:</strong> {seleccion.solado || "No seleccionado"}</li>
              <li><strong>Plato de ducha:</strong> {seleccion.plato || "No seleccionado"}</li>
              <li><strong>Mampara:</strong> {seleccion.mampara || "No seleccionado"}</li>
              <li><strong>Mueble:</strong> {seleccion.mueble || "No seleccionado"}</li>
              <li><strong>Espejo:</strong> {seleccion.espejo || "No seleccionado"}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BanotopLevels;
