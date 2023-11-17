"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [formaPago, setFormaPago] = useState("alContado");

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información
    console.log("Formulario enviado:", {
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

      <form className=" flex justify-center items-center flex-col my-8" id="form">
        <div className="flex basis-full flex-wrap justify-between gap-3 p-3">
          <div className="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="from_name">Nombres y Apellidos</label>
            <input type="text" name="from_name" id="from_name" required></input>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="phone">Telefono</label>
            <input type="tel" name="phone" id="phone" required></input>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="email">Correo</label>
            <input type="email" name="email" id="email" required></input>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="city">Ciudad</label>
            <input type="text" name="city" id="city" required></input>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="docType">Tipo de Documento</label>
            <select className="" name="docType" id="docType" required>
              <option value="DNI">DNI</option>
              <option value="CarnetExtranjeria">Carnet de Extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="numDoc">Numero de Documento</label>
            <input type="number" name="numDoc" id="numDoc" required></input>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="payMethod">Forma de Pago</label>
            <select
              onChange={handleFormaPagoChange}
              value={formaPago}
              name="payMethod"
              id="payMethod"
              required
            >
              <option value="alContado">Al Contado</option>
              <option value="credito">Crédito</option>
            </select>
          </div>
          <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
            <label for="payTime">Plazo de Pago</label>
            {formaPago === "credito" ? (
          <select  name="payTime" id="payTime" required>
            <option value="inmediatamente">Inmediatamente</option>
            <option value="1Mes">1 Mes</option>
            <option value="2Meses">2 Meses</option>
            <option value="3Meses">3 Meses</option>
            <option value="masMeses">Más de 3 Meses</option>
          </select>
        ) : (
          <select name="payTime" id="payTime" required>
            <option value="inmediatamente">Inmediatamente</option>
          </select>
        )}
          </div>
        </div>

        <input className=" bg-[#3B82F6] w-[90%] h-[50px] text-white" type="submit" id="button" value="Enviar ahora"></input>
      </form>
   
  );
};

export default Formulario;
