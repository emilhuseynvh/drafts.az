"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'
import Accordion from '../ui/Accordion';
import { AccordionItem } from '@/types/accordion-prop.dto';
import { useTranslations } from 'next-intl';

const FaqAccordion = () => {

    const t = useTranslations()
    const faqAccordion = t.raw('faq.faq_accordion')


    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='my-17.5'>
            <div className="flex flex-col xs:flex-row justify-between items-start mb-25">
                <div className="flex items-center space-x-3 mb-7 xs:mb-0">
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                    <span className="text-lg text-[#F7F7F1]">{t('faq.headline.title')}</span>
                </div>
                <div className="max-w-2xl">
                    <div className="flex justify-end md:gap-10 lg:gap-[80px]">
                        <div>
                            <div className="max-w-64 md:max-w-80 w-full flex flex-col items-start gap-7">
                                <p className="text-[#AAA] text-sm leading-6">
                                   {t('faq.headline.content')}
                                </p>
                                <Button width="200px">
                                    <p className="z-10 group-hover:text-white">{t('faq.headline.button')}</p>
                                    <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover:stroke-white' fillRule="evenodd" clipRule="evenodd"
                                            d="M10.131 13.869C8.96102 12.699 8.07902 11.389 7.49302 10.06C7.37002 9.77897 7.44202 9.44997 7.65902 9.23297L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z"
                                            stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className='group-hover:stroke-white' d="M15 3V9H21" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path className='group-hover:stroke-white' d="M21 3L15 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div>
                    {
                        faqAccordion.map((item: any, index: number) => (
                            <Accordion key={index} item={item} index={index} handleFunction={handleToggle} activeIndex={activeIndex} faq={true} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqAccordion
