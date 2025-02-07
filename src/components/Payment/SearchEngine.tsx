"use client";
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Radio from '../ui/Radio';
import { Options } from '@/types/options.dto';
import Cost from './Cost';
import { useSearchEngine } from '@/store/store';
import Checkbox from '../ui/Checkbox';

const Website: React.FC = () => {
    const { addSearchEngine, searchEngine, removeSearchEngine } = useSearchEngine();
    const [sum, setSum] = useState<number>(0);

    const handleClick = (item: Options, i: number) => {
        const test = searchEngine.some(web => web.title === item.title);

        let newsearchEngine;
        if (!test) {
            addSearchEngine(item);
            newsearchEngine = [...searchEngine, item];
        } else {
            removeSearchEngine(item);
            newsearchEngine = searchEngine.filter(web => web.title !== item.title);
        }

        setSum(newsearchEngine.reduce((total, item) => total + (item.price || 0), 0));
    };

    const t = useTranslations();
    const options: Options[] = t.raw('payment.search_engine_optimization');
    return (
        <div className='my-12.5'>
            <p>{t('payment.website_add_ons.title')}</p>
            <div className='w-full md:grid grid-cols-2 gap-x-17 mt-6'>
                {options.map((item: Options, i: number) => {
                    return (
                        <div key={i} className='flex justify-between'>
                            <p className='text-base font-normal'>{item.title}</p>
                            <div onClick={() => handleClick(item, i)} className='mb-5'>
                                <Checkbox />
                            </div>
                        </div>
                    );
                })}
            </div>
            <Cost value={`${sum} ₼`} />
        </div>
    );
};

export default Website;