import Image from 'next/image'
import React from 'react'
import PlusIcon from "../../../public/icons/Plus.svg";
import ArrowIcon from "../../../public/icons/Group.svg";
import { AccordionItem } from '@/types/accordion-prop.dto';

interface AccordionProps extends AccordionItem {
    item: {
        title?: string;
        firstContent?: string;
        secondContent?: string;
        content?: string;
        buttons?: string[];
    },
    handleFunction?: (index: number) => void,
    activeIndex?: number | null,
    index: number,
    faq?: boolean,
    about?: boolean
}
const Accordion: React.FC<AccordionProps> = ({ item, handleFunction = () => { }, activeIndex, index, faq, about }) => {



    return (
        <div
            onClick={() => handleFunction(index)}
            className={`${about ? 'h-full  flex flex-col justify-between' : 'mb-6 cursor-pointer group'} `}
        >
            <div className={`flex items-start h-full ${about ? 'flex-col gap-3 md:gap-5' : 'flex-row gap-5 md:gap-11'}`}>
                <div className={`${faq ? 'hidden' : 'block'} ${about && index % 2 && 'sm:ml-5 lg:ml-13'}`}>
                    <span className="text-white">.0{index + 1}</span>
                </div>
                <div className={`w-full h-full flex flex-col ${about ? 'sm:min-h-60 md:h-70 justify-between ' : 'h-full'}`}>
                    <div className={`${about ? 'pb-4 sm:pb-0' : 'pb-4 md:pb-8'} group  ${about && index % 2 && 'sm:pl-5 lg:pl-13'}`}>
                        <div className={`flex items-center ${about ? 'gap-3 lg:-ml-5' : 'justify-between'}`}>
                            <div className={`w-1.5 h-1.5 bg-primary rounded-full ${about ? 'block' : 'hidden'}`}></div>
                            <h2 className={`text-[#F7F7F1] duration-500   ${faq && activeIndex !== index && 'md:group-hover:text-4xl'} ${faq ? 'text-lg md:text-2xl' : 'text-3xl lg:text-[56px]'} `}>{item.title}</h2>
                            <Image
                                src={faq ? ArrowIcon : PlusIcon}
                                alt="Accordion toggle icon"
                                className={` transition-transform duration-700  w-6 h-6 md:w-8 md:h-8 ${about ? 'hidden' : 'block'}  ${activeIndex !== index && faq ? '-rotate-135 group-hover:-rotate-90' : ''} ${activeIndex === index ? "rotate-45" : ""}`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden transition-[max-height]  ease-linear duration-700 ${!about ? (activeIndex === index ? "max-h-screen" : "max-h-0") : "max-h-screen"
                                }`}
                        >
                            <p className={`text-[#AAA] ${about ? 'max-w-110 py-3 md:py-6' : ' py-8'}`}>{faq ? item.firstContent : item.content}</p>
                            <p className="text-[#AAA]">{faq && item.secondContent}</p>
                            <ul className="flex flex-wrap gap-3">
                                {item.buttons && item.buttons.map((list, listIndex) => (
                                    <li
                                        key={listIndex}
                                        className="uppercase bg-[#F7F7F1] rounded-full px-4 py-2 leading-6"
                                    >
                                        {list}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`w-full h-[2px] duration-500 ${about && index % 2 ? 'hidden sm:block' : 'block'} ${about ? 'bg-[#AAA]' : 'bg-[#F7F7F1]'}`}>
                        {!about && <div className={`w-0 h-full duration-1000 ease-in-out ${!faq && 'group-hover:bg-red-500 group-hover:w-full'}`}></div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accordion
