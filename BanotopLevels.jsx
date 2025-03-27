import React, { useState } from "react";

const levels = [
  {
    id: "esencial",
    title: "Esencial",
    icon: "💰",
    description:
      "Reforma funcional con materiales duraderos y diseño sencillo. Ideal para presupuestos ajustados.",
  },
  {
    id: "confort",
    title: "Confort",
    icon: "✨",
    description:
      "Estética y comodidad con mejores materiales, más opciones y acabados cuidados. Equilibrio perfecto.",
  },
  {
    id: "premium",
    title: "Premium",
    icon: "💎",
    description:
      "Espacios modernos y sofisticados, con alto nivel de personalización y materiales de gama alta.",
  },
  {
    id: "signature",
    title: "Signature",
    icon: "🖋️",
    description:
      "Diseño exclusivo, atención al detalle y experiencia premium total. Tu baño como una obra de autor.",
  },
];

export default function BanotopLevels() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", email: "", medidas: "" });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Elige cómo quieres transformar tu baño
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {levels.map((level) => (
          <div
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            style={{
              border: selectedLevel === level.id ? "2px solid black" : "1px solid #ccc",
              padding: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              background: "#fff",
              transition: "0.3s",
            }}
          >
            <div style={{ fontSize: "2rem" }}>{level.icon}</div>
            <h2>{level.title}</h2>
            <p>{level.description}</p>
          </div>
        ))}
      </div>

      {selectedLevel && (
        <div style={{ marginTop: "2rem" }}>
          <h3>
            Solicita tu reforma:{" "}
            {levels.find((l) => l.id === selectedLevel).title}
          </h3>
          <form style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            <input
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            />
            <input
              placeholder="Tu email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              placeholder="Medidas aproximadas del baño (m²)"
              value={formData.medidas}
              onChange={(e) => setFormData({ ...formData, medidas: e.target.value })}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}
