'use client'
// components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Coloca el enlace de WhatsApp aquí
    const whatsappLink = 'https://wa.me/51981384404';
    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg"
      onClick={handleWhatsAppClick}
    >
      {/* Puedes personalizar el ícono de WhatsApp aquí */}
      <FaWhatsapp />

    </button>
  );
};

export default WhatsAppButton;
