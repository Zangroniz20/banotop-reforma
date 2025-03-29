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

  return (
    <div>
      <h1>Empieza ahora la reforma de tu baño</h1>

      <h2>Nivel</h2>
      {niveles.map((n) => (
        <div key={n} style={{ marginBottom: '1.5rem' }}>
          <button
            className={nivel === n ? "selected" : ""}
            onClick={() => setNivel(n)}
          >
            {n}
          </button>
          <div style={{ marginTop: '0.5rem' }}>
            <img
              src={imagenesNivel[n]}
              alt={`Baño nivel ${n}`}
              style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
            />
          </div>
        </div>
      ))}

      <h2>Tipo de alicatado</h2>
      {alicatados.map((tipo) => (
        <button
          key={tipo}
          className={tipoAlicatado === tipo ? "selected" : ""}
          onClick={() => setTipoAlicatado(tipo)}
        >
          {tipo}
        </button>
      ))}

      <h2>Plato de ducha</h2>
      {platos.map((p) => (
        <button
          key={p}
          className={platoDucha === p ? "selected" : ""}
          onClick={() => setPlatoDucha(p)}
        >
          {p}
        </button>
      ))}

      <h2>Mampara</h2>
      {mamparas.map((m) => (
        <button
          key={m}
          className={mampara === m ? "selected" : ""}
          onClick={() => setMampara(m)}
        >
          {m}
        </button>
      ))}

      <h2>Mueble de baño</h2>
      {muebles.map((m) => (
        <button
          key={m}
          className={mueble === m ? "selected" : ""}
          onClick={() => setMueble(m)}
        >
          {m}
        </button>
      ))}

      <h2>Espejo</h2>
      {espejos.map((e) => (
        <button
          key={e}
          className={espejo === e ? "selected" : ""}
          onClick={() => setEspejo(e)}
        >
          {e}
        </button>
      ))}

      <h2>Medidas del baño</h2>
      <input
        type="number"
        placeholder="Longitud (m)"
        value={longitud}
        onChange={(e) => setLongitud(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Anchura (m)"
        value={anchura}
        onChange={(e) => setAnchura(parseFloat(e.target.value))}
      />

      <div id="resumen">
        <h2>Resumen de tu selección:</h2>
        <ul>
          {nivel && <li><strong>Nivel:</strong> {nivel}</li>}
          {platoDucha && <li><strong>Plato de ducha:</strong> {platoDucha}</li>}
          {mampara && <li><strong>Mampara:</strong> {mampara}</li>}
          {mueble && <li><strong>Mueble de baño:</strong> {mueble}</li>}
          {espejo && <li><strong>Espejo:</strong> {espejo}</li>}
          {tipoAlicatado && <li><strong>Tipo de alicatado:</strong> {tipoAlicatado}</li>}
        </ul>
        <p>
          Superficie: {superficie.toFixed(2)} m²<br />
          Presupuesto estimado: {precio.toFixed(2)} €
        </p>
      </div>

      <div id="contacto">
        <h2>¿Listo para empezar tu reforma?</h2>
        <p>Déjanos tu número y te llamamos para ponernos en marcha:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
          <input type="tel" placeholder="Tu número de teléfono" />
          <button onClick={() => alert("Gracias. ¡Nos pondremos en contacto contigo!")}>¡Empezar mi reforma!</button>
        </div>
      </div>
    </div>
  );
};

export default BanotopLevels;
