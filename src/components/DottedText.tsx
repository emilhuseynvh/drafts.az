import React from 'react'

const DottedText = ({ title }: string) => {
    return (
        <div className="flex items-center space-x-3 pb-7 xs:py-0">
            <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
            <span className="text-sm md:text-lg text-[#F7F7F1]">{title}</span>
        </div>
    )
}

export default DottedText
