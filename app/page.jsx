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
      <section className="flex w-[full] flex-col justify-center xl:h-[80vh] h-auto items-center">
        <div className="flex justify-between items-center lg:w-[1290px]">
          <h1 className=" lg:text-4xl">
            Condominio Residencial de Playa
            <span className=" font-bold"> Poseidon</span>{" "}
          </h1>
          <Image
            className=" w-[10%]"
            src="/img/LOGO-POSEIDON-r.png"
            width={250}
            height={232}
          ></Image>
        </div>
        <div className="lg:w-[1290px] w-full gap-8 flex lg:flex-row flex-col justify-between">
          <div className="flex basis-[50%] justify-start">
            <iframe
              width="629"
              height="400"
              className="responsive-iframe"
              src="https://www.youtube.com/embed/V2aUnFMf_Fo"
              title="Vida y Hogar | Asia 109: disfruta los placeres de vivir frente al mar"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex basis-[50%] justify-end">
            <Form />
          </div>
        </div>
      </section>
      <section className=" xl:h-[90vh] h-auto flex xl:flex-row flex-col justify-center">
        <div className="flex self-center w-full xl:flex-row flex-col xl:h-[90vh] gap-8">
          <div
            className="xl:w-[50%] justify-center items-center h-[60vh] xl:h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('img/con-poseidon.jpg')",
            }}
          >
            s
          </div>
          <div className="xl:w-[50%] flex flex-col justify-center p-4 gap-6 ">
            <div className="justify-center items-start flex flex-col gap-3">
              <h2 className=" text-[2.5rem]">
                Lotes con área desde<span className=" font-bold"> 120 M2</span>{" "}
              </h2>
              <p className=" text-xl">
                Lotes en primera fila de alta rentabilidad, desde:
              </p>
              <span className=" lg:text-6xl lg:font-black">USD $15,000</span>
              <p className=" text-sm">
                Consulta por nuestros descuentos especiales en pagos al contado.
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
                  Precios desde <span className=" font-bold">USD $ 15,000</span>
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Entrega Inmediata</p>
            </div >
            <div className="flex-1 flex-col">
              <div className=" flex justify-center">
                <Image
                  src="/icons/register.svg"
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
                  className="bg-[#A5FFBA] text-[#15AF3A] flex  p-4 rounded-full"
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
      <section className="w-full h-auto flex flex-col justify-center items-center">
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
      <section className=" w-auto ">
        <Gallery />
      </section>
      <Wa />
    </div>
  );
};

export default page;
