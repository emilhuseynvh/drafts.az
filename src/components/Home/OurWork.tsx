'use client';

import React, { useState, useEffect } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const OurWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const t = useTranslations()
  useEffect(() => {
    setVideoLoaded(false);
  }, [activeIndex]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className='py-17.5'>
      <div className='h-120 md:h-182 bg-primary-white px-3 py-5 rounded-2xl relative'>
        <div className='absolute md:pt-12'>
          <div className="flex items-center space-x-2 mb-7 xs:mb-0">
            <div className="w-1 h-1 rounded-full bg-primary-bg"></div>
            <span className="text-md text-primary-bg">{t('our_work.our_work')}</span>
          </div>
          <p className='hidden md:block my-7 text-4xl font-normal w-[60%]'>{t('our_work.work_slider_static_title')}</p>
        </div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation]}
          className="mySwiper h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {t.raw('our_work.slider_items').map((item: any, index: number) => (
            <SwiperSlide key={index}>
              {activeIndex === index && (
                <>
                  <div className='w-full flex items-end justify-between flex-col-reverse md:flex-row gap-5 md:gap-2 md:mt-25'>
                    <div>
                      <p className='md:max-w-96 mt-3 text-[17px] italic'>{t('our_work.slider_static_text')}</p>
                    </div>
                    <div>
                      <p className='text-end text-lg md:text-2xl'>{item.content}</p>
                      <video
                        lang='az'
                        className={`mt-8 md:mt-5 rounded-xl md:mx-0 mx-auto h-54 md:h-106 w-162 object-cover `}
                        autoPlay
                        preload='metadata'
                        muted
                        loop
                        onLoadedData={handleVideoLoad}
                      >
                        <source src={`video/${item.source}`} type='video/mp4' />
                        {t('our_work.slider_error_message')}
                      </video>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurWork;
