import { ChildrenProps } from '@/types/children-prop.dto';
import React from 'react';

const Button: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <button className='bg-white relative flex justify-center overflow-hidden group rounded-xl h-12 gap-2 items-center w-[271px]'>
      {children}
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 top-[-80px] left-0'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 top-[-80px] left-[64px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 top-[-80px] left-[128px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 top-[-80px] left-[192px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 bottom-[-80px] left-0'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 bottom-[-80px] left-[64px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 bottom-[-80px] left-[128px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary group-hover:top-1/2 group-hover:-translate-y-1/2 bottom-[-80px] left-[192px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary left-[-80px] group-hover:left-[-15px]'></div>
      <div className='size-20 duration-[700ms] rounded-[50%] absolute bg-primary right-[-80px] group-hover:right-[-15px]'></div>
    </button>
  );
};

export default Button;