import React, { useEffect, useState } from 'react';
import "../styles/Inicio.css";



const Inicio = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/inicio')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  if (!info) return <p>Cargando...</p>;

  return (
    <div className="inicio-container">
      <h1>Inicio</h1>
      <section>
        <h2>Visión</h2>
        <p>{info.vision}</p>
      </section>
      <section>
        <h2>Misión</h2>
        <p>{info.mision}</p>
      </section>
      <section>
        <h2>Valores</h2>
        <p>{info.valores}</p>
      </section>
      <section>
        <h2>Nosotros</h2>
        <p>{info.nosotros}</p>
      </section>
      <section>
        <h2>Organigrama</h2>
        <p>{info.organigrama}</p>
      </section>
    </div>
  );
};

export default Inicio;
