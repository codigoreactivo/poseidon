import React from "react";
import Image from "next/image";

const maps = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex lg:flex-row flex-col justify-between items-center w-full lg:w-[1290px] my-6 px-2">
        <h2 className=" text-3xl">
          Ubicación del <span className=" font-bold">Proyecto</span>
        </h2>
        <div className="flex flex-row gap-4">
          <div>
            <button className="  text-sm uppercase border-solid border-[1px] border-[#15AF3A] px-[15px] h-[50px] rounded-md hover:bg-[#15AF3A] hover:text-white">
              <span></span>Ver con Maps
            </button>
          </div>
          <div>
            <button className=" text-sm uppercase border-solid border-[1px] border-[#00B0A6] px-[15px] h-[50px] rounded-md p-2 hover:bg-[#00B0A6] hover:text-white">
              <span></span>Ver con Waze
            </button>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.551781166073!2d-76.48534900000001!3d-13.000495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105599320d9055f%3A0x749edeee51200d56!2sCONDOMINIO%20DE%20PLAYA%20POSEIDON!5e0!3m2!1ses-419!2spe!4v1700169505975!5m2!1ses-419!2spe"
        width="1290"
        height="500"
        class="map-p"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col xl:flex-row gap-2 w-full  lg:max-w-[1202px] rounded-md m-[-1rem] px-6 lg:px-0  lg:m-[-3rem] bg-[#fff]">
        <div  className=" bg-[#058FC7] text-white lg:rounded-s-lg p-2 xl:p-6 lg:w-[40%]">
          <span className="text-md ">Ubicanos en</span>
          <h3 className=" text-xl font-bold">
            Km. 128.2 de la Panamericana Sur, Cañete, Cerro Azul
          </h3>
        </div>':'
        <div className="flex xl:flex-row flex-col gap-4 justify-center lg:items-center w-full lg:w-[60%] ">
          <div className="lg:w-[30%] flex flex-row items-center gap-2 ">
            <div>
              <Image src="/icons/adelanto.svg" className="bg-[#B9F6F7] p-3 rounded-full" width={50} height={50}></Image>
            </div>
            <p className="text-[1rem] mx-1">Inscritos en <br className=" hidden lg:block" /> <span className=" font-bold">Registros Públicos</span></p>
          </div>
          <div className="lg:w-[30%] flex flex-row items-center gap-2">
            {" "}
            <div>
              <Image src="/icons/adelanto.svg" className="bg-[#B9F6F7] p-3 rounded-full" width={50} height={50}></Image>
            </div>
            <p className="text-[1rem] mx-1">Precios desde <br className=" hidden lg:block" /> <span className=" font-bold">USD $12,000</span></p>
          </div>
          <div className="lg:w-[30%] flex flex-row items-center gap-2">
            {" "}
            <div>
              <Image src="/icons/adelanto.svg" className="bg-[#B9F6F7] p-3 rounded-full" width={50} height={50}></Image>
            </div>
            <p className="text-[1rem] mx-1">Separa con<br className=" hidden lg:block" /><span className=" font-bold"> USD $500 </span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default maps;
