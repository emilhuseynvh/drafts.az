'use client'
import Image from 'next/image'
import arrowIcon from '../../public/icons/Arrow.svg'
import DottedText from './DottedText'

const HeadSection = ({ title, firstHeadline, secondHeadline, contact }: any) => {
    return (
        <div>
            <div className='flex  justify-between md:justify-normal gap-10 items-start md:items-end md:mb-6'>
                <DottedText title={title} />
                <div className='text-end md:text-start md:text-5xl text-primary font-medium'>
                    <p>{firstHeadline}</p>
                    <div className='flex leading-7'>
                        <p className='md:hidden block'>{secondHeadline}</p>
                        {contact && <div className='h-6 w-6 md:w-14 md:h-14 rounded-sm md:rounded-xl bg-white flex md:hidden justify-center items-center ml-4'>
                            <Image className='rotate-135' src={arrowIcon} alt='Drafts.az contact page arrow icon' width={32} height={32} />
                        </div>}
                    </div>
                </div>
            </div>
            <div className=' text-primary font-medium hidden md:flex'>
                <h2 className=' md:text-5xl text-end md:text-start'>{secondHeadline}</h2>
                {contact && <div className='h-6 w-6 md:w-14 md:h-14 rounded-sm md:rounded-xl bg-white flex justify-center items-center ml-6'>
                    <Image className='rotate-135' src={arrowIcon} alt='Drafts.az contact page arrow icon' width={32} height={32} />
                </div>}
            </div>
        </div>
    )
}

export default HeadSection
