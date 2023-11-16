'use client'
import React, { useState } from 'react';

const Formulario = () => {
  const [formaPago, setFormaPago] = useState('alContado');

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información
    console.log('Formulario enviado:', {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      telefono: e.target.telefono.value,
      correo: e.target.correo.value,
      ciudad: e.target.ciudad.value,
      tipoDocumento: e.target.tipoDocumento.value,
      numeroDocumento: e.target.numeroDocumento.value,
      formaPago: e.target.formaPago.value,
      plazoCredito: e.target.plazoCredito.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-8 bg-slate-400">
      {/* Primera fila */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input type="text" placeholder="Nombre" className="border p-2" name="nombre" />
        <input type="text" placeholder="Apellido" className="border p-2" name="apellido" />
      </div>

      {/* Segunda fila */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="tel"
          placeholder="Teléfono Celular"
          pattern="[0-9]*"
          className="border p-2"
          name="telefono"
        />
        <input type="email" placeholder="Correo Electrónico" className="border p-2" name="correo" />
      </div>

      {/* Tercera fila */}
      <div className="flex space-y-4">
        <select className="border p-2" name="tipoDocumento">
          <option value="DNI">DNI</option>
          <option value="CarnetExtranjeria">Carnet de Extranjería</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        <input type="number" placeholder="Número del Documento" className="border p-2" name="numeroDocumento" />
      </div>

      {/* Cuarta fila */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <select onChange={handleFormaPagoChange} value={formaPago} className="border p-2" name="formaPago">
          <option value="alContado">Al Contado</option>
          <option value="credito">Crédito</option>
        </select>

        {formaPago === 'credito' ? (
          <select className="border p-2" name="plazoCredito">
            <option value="inmediatamente">Inmediatamente</option>
            <option value="1Mes">1 Mes</option>
            <option value="2Meses">2 Meses</option>
            <option value="3Meses">3 Meses</option>
            <option value="masMeses">Más de 3 Meses</option>
          </select>
        ) : (
          <select className="border p-2" name="plazoCredito">
            <option value="inmediatamente">Inmediatamente</option>
          </select>
        )}
      </div>

      {/* Botón de envío */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
