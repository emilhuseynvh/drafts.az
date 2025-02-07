'use client';
import Cost from '@/components/Payment/Cost';
import Ecommerce from '@/components/Payment/Ecommerce';
import LogoDesign from '@/components/Payment/LogoDesign';
import SearchEngine from '@/components/Payment/SearchEngine';
import Summary from '@/components/Payment/Summary';
import Website from '@/components/Payment/Website';
import Input from '@/components/ui/Input';
import { useDesignStore, usePageStore, useWebsiteOns } from '@/store/store';
import { Options } from '@/types/options.dto';
import { useTranslations } from 'next-intl';
import React from 'react';


const Page: React.FC = () => {
    const { design, toggle } = useDesignStore();
    const { page, toggle: pageToggle } = usePageStore();

    const t = useTranslations();
    const options: Options[] = t.raw('payment.design_complexity.options');

    return (
        <div className='wrapper mt-30 md:flex justify-between'>
            <div className='md:w-[63%] w-full text-primary-white font-normal'>
                <h1 className='text-[46px]'>{t('payment.title')}</h1>
                <div className='mt-9 mb-12.5'>
                    <p className='text-sm font-medium'>{t('payment.page.title')}</p>
                    <p className='mt-9 text-sm font-medium'>{t('payment.page.desc')}</p>
                    <div className='flex gap-3 mt-6 w-full items-center'>
                        <p className='size-6 bg-primary flex justify-center items-center rounded-md text-xs font-medium'>1</p>
                        <Input value={page} setValue={pageToggle} inpValue={3} max={20} min={1} step={1} />
                        <p className='size-6 bg-primary flex justify-center items-center rounded-md text-xs font-medium'>20</p>
                    </div>
                    <p className='mt-9 text-sm font-medium'>{t('payment.design_complexity.title')}</p>
                    <div className='flex justify-between mt-6 mb-0.5'>
                        {options.map((item: Options, i: number) => {
                            return <p key={i}>{item.title}</p>;
                        })}
                    </div>
                    <Input value={design} setValue={toggle} inpValue={3} max={3} min={1} step={1} />
                    <Cost value={page + ' ' + t('payment.pages') + ` / ${page * design * 100} ₼`} />
                </div>
                <Website />
                <SearchEngine />
                <Ecommerce />
                <LogoDesign />
            </div>
            <div className='md:w-[30%]'>
                <Summary />
            </div>
        </div>
    );
};

export default Page;