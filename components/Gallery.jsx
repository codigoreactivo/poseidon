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
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/img/1p.jpg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/2p.jpg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/3p.jpg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/4p.jpg" width={616} height={410}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/5p.jpg" width={616} height={410}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
