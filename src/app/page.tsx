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
    <div></div>
  )
}

export default page