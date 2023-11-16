import React from "react";

const maps = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.551781166073!2d-76.48534900000001!3d-13.000495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105599320d9055f%3A0x749edeee51200d56!2sCONDOMINIO%20DE%20PLAYA%20POSEIDON!5e0!3m2!1ses-419!2spe!4v1700169505975!5m2!1ses-419!2spe"
        width="1290"
        height="500"
        class="map-p"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col xl:flex-row gap-2">
        <div className=" bg-[#15AF3A] text-white">
          <span>Ubicanos en</span>
          <h3>KM 109 de la Panamericana Sur en el distrito de Asia.</h3>
        </div>
        <div className="flex xl:flex-row flex-col gap-4">
          <div>
            <div></div>
            <p>Inscritos en Registros Públicos</p>
          </div>
          <div>
            {" "}
            <div></div>
            <p>Precios Desde USD $ 60.000</p>
          </div>
          <div>
            {" "}
            <div></div>
            <p>Separa con USD$ 500 dólares</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default maps;
