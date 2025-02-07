import { useTranslations } from 'next-intl';
import React from 'react';
import Button from '../ui/Button';
import { Options } from '@/types/options.dto';
import { useDesignStore, useEcommerceOns, useLogoDesign, usePageStore, useSearchEngine, useWebsiteOns } from '@/store/store';

const Summary = () => {
    const t = useTranslations();
    const { page } = usePageStore();
    const { design } = useDesignStore();
    const { websiteOns } = useWebsiteOns();
    const { ecommerce } = useEcommerceOns();
    const { logo } = useLogoDesign();
    const { searchEngine } = useSearchEngine();

    const calcPage = (design: number = 1, page: number = 1) => {
        return design * 100 * page;
    };
    const calc = (args: Options[]) => {
        const price = args.reduce((total: number, item: Options) => {
            return total += item.price!;
        }, 0);
        return price;
    };
    const pagePrice = calcPage(design, page);
    const websitePrice = calc(websiteOns);
    const ecommersePrice = calc(ecommerce);
    const logoPrice = calcPage(logo);
    const searchPrice = calc(searchEngine);
    const common = pagePrice + websitePrice + ecommersePrice + logoPrice + searchPrice
    return (
        <div className='h-full'>
            <div className='mt-12.5 px-6 py-9 rounded-xl bg-white sticky top-5'>
                <div className='flex justify-between my-2.5'>
                    <p className='font-normal text-base text-primary-bg'>{t('payment.summary.static_pages')}</p>
                    <p className='font-bold text-xl'>{pagePrice} ₼</p>
                </div>
                <div className='flex justify-between my-2.5'>
                    <p className='font-normal text-base text-primary-bg'>{t('payment.summary.extras')}</p>
                    <p className='font-bold text-xl'>{websitePrice} ₼</p>
                </div>
                <div className='flex justify-between my-2.5'>
                    <p className='font-normal text-base text-primary-bg'>{t('payment.summary.SEO')}</p>
                    <p className='font-bold text-xl'>{searchPrice} ₼</p>
                </div>
                <div className='flex justify-between my-2.5'>
                    <p className='font-normal text-base text-primary-bg'>{t('payment.summary.E-commerce')}</p>
                    <p className='font-bold text-xl'>{ecommersePrice} ₼</p>
                </div>
                <div className='flex justify-between my-2.5'>
                    <p className='font-normal text-base text-primary-bg'>{t('payment.summary.logo_design')}</p>
                    <p className='font-bold text-xl'>{logoPrice} ₼</p>
                </div>
                <hr className='mt-6' />
                <div className='mt-6 flex justify-between'>
                    <p className='text-xl font-semibold'>Total</p>
                    <p className='text-lg font-bold'>{common} ₼</p>
                </div>
                <div className='flex justify-center mt-6'>
                    <Button bgColor='#E77D7E'>
                        <p className='text-primary-white z-10'>Order Your Site Now</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Summary;