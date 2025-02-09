"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Accordion from '../ui/Accordion'
import { useTranslations } from "next-intl";

const Services: React.FC = () => {
    const t = useTranslations()

    const accardionItems = t.raw('services.services_accordion')
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="py-17.5">
            <div className="flex flex-col xs:flex-row justify-between items-start">
                <div className="flex items-center space-x-3 mb-7 xs:mb-0">
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                    <span className="text-lg text-[#F7F7F1]">{t('services.services_headline.title')}</span>
                </div>
                <div className="max-w-2xl">
                    <div className="flex justify-end md:gap-10 lg:gap-[80px]">
                        <div className="md:w-[40%] lg:w-full">
                            <p className="hidden md:block  text-[#AAA] text-2xl leading-8">
                                {t('services.services_headline.first_headline')}
                            </p>
                        </div>
                        <div>
                            <div className="max-w-64 md:max-w-80 w-full flex flex-col items-start gap-7">
                                <p className="text-[#AAA] text-sm leading-6">
                                    {t('services.services_headline.second_headline')}
                                </p>
                                <Button width="200px">
                                    <p className="z-10 group-hover:text-white">{t('services.services_headline.services_all')}</p>
                                    <svg className="hidden md:block z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path className="group-hover:stroke-white" id="Path" d="M16.9508 16.9498L7.05078 7.0498" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path className="group-hover:stroke-white" id="Path_2" d="M16.9509 9.87695V16.95L9.87891 16.949" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </g>
                                    </svg>

                                    <svg className="z-10 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path className="group-hover:stroke-white" d="M9.924 6.5H10C13.314 6.5 16 9.186 16 12.5V13.919V18.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M9.92001 6.5L5.00001 6.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M13 15.5L16 18.5L19 15.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-full flex justify-between">
                <div></div>
                <div className="mt-20 max-w-2xl">
                    {accardionItems.map((item: any, index: number) => (
                        <Accordion
                            key={index}
                            item={item}
                            handleFunction={handleToggle}
                            activeIndex={activeIndex}
                            index={index}
                            title={item.title}
                            firstContent={item.content}
                            secondContent={''}
                            faq={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
