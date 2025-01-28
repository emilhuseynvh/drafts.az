import React from 'react';
import Button from './ui/Button';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import phoneIcon from './../../public/icons/phone.svg';
import mailIcon from './../../public/icons/mail.svg';
import instagramIcon from './../../public/icons/instagram-white.svg';
import linkedinIcon from './../../public/icons/linkedin.svg';
import behanceIcon from './../../public/icons/behance.svg';

const Footer = () => {
  return (
    <footer className='mt-36 mb-5'>
      <div className='wrapper md:block hidden rounded-2xl bg-[#F7F7F1] pl-6 pr-4 pt-12 pb-7 relative'>
        <div className='w-full flex justify-between'>
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
          <div className='w-1/2 pl-16 flex pr-27 justify-between'>
            <div>
              <p className='text-xs font-normal text-[#3D3D3D] mb-2'>Learn</p>
              <ul>
                <li className='my-1 text-base font-normal text-primary-bg'>Home</li>
                <li className='my-1 text-base font-normal text-primary-bg'>About us</li>
                <li className='my-1 text-base font-normal text-primary-bg'>Our work</li>
                <li className='my-1 text-base font-normal text-primary-bg'>Services</li>
                <li className='my-1 text-base font-normal text-primary-bg'>What our client say</li>
                <li className='my-1 text-base font-normal text-primary-bg'>FAQs</li>
              </ul>
            </div>
            <div>
              <p className='text-xs font-normal text-[#3D3D3D] mb-4'>Contact</p>
              <ul>
                <li className='flex gap-3 my-1.5'>
                  <Image src={phoneIcon} width={24} height={24} alt='Drafts.az footer phone icon' />
                  <p>(050) 800 64 04</p>
                </li>
                <li className='flex gap-3 my-1.5'>
                  <Image width={24} height={24} src={mailIcon} alt='Drafts.az footer mail icon' />
                  <p>info@drafts.az</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='w-full bg-primary-bg mt-6' />
        <div className='flex gap-2 mt-10'>
          <p className='text-xs text-primary-bg font-normal border-r pr-3 border-r-primary-bg'>Privacy Polcy</p>
          <p className='text-xs text-primary-bg font-normal border-r pr-3 border-r-primary-bg'>Made by Drafts 2025</p>
          <p className='text-xs text-primary-bg font-normal '>Drafts Digital</p>
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
        <div className='absolute top-10 right-4'>
          <div className='bg-primary-bg p-1 hover:bg-primary duration-300 rounded-xl my-2 cursor-pointer'>
            <Image src={instagramIcon} width={24} height={24} alt='Drafts.az instagram icon' />
          </div>
          <div className='bg-primary-bg p-1 hover:bg-primary duration-300 rounded-xl my-2 cursor-pointer'>
            <Image src={linkedinIcon} alt='Drafts.az linkedin icon' width={24} height={24} />
          </div>
          <div className='bg-primary-bg p-1 hover:bg-primary duration-300 rounded-xl my-2 cursor-pointer'>
            <Image src={behanceIcon} alt='Drafts.az linkedin icon' width={24} height={24} />
          </div>
        </div>
      </div>


      <div className='wrapper md:hidden block rounded-2xl'>
        <div className='pl-8 bg-[#F7F7F1] relative pr-4 pt-5 pb-7 border-t-r-4 border-b-l-4'>
          <div className='absolute top-0 left-0 bg-primary-bg w-10 border-b-r-4'>
            <div className='bg-primary-bg p-1 duration-300 rounded-xl my-2 cursor-pointer'>
              <Image src={instagramIcon} width={24} height={24} alt='Drafts.az instagram icon' />
            </div>
            <div className='bg-primary-bg p-1 duration-300 rounded-xl my-2 cursor-pointer'>
              <Image src={linkedinIcon} alt='Drafts.az linkedin icon' width={24} height={24} />
            </div>
            <div className='bg-primary-bg p-1 duration-300 rounded-xl my-2 cursor-pointer'>
              <Image src={behanceIcon} alt='Drafts.az linkedin icon' width={24} height={24} />
            </div>

            <svg className='absolute size-[14px] bottom-[-14px] rotate-180 left-0' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
            </svg>
            <svg className='absolute size-[14px] top-[0] rotate-180 right-[-14px]' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
            </svg>
          </div>
          <ul className='list-disc ml-9 mb-4'>
            <li className='text-base font-normal'>Our Work</li>
          </ul>
          <div className='ml-5'>
            <Button bgColor='#151515' width='60%'>
              <p className='relative z-10 text-white'>Start the project</p>
              <svg className='relative z-10' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
                <path className=' stroke-white relative z-10' d='M10.5 8H7.5' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path className=' stroke-white relative z-10' d='M3.5 18.5V5.5C3.5 4.11929 4.61929 3 6 3H6.5C7.05228 3 7.5 3.44772 7.5 4V15C7.5 15.5523 7.05228 16 6.5 16H6C4.61929 16 3.5 17.1193 3.5 18.5H3.5C3.5 19.8807 4.61929 21 6 21H19.5C20.6046 21 21.5 20.1046 21.5 19V11' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path className=' stroke-white relative z-10' fillRule='evenodd' clipRule='evenodd' d='M15.2495 12.6835L13.0708 12.9948C12.9155 13.018 12.7583 12.9666 12.6468 12.856C12.5353 12.7455 12.4826 12.5887 12.5045 12.4332C12.5937 11.8092 12.7271 10.8752 12.8165 10.2498C12.8778 9.82154 13.0762 9.42465 13.3821 9.11872L18.8795 3.62111C19.2772 3.22342 19.8165 3 20.3789 3C20.9413 3 21.4807 3.22342 21.8783 3.62111V3.62111C22.7064 4.44926 22.7064 5.79189 21.8783 6.62004L16.3808 12.1179C16.0748 12.4238 15.6779 12.6223 15.2495 12.6835V12.6835Z' stroke='#111213' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </Button>
          </div>
          <div className='flex mt-12 justify-between mb-20'>
            <div>
              <p className='text-base font-semibold text-[#3D3D3D] mb-3.5'>Learn</p>
              <ul>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>Home</li>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>About us</li>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>Our work</li>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>Services</li>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>What our client say</li>
                <li className='my-1 text-[14px] font-normal text-primary-bg'>FAQs</li>
              </ul>
            </div>
            <div>
              <p className='text-base font-semibold  text-[#3D3D3D] mb-4'>Get in touch</p>
              <ul>
                <li className='flex gap-3 my-1.5'>
                  <Image src={phoneIcon} width={24} height={24} alt='Drafts.az footer phone icon' />
                  <p>(050) 800 64 04</p>
                </li>
                <li className='flex gap-3 my-1.5'>
                  <Image width={24} height={24} src={mailIcon} alt='Drafts.az footer mail icon' />
                  <p>info@drafts.az</p>
                </li>
              </ul>
            </div>
          </div>

          <hr className='mb-13 w-9/10 bg-primary-bg h-[1.5px]' />

          <div className='flex gap-2 mt-10'>
            <p className='text-xs text-primary-bg font-normal border-r pr-3 border-r-primary-bg'>Privacy Polcy</p>
            <p className='text-xs text-primary-bg font-normal'>Made by Drafts 2025</p>
          </div>

          <div className='bg-[#151515] bottom-0 right-0 border-t-l-4 absolute'>
            <Image className='cursor-pointer p-3' src={logo} alt='Logo' width={110} height={45} />
            <svg className='absolute size-[14px] bottom-[0px] left-[-14px]' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className='absoulte fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
            </svg>
            <svg className='absolute size-[14px] top-[-14px] right-0' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className='absolute fill-[#151515]' d="M 0 100 Q 95 95, 100 0 L 100 100 Z" stroke="#151515" fill="none" strokeWidth="2" />
            </svg>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;