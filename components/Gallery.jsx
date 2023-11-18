'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
616

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,

        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/img/1p.jpeg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/2p.jpeg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/3p.jpeg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/4p.jpeg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/5p.jpeg" width={616} height={410}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
