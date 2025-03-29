import React, { useState } from "react";

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);
  const [longitud, setLongitud] = useState(0);
  const [anchura, setAnchura] = useState(0);

  const [alicatado, setAlicatado] = useState(null);
  const [solado, setSolado] = useState(null);
  const [plato, setPlato] = useState(null);
  const [mampara, setMampara] = useState(null);
  const [mueble, setMueble] = useState(null);
  const [espejo, setEspejo] = useState(null);

  const superficie = longitud * anchura;
  const base = 500;
  const extraNivel = nivel ? ["Esencial", "Confort", "Premium", "Signature"].indexOf(nivel) * 100 : 0;
  const precio = superficie * (base + extraNivel);

  const imagenesNivel = {
    Esencial: "/esencial.jpg",
    Confort: "/confort.jpg",
    Premium: "/premium.jpg",
    Signature: "/signature.jpg",
  };

  const materiales = {
    Esencial: {
      alicatado: ["Blanco brillo", "Beige satinado", "Gris claro"],
      solado: ["Gris mate", "Beige cerámico", "Imitación madera"],
      plato: ["Cerámico blanco", "Resina básica", "Textura lisa"],
      mampara: ["Corredera básica", "Fija sencilla", "Panel transparente"],
      mueble: ["Suspendido blanco", "Con patas madera", "Compacto"],
      espejo: ["Simple redondo", "Rectangular básico", "Sin luz"],
    },
    Confort: {
      alicatado: ["Porcelánico mate", "Relieve sutil", "Acabado piedra"],
      solado: ["Imitación madera", "Gris cemento", "Porcelánico beige"],
      plato: ["Resina antideslizante", "Color grafito", "Blanco texturizado"],
      mampara: ["Corredera con perfilería", "Fija efecto minimal", "Abatible estándar"],
      mueble: ["Suspendido con cajones", "Color roble", "Moderno compacto"],
      espejo: ["Retroiluminado redondo", "Marco negro", "Espejo armario"],
    },
    Premium: {
      alicatado: ["Mármol cerámico", "Diseño geométrico", "Piedra natural"],
      solado: ["Mármol porcelánico", "Gris oscuro", "Textura hormigón"],
      plato: ["Resina de alta gama", "Textura pizarra", "Color personalizado"],
      mampara: ["Sin perfilería", "Cristal antical", "Corredera premium"],
      mueble: ["Suspendido doble cajón", "Lavabo integrado", "Color nogal"],
      espejo: ["Con bluetooth", "Antivaho integrado", "Retroiluminado diseño"],
    },
    Signature: {
      alicatado: ["Piedra natural premium", "Acabado cemento continuo", "Porcelánico gran formato"],
      solado: ["Microcemento", "Gran formato", "Piedra natural"],
      plato: ["Piedra natural", "Textura personalizada", "Color especial"],
      mampara: ["Diseño a medida", "Puerta oculta", "Cristal curvo"],
      mueble: ["Diseño exclusivo", "Material reciclado", "Acabado terciopelo"],
      espejo: ["Smart con sensor", "Retrovisor ambiente", "Con pantalla LED"],
    },
  };

  const renderBotones = (opciones, seleccionado, setSeleccionado) => (
    <div className="flex flex-wrap gap-2 mb-4">
      {opciones.map((op) => (
        <button
          key={op}
          onClick={() => setSeleccionado(op)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            seleccionado === op ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {op}
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!nivel ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Selecciona el nivel de calidad</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.keys(imagenesNivel).map((n) => (
              <div key={n} className="text-center">
                <button
                  onClick={() => setNivel(n)}
                  className={`px-4 py-2 mb-2 rounded-full text-sm font-medium ${
                    nivel === n ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">Has seleccionado el nivel: {nivel}</h2>
          <h3 className="text-xl font-semibold mt-8 mb-2">Alicatado</h3>
          {renderBotones(materiales[nivel].alicatado, alicatado, setAlicatado)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Solado</h3>
          {renderBotones(materiales[nivel].solado, solado, setSolado)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Plato de ducha</h3>
          {renderBotones(materiales[nivel].plato, plato, setPlato)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Mampara</h3>
          {renderBotones(materiales[nivel].mampara, mampara, setMampara)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Mueble de baño</h3>
          {renderBotones(materiales[nivel].mueble, mueble, setMueble)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Espejo</h3>
          {renderBotones(materiales[nivel].espejo, espejo, setEspejo)}

          <h3 className="text-xl font-semibold mt-8 mb-2">Medidas del baño</h3>
          <div className="flex flex-wrap gap-4 mb-6">
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

          <div className="bg-gray-100 p-6 rounded-xl mb-6 shadow">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Resumen:</h2>
            <ul className="space-y-1">
              <li><strong>Nivel:</strong> {nivel}</li>
              {alicatado && <li><strong>Alicatado:</strong> {alicatado}</li>}
              {solado && <li><strong>Solado:</strong> {solado}</li>}
              {plato && <li><strong>Plato de ducha:</strong> {plato}</li>}
              {mampara && <li><strong>Mampara:</strong> {mampara}</li>}
              {mueble && <li><strong>Mueble:</strong> {mueble}</li>}
              {espejo && <li><strong>Espejo:</strong> {espejo}</li>}
            </ul>
            <p className="mt-4 font-medium">
              🧮 Superficie: {superficie.toFixed(2)} m²<br />
              💰 Presupuesto estimado: {precio.toFixed(2)} €
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BanotopLevels;
