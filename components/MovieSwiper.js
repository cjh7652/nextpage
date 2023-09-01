'use client'
import React from 'react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MovieSwiper = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay, /* Scrollbar, */ A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}  
        autoplay={{
            delay:2500,
           /*  disableOnInteraction: false, */
        }}
        navigation
       /*  pagination={{ clickable: false}}  */
       /*  scrollbar={{ draggable: false }} */
       /*  onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} */
    >
      <SwiperSlide><img src="/img/slide01.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/img/slide02.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/img/slide03.jpeg" alt="" /></SwiperSlide>
    </Swiper>
    );
};

export default MovieSwiper;