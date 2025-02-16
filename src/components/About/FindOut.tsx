import React from 'react'

const FindOut = ({ title, content }:any) => {
    return (
        <div className='pb-4 md:pb-6 border-b border-b-[#AAA] '>
            <h2 className='font-medium text-4xl text-[#F7F7F1] pb-4 md:pb-6'>{title}</h2>
            <p className='text-[#AAA] max-w-150'>{content}</p>
        </div>
    )
}

export default FindOut
