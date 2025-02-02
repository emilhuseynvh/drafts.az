'use client';
import React, { useState, useRef, useEffect } from 'react';
import Button from '../ui/Button';
import lang from './../../../public/icons/language.svg';
import Image from 'next/image';
import az from './../../../public/icons/az.svg';
import en from './../../../public/icons/en.svg';
import ru from './../../../public/icons/russia.png';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

const Hero: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = pathWithoutLocale || '/';
    router.replace(newPath, { locale: newLocale });
  };

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className='relative md:mt-0 mt-16'>
      <div
        onClick={() => setFlag(!flag)}
        className={`absolute duration-300 transition-[height] z-50 hidden lg:block right-[30%] xl:right-[25%] select-none py-2 px-3 ${!flag ? 'h-10' : 'h-30'} overflow-hidden rounded-xl top-2 bg-white`}
      >
        <div className='flex gap-1.5 cursor-pointer'>
          {currentLocale.toUpperCase()}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 10L12 14L16 10" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {['az', 'en', 'ru'].map(code => (
          <div
            key={code}
            onClick={() => changeLanguage(code)}
            className={`flex ${currentLocale === code && 'hidden'} items-center ml-0.5 gap-2 my-3 cursor-pointer`}
          >
            <p className='text-sm font-medium'>{code.toUpperCase()}</p>
            <Image className='size-6' src={code === 'az' ? az : code === 'en' ? en : ru} alt={`Language ${code} icon`} />
          </div>
        ))}
      </div>

      <video
        ref={videoRef}
        lang='az'
        className='h-[400px] md:h-[724px] w-full object-cover rounded-2xl'
        autoPlay
        loop
        muted
        preload='none'
      >
        <source src='video/hero-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Button */}
      <div className='lg:w-[274] w-[196px] absolute bottom-[-8px] left-[-8px] md:block hidden bg-primary-bg px-3 pt-3.5 pb-3 border-t-r-4'>
        <Button width='100%'>
          <p className='relative z-10 group-hover:text-white'>{t('header.start_project')}</p>
          <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:stroke-white' fillRule="evenodd" clipRule="evenodd"
              d="M10.131 13.869C8.96102 12.699 8.07902 11.389 7.49302 10.06C7.37002 9.77897 7.44202 9.44997 7.65902 9.23297L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z"
              stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className='group-hover:stroke-white' d="M15 3V9H21" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className='group-hover:stroke-white' d="M21 3L15 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
