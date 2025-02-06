import Input from '@/components/ui/Input';
import { useTranslations } from 'next-intl';
import React from 'react';

const page: React.FC = () => {
    const t = useTranslations();
    return (
        <div className='wrapper mt-30'>
            <div className='w-[70%] text-primary-white font-normal'>
                <h1 className='text-[46px]'>{t('payment.title')}</h1>
                <div className='mt-9'>
                    <p className='text-sm font-medium'>{t('payment.page.title')}</p>
                    <p className='mt-9 text-sm font-medium'>{t('payment.page.desc')}</p>
                    <div className='flex gap-3 mt-6 w-full items-center'>
                        <p className='size-6 bg-primary flex justify-center items-center rounded-md text-xs font-medium'>1</p>
                        <Input inpValue={3} max={20} min={1} step={1} />
                        <p className='size-6 bg-primary flex justify-center items-center rounded-md text-xs font-medium'>20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;