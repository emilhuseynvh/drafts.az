import React from 'react';
import Input from '../ui/Input';
import { useTranslations } from 'next-intl';
import { Options } from '@/types/options.dto';
import { useLogoDesign } from '@/store/store';
import Cost from './Cost';

const LogoDesign: React.FC = () => {
    const t = useTranslations();
    const options = t.raw('payment.logo_design.options');
    const { logo, toggle } = useLogoDesign();
    return (
        <div>
            <p className='mt-9 text-sm font-medium'>{t('payment.design_complexity.title')}</p>
            <div className='flex justify-between mt-6 mb-0.5'>
                {options.map((item: Options, i: number) => {
                    return <p key={i}>{item.title}</p>;
                })}
            </div>
            <Input value={logo} setValue={toggle} inpValue={3} max={2} min={0} step={1} />
            <Cost value={`${logo * 100} ₼`} />
        </div>
    );
};

export default LogoDesign;