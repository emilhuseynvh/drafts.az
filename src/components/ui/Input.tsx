import React from 'react';

interface InputProps {
    max?: number;
    min?: number;
    step?: number;
    inpValue?: number
}

const Input: React.FC<InputProps> = ({ max, min, step, inpValue }) => {
    return (
        <input max={max} defaultValue={inpValue} min={min} step={step} className='w-full custom-range' type="range" />
    );
};

export default Input;