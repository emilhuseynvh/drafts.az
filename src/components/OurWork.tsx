'use client';

import React, { useState } from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          {activeIndex === 0 && (
            <>
              <p className='text-end text-base'>VovaFM Landing Page</p>
              <video className='mt-3.5 rounded-2xl h-70 object-cover' src="video/VovaFM.mp4" autoPlay muted loop></video>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 1 && (
            <>
              <p className='text-end text-base'>RideX Mobile App</p>
              <video className='mt-3.5 rounded-2xl h-70 object-cover' src="video/RideX.mp4" autoPlay muted loop></video>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 2 && (
            <>
              <p className='text-end text-base'>Techchore Branding Design</p>
              <video className='mt-3.5 rounded-2xl h-70 object-cover' src="video/Techocre.mp4" autoPlay muted loop></video>
            </>
          )}
        </SwiperSlide>
      <p className='mt-3 mb-20 text-[17px] italic'>We provide design and programming services tailored to every individual need.</p>
      </Swiper>
    </div>
  );
};

export default OurWork;
