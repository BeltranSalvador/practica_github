import React, { useState } from "react";
import OSuma from "../Componentes/OperarSuma";

function Sum() {
  const [loc, setLoc] = useState(0);
  const [esfuerzo, setEsfuerzo] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [productividad, setProductividad] = useState(0);
  const [costoBolivianos, setCostoBolivianos] = useState(0);

  // Ajusta el CHM según el costo por hora-hombre en bolivianos
  const chmBolivianos = 3070.60; // Ejemplo: 3070.60 Bs. por persona-mes

  const calcular = () => {
    const esf = 39 * (loc / 1000);
    const tdes = 2.5 * esf;
    const pers = esf / tdes;
    const prod = loc / esf;
    const costo = esf * chmBolivianos;

    setEsfuerzo(esf.toFixed(2));
    setTiempo(tdes.toFixed(2));
    setPersonal(pers.toFixed(2));
    setProductividad(prod.toFixed(2));
    setCostoBolivianos(costo.toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de Estimación de Proyectos (Bs.)</h1>
      <label>
        Líneas de Código:
        <input type="number" value={loc} onChange={(e) => setLoc(e.target.value)} />
      </label>
      <button onClick={calcular}>Calcular</button>
      <p>Esfuerzo (personas-mes): {esfuerzo}</p>
      <p>Tiempo de Desarrollo (meses): {tiempo}</p>
      <p>Personal necesario: {personal}</p>
      <p>Productividad (instrucciones/persona-mes): {productividad}</p>
      <p>Costo total (Bs.): {costoBolivianos}</p>
    </div>
  );
}


export default Sum;

