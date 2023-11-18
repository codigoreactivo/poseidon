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
      <section
        className="flex custom-overlay  w-[full] flex-col justify-center xl:h-screen h-auto items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('img/con-poseidon.jpg')",
        }}
      >
        <div className="w-full z-10 gap-8 flexflex-col justify-between lg:px-24">
          <div className="flex justify-between items-center w-full">
            <h1 className=" lg:text-4xl font-[AVGARDD]">
              Condominio Residencial de Playa
              <span className=" font-bold"> Poseidon</span>{" "}
            </h1>
            <Image
              className=" w-[6%]"
              src="/img/LOGO-POSEIDON-r.png"
              width={250}
              height={232}
            ></Image>
          </div>
          <div className="flex justify-between lg:flex-row flex-col">
            <div className=" flex flex-col justify-center gap-6 ">
              <div className="justify-start items-start flex flex-col gap-3">
                <h2 className=" text-[2.5rem]">
                  Lotes con área desde
                  <span className=" font-bold"> 120 M2</span>{" "}
                </h2>
                <p className=" text-xl">
                  Lotes en primera fila de alta rentabilidad, desde:
                </p>
                <span className=" lg:text-6xl lg:font-black">USD $12,000</span>
                <p className=" text-sm">
                  Consulta por nuestros descuentos especiales en pagos al
                  contado.
                </p>
                <p className=" text-xl">
                  Con<span className=" font-bold"> N° partida 21261906</span>{" "}
                </p>
              </div>
              <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-row p-4 items-center gap-4 shadow-lg rounded-md xl:max-w-[55%] ">
                  <div className=" bg-[#A5FFBA] text-[#15AF3A] rounded-full p-4">
                    <Image
                      src="/icons/register.svg"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <p className="text-xl">
                    Inscritos en{" "}
                    <span className=" font-bold">Registros Públicos</span>
                  </p>
                </div>
                <div className="flex flex-row p-4 items-center gap-4 shadow-lg rounded-md xl:max-w-[55%]">
                  <div className=" bg-[#A5FFBA] rounded-full p-4">
                    <Image src="/icons/cash.svg" width={30} height={30}></Image>
                  </div>
                  <p className="text-xl">
                    Precios desde{" "}
                    <span className=" font-bold">USD $ 12,000</span>
                  </p>
                </div>
                <div className="flex flex-row p-4 items-center gap-4 shadow-lg rounded-md xl:max-w-[55%]">
                  <div className=" bg-[#A5FFBA] rounded-full p-4">
                    <Image
                      src="/icons/adelanto.svg"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <p className="text-xl">
                    Separa con{" "}
                    <span className=" font-bold">USD$ 500 dólares</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-[50%] justify-center">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className=" xl:h-screen h-auto flex xl:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center gap-8">
          <div className="lg:w-[1140px]">
            <iframe
              src="https://www.youtube.com/embed/3SUjPQ09soQ?autoplay=1&mute=1&loop=1&playlist=3SUjPQ09soQ"
              width="560"
              height="315"
              className="responsive-iframe"
              title="Poseidón Primer número cel"
              frameborder="0"
              allow="fullscreen;"
            ></iframe>
          </div>
        </div>
      </section>
      <section className=" xl:h-[70vh] h-auto flex flex-col justify-center items-center">
        <h2 className=" text-3xl">Este proyecto cuenta con:</h2>
        <div className=" flex flex-col  justify-center items-center lg:max-w-[1200px] w-auto ">
          <div className="flex flex-col lg:flex-row justify-between flex-1 text-center">
            <div className="flex-1 flex-col ">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Redes de agua, desagüe y electrificación</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Entrega Inmediata</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Pórtico de Ingreso</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Caseta de Seguridad (vigilada las 24 horas)</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Postes con luminarias solares</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Servicios básicos</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[1200px] text-center justify-between">
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Área de estacionamiento</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Cerco Perimétrico</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Áreas Verdes, veredas y sardineles</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Frente al Mar</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Malecón de 200 metros lineales</p>
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Camino Asfaltados</p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:m-auto xl:h-[80vh] h-auto">
        <Maps />
      </section>
      <section className="w-full h-auto lg:h-[85vh] flex flex-col justify-center items-center mt-24 bg-[#15AF3A] text-white">
        <div className=" xl:max-w-[1290px] w-full my-10 ">
          <h2 className=" text-4xl my-2">A un paso de:</h2>
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="">
              <Image
                data-aos="fade-up"
                src="/img/basia.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold">BOULEVARD DE ASIA</h3>
              <p>
                Disfruta de los diferentes puntos de diversión que ofrece el
                Boulevard, ubicado a 20 min de nuestro condominio, rodeado de
                centros comerciales y centros de entretenimiento
              </p>
            </div>
            <div>
              <Image
                data-aos="fade-up"
                src="/img/muellea.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold">MUELLE DE CERRO AZUL</h3>
              <p>
                Disfruta de una maravillosa vista del mar, sus grandes
                acantilados y divisar aves como el pelícano, el guanay y aves
                guaneras.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-auto h-[70vh] flex flex-col justify-center">
        <div>
          <Gallery />
        </div>
      </section>
      <Wa />
    </div>
  );
};

export default page;
