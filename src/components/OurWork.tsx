'use client';

import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurWork: React.FC = () => {
  return (
    <div className='bg-white px-3 py-5 rounded-2xl relative'>
      <div className="flex items-center space-x-2 mb-7 xs:mb-0 absolute">
        <div className="w-1 h-1 rounded-full bg-primary-bg"></div>
        <span className="text-md text-primary-bg">Our work</span>
      </div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}

        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className='text-end text-base'>VovaFM Landing Page</p>
          <video className='mt-3.5 rounded-2xl h-70 object-cover' src="video/VovaFM.mp4" autoPlay muted loop></video>
          <p className='mt-3 mb-20 text-[17px] italic'>We provide design and programming services tailored to every individual need.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='zirt' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='zirt' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='zirt' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurWork;