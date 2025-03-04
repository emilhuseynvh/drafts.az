"use client"
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import language from './../../public/icons/lang.svg';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/i18n/routing';
import Link from 'next/link';

interface HamgurgerProps {
    flag: boolean
    setFlag: Dispatch<SetStateAction<boolean>>
}

const HamburgerMenu: React.FC<HamgurgerProps> = ({ flag, setFlag }) => {
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const changeLanguage = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
        const newPath = pathWithoutLocale || '/';
        router.replace(newPath, { locale: newLocale });
    };

    return (
        <div className={`bg-primary-bg ${flag ? 'right-0' : '-right-full'} duration-500 w-full top-17 h-screen fixed z-50 md:hidden flex justify-end px-4 py-7`}>
            <div>
                <ul className='text-end text-primary-white text-4xl'>
                    <li className='my-3.5 font-light'><Link href={`/${currentLocale}`}>{t('header.list.home_page')}</Link></li>
                    <li className='my-3.5 font-light'><Link href={`/${currentLocale}/about`}>{t('header.list.about')}</Link></li>
                    <li className='my-3.5 font-light'><Link href={`/${currentLocale}/contact`}>{t('header.list.contact')}</Link></li>
                </ul>
                <div>
                    <div className='flex gap-3 mt-10 py-5 border-t border-[#AAA]'>
                        <Image className='size-6' src={language} alt='Header menu language switchment icon' />
                        <p className='text-primary-white text-sm'>Dil Seçimi</p>
                    </div>
                    <div className='flex gap-2.5'>
                        <button
                            onClick={() => changeLanguage('az')}
                            className={`${currentLocale === 'az' ? 'border-[#DB3D3E] text-[#DB3D3E]' : 'border-[#DDD]'} py-1.5 px-3.5 border-2 text-sm font-medium rounded-[10px] bg-white`}
                        >
                            Aze
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`${currentLocale === 'en' ? 'border-[#DB3D3E] text-[#DB3D3E]' : 'border-[#DDD]'} py-1.5 px-3.5 border-2 text-sm font-medium rounded-[10px] bg-white`}
                        >
                            Eng
                        </button>
                        <button
                            onClick={() => changeLanguage('ru')}
                            className={`${currentLocale === 'ru' ? 'border-[#DB3D3E] text-[#DB3D3E]' : 'border-[#DDD]'} py-1.5 px-3.5 border-2 text-sm font-medium rounded-[10px] bg-white`}
                        >
                            Rus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;