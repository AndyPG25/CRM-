import React, { useEffect, useState } from 'react';
import "../styles/Editarinicio.css";


const EditarInicio = () => {
  const [form, setForm] = useState({
    vision: '',
    mision: '',
    valores: '',
    nosotros: '',
    organigrama: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/inicio')
      .then(res => res.json())
      .then(data => setForm(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/inicio', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(() => alert('Información actualizada'));
  };

  return (
    <div className="editar-inicio-container">
      <h1>Editar Inicio</h1>
      <form onSubmit={handleSubmit}>
        {['vision', 'mision', 'valores', 'nosotros', 'organigrama'].map(field => (
          <div key={field}>
            <label>{field.toUpperCase()}</label>
            <textarea
              name={field}
              value={form[field]}
              onChange={handleChange}
              rows="4"
            />
          </div>
        ))}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarInicio;
