import React, { useState } from "react";

const BanotopLevels = () => {
  const [nivel, setNivel] = useState(null);
  const [tipoAlicatado, setTipoAlicatado] = useState(null);
  const [platoDucha, setPlatoDucha] = useState(null);
  const [mampara, setMampara] = useState(null);
  const [mueble, setMueble] = useState(null);
  const [espejo, setEspejo] = useState(null);
  const [longitud, setLongitud] = useState(0);
  const [anchura, setAnchura] = useState(0);
  const [telefono, setTelefono] = useState("");
  const [enviado, setEnviado] = useState(false);

  const niveles = ["Esencial", "Confort", "Premium", "Signature"];
  const alicatados = ["Blanco brillo", "Porcelánico mate", "Mármol cerámico"];
  const platos = ["Cerámico", "Resina textura pizarra", "Piedra natural"];
  const mamparas = ["Corredera", "Abatible", "Fija (walk-in)"];
  const muebles = ["Suspendido", "Con patas", "Con doble seno"];
  const espejos = ["Redondo retroiluminado", "Rectangular sin marco", "Con marco negro"];

  const superficie = longitud * anchura;
  const base = 500;
  const extraNivel = nivel ? niveles.indexOf(nivel) * 100 : 0;
  const precio = superficie * (base + extraNivel);

  const imagenesNivel = {
    "Esencial": "/esencial.jpg",
    "Confort": "/confort.jpg",
    "Premium": "/premium.jpg",
    "Signature": "/signature.jpg"
  };

  const handleSubmit = () => {
    if (telefono.trim()) {
      setEnviado(true);
    }
  };

  const renderBotones = (opciones, seleccionado, setSeleccionado) => (
    <div className="flex flex-wrap gap-2 mb-4">
      {opciones.map((op) => (
        <button
          key={op}
          className={`px-4 py-2 rounded-full transition text-sm font-medium ${
            seleccionado === op ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSeleccionado(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Empieza ahora la reforma de tu baño</h1>

      <h2 className="text-xl font-semibold mb-2">Nivel</h2>
      {niveles.map((n) => (
        <div key={n} className="mb-8">
          <button
            className={`px-4 py-2 rounded-full mr-2 mb-2 text-white ${nivel === n ? "bg-blue-600" : "bg-gray-400"}`}
            onClick={() => setNivel(n)}
          >
            {n}
          </button>
          <div className="flex justify-center mt-2">
            <img
              src={imagenesNivel[n]}
              alt={`Baño nivel ${n}`}
              className="w-[300px] h-auto rounded-xl shadow"
            />
          </div>
        </div>
      ))}

      <h2 className="text-xl font-semibold mt-8 mb-2">Tipo de alicatado</h2>
      {renderBotones(alicatados, tipoAlicatado, setTipoAlicatado)}

      <h2 className="text-xl font-semibold mt-8 mb-2">Plato de ducha</h2>
      {renderBotones(platos, platoDucha, setPlatoDucha)}

      <h2 className="text-xl font-semibold mt-8 mb-2">Mampara</h2>
      {renderBotones(mamparas, mampara, setMampara)}

      <h2 className="text-xl font-semibold mt-8 mb-2">Mueble de baño</h2>
      {renderBotones(muebles, mueble, setMueble)}

      <h2 className="text-xl font-semibold mt-8 mb-2">Espejo</h2>
      {renderBotones(espejos, espejo, setEspejo)}

      <h2 className="text-xl font-semibold mt-8 mb-2">Medidas del baño</h2>
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

      <div id="resumen" className="bg-gray-100 p-6 rounded-xl mb-6 shadow">
        <h2 className="text-lg font-semibold mb-2 text-blue-700">Resumen de tu selección:</h2>
        <ul className="space-y-1">
          {nivel && <li><strong>Nivel:</strong> {nivel}</li>}
          {tipoAlicatado && <li><strong>Alicatado:</strong> {tipoAlicatado}</li>}
          {platoDucha && <li><strong>Plato de ducha:</strong> {platoDucha}</li>}
          {mampara && <li><strong>Mampara:</strong> {mampara}</li>}
          {mueble && <li><strong>Mueble:</strong> {mueble}</li>}
          {espejo && <li><strong>Espejo:</strong> {espejo}</li>}
        </ul>
        <p className="mt-4 font-medium">
          🧮 Superficie: {superficie.toFixed(2)} m²<br />
          💰 Presupuesto estimado: {precio.toFixed(2)} €
        </p>
      </div>

      <div id="contacto" className="mt-8">
        <h2 className="text-xl font-semibold mb-2">¿Listo para empezar tu reforma?</h2>
        <p className="mb-4">Déjanos tu número y te llamamos para ponernos en marcha:</p>
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="tel"
            placeholder="Tu número de teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            ¡Empezar mi reforma!
          </button>
        </div>
        {enviado && (
          <p className="text-green-600 mt-4 font-medium">✅ ¡Gracias! Nos pondremos en contacto contigo pronto.</p>
        )}
      </div>

      <footer className="bg-gray-100 py-6 mt-12 border-t text-center text-sm text-gray-600">
        <p>
          Bañotop es una marca especializada en reformas de baño, impulsada por{" "}
          <a href="https://www.zangroniz.es" target="_blank" className="text-blue-600 hover:underline">
            Zangroniz.es
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Bañotop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default BanotopLevels;
