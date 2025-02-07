import React, { useState } from 'react';

const Checkbox: React.FC = () => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div onClick={() => setCheck(!check)} className={`size-6.5 ${check && 'bg-primary border-primary'} flex justify-center items-center duration-200 rounded-[50%] border border-[#EEA6A6] cursor-pointer`}>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${check ? 'block' : 'hidden'} size-4 pt-[1px] pr-[1px]`} viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1"><path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
    </div>
  );
};

export default Checkbox;