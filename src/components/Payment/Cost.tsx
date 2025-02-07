import React from 'react';

interface CostProps {
    value: string;
}

const Cost: React.FC<CostProps> = ({ value }) => {
    return (
        <div className='bg-primary-white flex items-center justify-between rounded-2xl px-6 py-5 mt-10'>
            <p className='text-primary-bg text-[17px] font-normal'>Cost:</p>
            <p className='text-primary text-[22px] font-normal'>{value}</p>
        </div>
    );
};

export default Cost;