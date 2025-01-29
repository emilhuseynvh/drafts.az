import FaqAccordion from '@/components/FaqAccordion';
import Hero from '@/components/Hero';
import OurWork from '@/components/OurWork';
import Services from '@/components/services';
import Testimonials from '@/components/Testimonials';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
  title: 'Saytların hazırlanması və IT həllər - Drafts.az',
  description:
    'Saytlarin hazirlanmasi, saytlarin yigilmasi, sayt sifarisi, saytlarin yaradilmasi en serfeli qiymetlerle. Cari saytlarda düzəlişlərin icrası. Vebsayt yigilmasi',
  keywords: [
    'saytlarin hazirlanmasi',
    'saytlarin yigilmasi',
    'veb sayt',
    'sayt hazirlamaq',
    'veb studiyalar',
    'sayt sifarisi',
    'website hazirlanmasi',
    'sayt sifarişi',
    'sifarişlə saytların yığılması',
    'vebsaytlarin hazirlanmasi',
    'vebsayt yigilmasi',
  ],
  authors: [{ name: 'Drafts' }],
  publisher: 'Drafts',
  openGraph: {
    siteName: 'Drafts.az',
    title: 'Saytların hazırlanması və IT həllər - Drafts.az',
    description:
      'Drafts korporativ və şəxsi veb saytların hazırlanması, internet layihələrin tərtibatı, sistem inteqrasiyası və digər İT həllər təklif edir. Geniş müştəri portfelimiz yüksək operativliyimizin nəticəsidir.',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: 'index, follow',
  generator:
    'saytlarin hazilanmasi,veb-sayt,veb-saytlarin hazilanmasi,Saytlarin yigilmasi',
};


const page = () => {
  const t = useTranslations();
  return (
    <div className='wrapper'>
      <Hero />
      <div className='flex justify-between items-start my-[60px] flex-col xs:flex-row'>
        <div className="flex items-center space-x-3 pb-7 xs:py-0">
          <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
          <span className="text-lg text-[#F7F7F1]">{t('header.list.about')}</span>
        </div>
        <div>
          <div className='max-w-3xs md:max-w-lg lg:max-w-[740px] w-full'>
            <p className='hidden md:block text-[#F7F7F1] mb-7'>{t('about.drafts_description_long')}</p>
            <p className='block md:hidden text-[#F7F7F1] mb-7'>{t('about.drafts_description_short')}</p>
            <Button width='132px'>
              <span className='z-10 text-sm sm:text-base group-hover:text-white hidden md:block'>{t('header.list.about')}</span>
              <span className='z-10 text-sm sm:text-base group-hover:text-white block md:hidden'>{t('about.more')}</span>
              <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:stroke-white' d="M16.9508 7.0498L7.05078 16.9498" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-white' d="M10 7L16.95 7.049L17 14" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Button>
          </div>
        </div>
      </div>
      <OurWork />
      <Services />
      <div>
        <FaqAccordion />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default page;