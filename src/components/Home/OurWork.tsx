'use client';

import React, { useState, useEffect } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(false);
  }, [activeIndex]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className='bg-primary-white px-3 py-5 rounded-2xl relative'>
      <div className='absolute'>
        <div className="flex items-center space-x-2 mb-7 xs:mb-0">
          <div className="w-1 h-1 rounded-full bg-primary-bg"></div>
          <span className="text-md text-primary-bg">Our work</span>
        </div>
        <p className='hidden md:block my-7 text-3xl font-normal w-[60%]'>Take a look at our projects</p>
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
              <p className='text-end md:block hidden left-0 text-base md:absolute bottom-[10px] md:text-2xl'>VovaFM Landing Page</p>
              <video
                lang='az'
                className={`mt-8 md:mt-16 rounded-2xl md:mx-0 mx-auto h-70 object-cover md:ml-auto`}

                autoPlay
                preload='metadata'
                muted
                loop
                onLoadedData={handleVideoLoad}
              >
                <source src="video/VovaFM.mp4" type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 1 && (
            <>
              <p className='text-end text-base md:inline-block left-0 hidden md:absolute bottom-[10px] md:text-2xl'>RideX Mobile App</p>
              {!videoLoaded && (
                <div className="mt-3.5 md:w-[30%] md:ml-auto rounded-2xl h-70 bg-gray-300 animate-pulse"></div>
              )}
              <video
                lang='az'
                className={`mt-8 md:mt-16 rounded-2xl h-70 md:mx-0 mx-auto md:ml-auto object-cover ${!videoLoaded ? 'hidden' : ''}`}
                autoPlay
                preload='metadata'
                muted
                loop
                onLoadedData={handleVideoLoad}
              >
                <source src="video/RideX.mp4" type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeIndex === 2 && (
            <>
              <p className='text-end  md:block hidden left-0 text-base md:absolute bottom-[10px] md:text-2xl'>Techchore Branding Design</p>
              {!videoLoaded && (
                <div className="mt-3.5 md:ml-auto md:w-[30%] rounded-2xl h-70 bg-gray-300 animate-pulse"></div>
              )}
              <video
                className={`mt-8 md:mt-16 rounded-2xl h-70 md:mx-0 mx-auto md:ml-auto object-cover ${!videoLoaded ? 'hidden' : ''}`}
                autoPlay
                lang='az'
                preload='metadata'
                muted
                loop
                onLoadedData={handleVideoLoad}
              >
                <source src="video/Techocre.mp4" type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </SwiperSlide>
        <p className='mt-3 mb-20 text-[17px] italic'>We provide design and programming services tailored to every individual need.</p>
      </Swiper>
    </div>
  );
};

export default OurWork;
