"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
    const form = useRef();
    const [pageTitle, setPageTitle] = useState('');
  useEffect(() => {
    // Actualiza el título de la página en el estado
    const title = document.title;
    setPageTitle(title);
  }, []);
  const formData = new FormData(form.current);
    formData.append('pageTitle', pageTitle);

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    // Utiliza una expresión regular para permitir solo números
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(sanitizedValue);
  };
  const [formaPago, setFormaPago] = useState("alContado");

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_efzgheu",
        "template_quxquxa",
        form.current,
        "TIR7WRC51iF3lZG5p"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Solicitus Enviada");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" flex justify-center items-center flex-col my-8"
      id="form"
    >
      <h2 className=" self-start text-lg ml-4">
        Cotiza aquí tu <span className=" font-bold"> Nuevo Lote</span>{" "}
      </h2>
      <div className="flex basis-full flex-wrap justify-between gap-3 p-3">
        <div className="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
          <label for="from_name">Nombres y Apellidos</label>
          <input type="text" name="from_name" id="from_name" required></input>
        </div>
        <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
          <label for="phone">Telefono</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          ></input>
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
            {/* <option value="credito">Crédito</option>*/}
          </select>
        </div>
        <div class="field flex flex-col lg:basis-[48%] basis-full border-solid border-[1px] border-[#111] p-1">
          <label for="payTime">Plazo de Pago</label>
          {/* {formaPago === "credito" ? (*/}
          <select name="payTime" id="payTime" required>
            <option value="inmediatamente">Inmediatamente</option>
            {/* <option value="1Mes">1 Mes</option>
              <option value="2Meses">2 Meses</option>
              <option value="3Meses">3 Meses</option>
              <option value="masMeses">Más de 3 Meses</option>*/}
          </select>
          {/* {) : (
            <select name="payTime" id="payTime" required>
              <option value="inmediatamente">Inmediatamente</option>
            </select>
          )}(*/}
          <input type="hidden" name="pageTitle" value={pageTitle} />
        </div>
      </div>

      <input
        className=" bg-[#3B82F6] w-[92%] text-xl h-[60px] text-white cursor-pointer hover:bg-[#15AF3A] ease-in-out"
        type="submit"
        id="button"
        value="Enviar ahora"
      ></input>
    </form>
  );
};

export default Formulario;
