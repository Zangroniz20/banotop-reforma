import React, { useState } from 'react';

const opciones = {
  "Tipo de alicatado": ["Blanco brillo", "Porcelánico mate", "Mármol cerámico"],
  "Plato de ducha": ["Cerámico", "Resina textura pizarra", "Piedra natural"],
  "Mampara": ["Corredera", "Abatible", "Fija (walk-in)"],
  "Mueble de baño": ["Suspendido", "Con patas", "Con doble seno"],
  "Espejo": ["Redondo retroiluminado", "Rectangular sin marco", "Con marco negro"]
};

const niveles = ["Esencial", "Confort", "Premium", "Signature"];
const preciosPorNivel = {
  Esencial: 500,
  Confort: 600,
  Premium: 700,
  Signature: 800
};

export default function SelectorOpciones() {
  const [nivel, setNivel] = useState('');
  const [seleccionadas, setSeleccionadas] = useState({});
  const [longitud, setLongitud] = useState('');
  const [anchura, setAnchura] = useState('');
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const handleSeleccion = (grupo, opcion) => {
    setSeleccionadas(prev => ({ ...prev, [grupo]: opcion }));
  };

  const superficie = parseFloat(longitud) * parseFloat(anchura);
  const precioM2 = preciosPorNivel[nivel] || 0;
  const presupuesto = superficie > 0 && nivel ? (superficie * precioM2).toFixed(2) : null;

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800">Calcula tu reforma</h1>

      {!mostrarOpciones && (
        <div className="space-y-6">
          <p className="text-sm text-gray-600 text-center">Selecciona el nivel de calidad y las medidas de tu baño:</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {niveles.map(n => (
              <button
                key={n}
                onClick={() => setNivel(n)}
                className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 ${nivel === n ? 'bg-black text-white shadow-md scale-105' : 'border border-gray-300 hover:bg-gray-50'}`}
              >
                {n}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="number"
              placeholder="Longitud (m)"
              value={longitud}
              onChange={e => setLongitud(e.target.value)}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              placeholder="Anchura (m)"
              value={anchura}
              onChange={e => setAnchura(e.target.value)}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            disabled={!longitud || !anchura || !nivel}
            onClick={() => setMostrarOpciones(true)}
            className="bg-black text-white px-6 py-3 rounded-lg mt-4 transition hover:bg-gray-800 disabled:opacity-40"
          >
            Continuar
          </button>
        </div>
      )}

      {mostrarOpciones && (
        <>
          {Object.entries(opciones).map(([grupo, opcionesGrupo]) => (
            <div key={grupo} className="border p-6 rounded-2xl shadow-md bg-gray-50 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">{grupo}</h2>
              <div className="flex flex-wrap gap-3">
                {opcionesGrupo.map(opcion => (
                  <button
                    key={opcion}
                    onClick={() => handleSeleccion(grupo, opcion)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-150 ${
                      seleccionadas[grupo] === opcion ? 'bg-black text-white shadow' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(seleccionadas).length === Object.keys(opciones).length && (
            <div className="mt-8 p-6 border rounded-2xl bg-white shadow-lg">
              <h3 className="font-semibold mb-3 text-gray-700 text-lg">Resumen de tu selección:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Nivel:</strong> {nivel}</li>
                {Object.entries(seleccionadas).map(([grupo, opcion]) => (
                  <li key={grupo}><strong>{grupo}</strong>: {opcion}</li>
                ))}
              </ul>
              <p className="mt-6 font-bold text-xl text-black">
                Superficie: {superficie.toFixed(2)} m²<br />
                Presupuesto estimado: {presupuesto} €
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
