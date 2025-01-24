import React from 'react';
import Button from './ui/Button';
import logo from '../../public/logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-36'>
      <div className='container rounded-2xl bg-[#F7F7F1] pl-6 pr-4 pt-12 pb-7 relative'>
        <div className='w-1/2'>
          <ul className='list-disc ml-4'>
            <li className='text-base font-normal'>Our Work</li>
          </ul>
          <h2 className='text-[2.45rem] mt-6'>We will clarify your needs and prepare a project plan for you with an estimated cost and timeline</h2>
          <div className='mt-9'>
            <Button bgColor='#111213'>
              <svg className='relative z-10' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
                <path className='group-hover:stroke-[#F7F7F1] stroke-white  relative z-10' d='M10.5 8H7.5' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path className='group-hover:stroke-[#F7F7F1] stroke-white  relative z-10' d='M3.5 18.5V5.5C3.5 4.11929 4.61929 3 6 3H6.5C7.05228 3 7.5 3.44772 7.5 4V15C7.5 15.5523 7.05228 16 6.5 16H6C4.61929 16 3.5 17.1193 3.5 18.5H3.5C3.5 19.8807 4.61929 21 6 21H19.5C20.6046 21 21.5 20.1046 21.5 19V11' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path className='group-hover:stroke-[#F7F7F1] stroke-white  relative z-10' fillRule='evenodd' clipRule='evenodd' d='M15.2495 12.6835L13.0708 12.9948C12.9155 13.018 12.7583 12.9666 12.6468 12.856C12.5353 12.7455 12.4826 12.5887 12.5045 12.4332C12.5937 11.8092 12.7271 10.8752 12.8165 10.2498C12.8778 9.82154 13.0762 9.42465 13.3821 9.11872L18.8795 3.62111C19.2772 3.22342 19.8165 3 20.3789 3C20.9413 3 21.4807 3.22342 21.8783 3.62111V3.62111C22.7064 4.44926 22.7064 5.79189 21.8783 6.62004L16.3808 12.1179C16.0748 12.4238 15.6779 12.6223 15.2495 12.6835V12.6835Z' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
              <p className='group-hover:text-[#F7F7F1] text-white relative z-10'>Start the project</p>
            </Button>
          </div>
        </div>
        <div className='bg-[#151515] bottom-0 right-0 border-t-l-4 absolute'>
          <Image className='cursor-pointer p-3' src={logo} alt='Logo' width={152} height={48} />
          <svg className='absolute size-[14px] bottom-[0px] left-[-14px]' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
          </svg>
          <svg className='absolute size-[14px] top-[-14px] right-0' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path className='absolute fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;