'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        loop={true}  
        autoplay={{
            delay:2500,
           /*  disableOnInteraction: false, */
        }}
        navigation
       pagination={{ clickable: true }} 
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/img/banner01.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/img/banner02.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/img/banner03.jpg" alt="" /></SwiperSlide>
    </Swiper>
    );
};

export default MovieSwiper;