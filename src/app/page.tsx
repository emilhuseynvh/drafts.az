import Hero from '@/components/Hero';
import Services from '@/components/services';
import Button from '@/components/ui/Button';
import FaqAccordion from '../components/FaqAccordion'
import { Metadata } from 'next';
import React from 'react'

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
  return (
    <div className='wrapper'>
      <Hero />
      <div className='flex justify-between items-start my-[60px] flex-col xs:flex-row'>
        <div className="flex items-center space-x-3 pb-7 xs:py-0">
          <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
          <span className="text-lg text-[#F7F7F1]">About</span>
        </div>
        <div>
          <div className='max-w-3xs md:max-w-lg lg:max-w-[740px] w-full'>
            <p className='hidden md:block text-[#F7F7F1] mb-7'>Drafts is a platform that provides high-quality design and software development services to its clients. We work tirelessly to develop your projects and offer solutions tailored to your needs. At Drafts, we prioritize long-term collaborations and are committed to delivering innovative services that help our clients achieve their goals. Our mission is to ensure the success of your business by providing top-notch services.</p>
            <p className='block md:hidden text-[#F7F7F1] mb-7'>Drafts offers high-quality design and software development services, tailored to your needs. We focus on long-term partnerships, delivering innovative solutions to help your business succeed.</p>
            <Button width='132px'>
              <span className='z-10 text-sm sm:text-base group-hover:text-white hidden md:block'>About us</span>
              <span className='z-10 text-sm sm:text-base group-hover:text-white block md:hidden'>More</span>
              <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:stroke-white' d="M16.9508 7.0498L7.05078 16.9498" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-white' d="M10 7L16.95 7.049L17 14" stroke="#111213" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Button>
          </div>
        </div>
      </div>
      <Services />
      <div>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default page