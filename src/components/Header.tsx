import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.svg';
import logoBlack from '../../public/logo-black.svg';
import Button from './ui/Button';
const Header: React.FC = () => {
  return (
    <header className='md:pt-6 md:h-auto h-17 md:bg-transparent bg-primary-white'>
      <div className='wrapper h-full flex items-center justify-between'>
        <div className='flex items-center'>
          <Image className='cursor-pointer md:block hidden' src={logo} alt='Logo' width={158} height={52} />
          <Image className='cursor-pointer md:hidden block' src={logoBlack} alt='Logo' width={100} height={36} />
          <ul className='md:flex ml-16 lg:gap-9  hidden gap-4 text-white font-normal leading-6 text-base'>
            <li className='cursor-pointer text-after relative'>Services</li>
            <li className='cursor-pointer text-after relative'>Work</li>
            <li className='cursor-pointer text-after relative'>About</li>
            <li className='cursor-pointer text-after relative'>Contact</li>
          </ul>
        </div>
        <div className='lg:w-[274] w-[196px] md:block hidden'>
          <Button width='100%'>
            <svg className='relative z-10' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
              <path className='group-hover:stroke-white relative z-10' d='M10.5 8H7.5' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path className='group-hover:stroke-white relative z-10' d='M3.5 18.5V5.5C3.5 4.11929 4.61929 3 6 3H6.5C7.05228 3 7.5 3.44772 7.5 4V15C7.5 15.5523 7.05228 16 6.5 16H6C4.61929 16 3.5 17.1193 3.5 18.5H3.5C3.5 19.8807 4.61929 21 6 21H19.5C20.6046 21 21.5 20.1046 21.5 19V11' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path className='group-hover:stroke-white relative z-10' fillRule='evenodd' clipRule='evenodd' d='M15.2495 12.6835L13.0708 12.9948C12.9155 13.018 12.7583 12.9666 12.6468 12.856C12.5353 12.7455 12.4826 12.5887 12.5045 12.4332C12.5937 11.8092 12.7271 10.8752 12.8165 10.2498C12.8778 9.82154 13.0762 9.42465 13.3821 9.11872L18.8795 3.62111C19.2772 3.22342 19.8165 3 20.3789 3C20.9413 3 21.4807 3.22342 21.8783 3.62111V3.62111C22.7064 4.44926 22.7064 5.79189 21.8783 6.62004L16.3808 12.1179C16.0748 12.4238 15.6779 12.6223 15.2495 12.6835V12.6835Z' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
            <p className='relative z-10 group-hover:text-white'>Start the project</p>
          </Button>
        </div>
        <div className='md:hidden flex flex-col gap-3 cursor-pointer'>
          <div className='bg-black w-8 h-[2.5px]'></div>
          <div className='bg-black w-8 h-[2.5px]'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;  
