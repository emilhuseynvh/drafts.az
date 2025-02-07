"use client";
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Radio from '../ui/Radio';
import { Options } from '@/types/options.dto';
import Cost from './Cost';
import { useEcommerceOns, useWebsiteOns } from '@/store/store';

const Ecommerce: React.FC = () => {
    const { addEcommerce, ecommerce, removeEcommerce } = useEcommerceOns();
    const [sum, setSum] = useState<number>(0);

    const handleClick = (item: Options, i: number) => {
        const test = ecommerce.some(web => web.title === item.title);

        let newWebsiteOns;
        if (!test) {
            addEcommerce(item);
            newWebsiteOns = [...ecommerce, item];
        } else {
            removeEcommerce(item);
            newWebsiteOns = ecommerce.filter(web => web.title !== item.title);
        }

        setSum(newWebsiteOns.reduce((total, item) => total + (item.price || 0), 0));
    };

    const t = useTranslations();
    const options: Options[] = t.raw('payment.ecommerce_add_ons.options');
    return (
        <div className='my-12.5'>
            <p>{t('payment.ecommerce_add_ons.title')}</p>
            <div className='w-full md:grid grid-cols-2 gap-x-17 mt-6'>
                {options.map((item: Options, i: number) => {
                    return (
                        <div key={i} className='flex justify-between'>
                            <p className='text-base font-normal'>{item.title}</p>
                            <div onClick={() => handleClick(item, i)} className='mb-5'>
                                <Radio />
                            </div>
                        </div>
                    );
                })}
            </div>
            <Cost value={`${sum} ₼`} />
        </div>
    );
};

export default Ecommerce;