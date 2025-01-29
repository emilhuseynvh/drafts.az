import Image from 'next/image'
import React from 'react'
import PlusIcon from "../../../public/icons/Plus.svg";
import ArrowIcon from "../../../public/icons/Group.svg";
import { AccordionItem } from '@/types/accordion-prop.dto';

interface AccordionProps extends AccordionItem {
    item: {
        title: string;
        firstContent: string;
        secondContent: string;
        content?: string;
        buttons?: string[];
    },
    handleFunction: (index: number) => void,
    activeIndex: number | null,
    index: number,
    faq: boolean
}
const Accordion: React.FC<AccordionProps> = ({ item, handleFunction, activeIndex, index, faq }) => {

    return (
        <div
            onClick={() => handleFunction(index)}
            className="mb-6 cursor-pointer group"
        >
            <div className="flex items-start gap-5 md:gap-11">
                <div className={`${faq ? 'hidden' : 'block'}`}>
                    <span className="text-white">.0{index + 1}</span>
                </div>
                <div className="w-full">
                    <div className="pb-4 md:pb-8 group">
                        <div className="flex justify-between items-center">
                            <h2 className={`text-[#F7F7F1] duration-500 ${faq && activeIndex !== index && 'md:group-hover:text-4xl'} ${faq ? 'text-lg md:text-2xl' : 'text-3xl md:text-[56px]'} `}>{item.title}</h2>
                            <Image
                                src={faq ? ArrowIcon : PlusIcon}
                                alt="Accordion toggle icon"
                                className={` transition-transform duration-700  w-6 h-6 md:w-8 md:h-8  ${activeIndex !== index && faq ? '-rotate-135 group-hover:-rotate-90' : ''} ${activeIndex === index ? "rotate-45" : ""}`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden transition-[max-height]  ease-linear duration-700 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                                }`}
                        >
                            <p className="text-[#AAA] py-8">{faq ? item.firstContent : item.content}</p>
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
                    <div className="w-full h-[2px] bg-[#F7F7F1]  duration-500">
                        <div className={`w-0 h-full duration-1000 ease-in-out ${!faq && 'group-hover:bg-red-500 group-hover:w-full'}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
