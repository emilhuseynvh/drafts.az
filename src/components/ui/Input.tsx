import React from 'react';

interface InputProps {
    max?: number;
    min?: number;
    step?: number;
    inpValue?: number;
    value?: number;
    setValue: (value: number) => void;
}

const Input: React.FC<InputProps> = ({ max, min, step, inpValue, value, setValue }) => {
    return (
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(+e.target.value)} max={max} value={value} min={min} step={step} className='w-full custom-range' type="range" />
    );
};

export default Input;