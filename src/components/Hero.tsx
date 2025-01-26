'use client';

import React, { useState } from 'react';
import Button from './ui/Button';
import lang from './../../public/icons/language.svg';
import Image from 'next/image';
import az from './../../public/icons/az.svg'
import en from './../../public/icons/en.svg'


const Hero: React.FC = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className='relative md:mt-0 mt-16'>
      <div onClick={() => setFlag(!flag)} className={`absolute lg:block hidden duration-300 transition-[height] z-50 right-[25%] select-none py-2 px-3 ${!flag ? 'h-10' : 'h-30'} overflow-hidden rounded-xl top-2 bg-white`}>
        <div className='flex gap-1.5 cursor-pointer'>
          <Image src={lang} alt='Drafts.az language switchment selection' />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 10L12 14L16 10" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className='flex items-center ml-0.5 gap-2 my-3  cursor-pointer'>
          <p className='text-sm font-medium'>AZ</p>
          <Image src={az} alt='Language azerbaijan icon' />
        </div>
        <div className='flex items-center ml-0.5 gap-2 my-3  cursor-pointer'>
          <p className='text-sm font-medium'>EN</p>
          <Image src={en} alt='Language english icon' />
        </div>
      </div>
      <video lang='az' className='h-[400px] md:h-[724px] w-full object-cover rounded-2xl' autoPlay loop muted>
        <source src='video/hero-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='lg:w-[274] w-[196px] absolute bottom-[-8px] left-[-8px]  md:block hidden bg-primary-bg px-3 pt-3.5 pb-3 border-t-r-4'>
        <svg className='absolute size-[14px]  bottom-[8px] right-[-14px] rotate-90' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
        </svg>
        <svg className='absolute size-[14px]  top-[-14px] left-[8px] rotate-90' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
        </svg>
        <Button width='100%'>
          <svg className='relative z-10' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
            <path className='group-hover:stroke-white relative z-10' d='M10.5 8H7.5' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path className='group-hover:stroke-white relative z-10' d='M3.5 18.5V5.5C3.5 4.11929 4.61929 3 6 3H6.5C7.05228 3 7.5 3.44772 7.5 4V15C7.5 15.5523 7.05228 16 6.5 16H6C4.61929 16 3.5 17.1193 3.5 18.5H3.5C3.5 19.8807 4.61929 21 6 21H19.5C20.6046 21 21.5 20.1046 21.5 19V11' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path className='group-hover:stroke-white relative z-10' fillRule='evenodd' clipRule='evenodd' d='M15.2495 12.6835L13.0708 12.9948C12.9155 13.018 12.7583 12.9666 12.6468 12.856C12.5353 12.7455 12.4826 12.5887 12.5045 12.4332C12.5937 11.8092 12.7271 10.8752 12.8165 10.2498C12.8778 9.82154 13.0762 9.42465 13.3821 9.11872L18.8795 3.62111C19.2772 3.22342 19.8165 3 20.3789 3C20.9413 3 21.4807 3.22342 21.8783 3.62111V3.62111C22.7064 4.44926 22.7064 5.79189 21.8783 6.62004L16.3808 12.1179C16.0748 12.4238 15.6779 12.6223 15.2495 12.6835V12.6835Z' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          <p className='relative z-10 group-hover:text-white'>Start the project</p>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
