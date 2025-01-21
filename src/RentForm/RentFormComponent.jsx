import React, { useState } from 'react';
import './RentFormStyle.css'; // Archivo CSS para estilos

const RentForm = ({ book, onRent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario de alquiler
    onRent({ name, email, deliveryDate });
  };

  return (
    <div className="rent-form">
      <h2>Alquilar {book.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha de Entrega</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="rent-button">Confirmar Alquiler</button>
      </form>
    </div>
  );
};

export default RentForm;
