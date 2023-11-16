import React from "react";
import Form from "@/components/Form";
import Maps from "@/components/Maps";
import Wa from "@/components/Wa";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="flex w-full 2xl:flex-row flex-col justify-center h-[80vh] items-center">
        <div className="flex basis-[50%] justify-center">
          <iframe
            width="629"
            height="400"
            src="https://www.youtube.com/embed/V2aUnFMf_Fo"
            title="Vida y Hogar | Asia 109: disfruta los placeres de vivir frente al mar"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex basis-[50%] justify-center">
          <Form />
        </div>
      </section>
      <section className=" h-[90vh] flex 2x:flex-row flex-col justify-center">
        <div className="flex self-center w-full xl:flex-row flex-col h-screen">
          <div className="w-[50%] justify-center items-center h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('img/con-poseidon.jpg')",
        }}></div>
          <div className="w-[50%] flex flex-col justify-center p-4 ">
            <div className="justify-center items-start flex flex-col">
              <h2>Malecón de 200 metros lineales</h2>
              <p>Lotes en primera fila de alta rentabilidad, desde:</p>
              <span>USD $60.000</span>
              <p>
                Consulta por nuestros descuentos especiales en pagos al contado.
              </p>
              <p>Con N° partida 21261906</p>
            </div>
            <div>
              <div>
                <div></div>
                <p>Inscritos en Registros Públicos</p>
              </div>
              <div>
                <div></div>
                <p>Precios Desde USD $ 60.000</p>
              </div>
              <div>
                <div></div>
                <p>Separa con USD$ 500 dólares</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-[70vh] flex flex-col justify-center items-center">
        <h2>Este proyecto cuenta con:</h2>
        <div className=" flex flex-coi 2xl:flex-row justify-center items-center 2xl:w-[1200px] gap-10">
          <div>
            <div></div>
            <p>Redes de agua, desagüe y electrificación</p>
          </div>
          <div>
            <div></div>
            <p>Entrega Inmediata</p>
          </div>
          <div>
            <div></div>
            <p>Pórtico de Ingreso</p>
          </div>
          <div>
            <div></div>
            <p>Caseta de Seguridad (vigilada las 24 horas)</p>
          </div>
          <div>
            <div></div>
            <p>Postes con luminarias solares</p>
          </div>
          <div>
            <div></div>
            <p>Servicios básicos</p>
          </div>
          <div>
            <div></div>
            <p>Área de estacionamiento</p>
          </div>
          <div>
            <div></div>
            <p>Cerco Perimétrico</p>
          </div>
          <div>
            <div></div>
            <p>Áreas Verdes, veredas y sardineles</p>
          </div>
          <div>
            <div></div>
            <p>Frente al Mar</p>
          </div>
          <div>
            <div></div>
            <p>Malecón de 200 metros lineales</p>
          </div>
          <div>
            <div></div>
            <p>Camino Asfaltados</p>
          </div>
        </div>
      </section>
      <section className="m-auto h-[80vh]">
        <Maps/>
      </section>
      <section></section>
      <section></section>
      <Wa/>
    </div>
  );
};

export default page;
