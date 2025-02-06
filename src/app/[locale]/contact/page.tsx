import Image from 'next/image'
import React from 'react'
import arrowIcon from '../../../../public/icons/Arrow.svg'
import Button from '@/components/ui/Button'
const page = () => {
    return (
        <div className='wrapper mt-25'>
            <div className='pb-13 border-b border-b-[#909090]'>
                <div className='md:flex gap-10 items-end mb-6'>
                    <div className="flex items-center space-x-3 pb-7 xs:py-0">
                        <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                        <span className="text-lg text-[#F7F7F1]">Contact</span>
                    </div>
                    <h2 className='text-end md:text-start text-3xl md:text-5xl text-white'>Pleasure to connect</h2>
                </div>
                <div className='flex items-center text-white'>
                    <h2 className='text-3xl md:text-5xl'>with you</h2>
                    <div className='h-6 w-6 md:w-14 md:h-14 rounded-sm md:rounded-xl bg-white flex justify-center items-center ml-6'>
                        <Image src={arrowIcon} width={32} height={32} alt='Drafts.az contact page arrow icon' className='rotate-135 w-4 h-4 md:w-8 md:h-8' />
                    </div>
                </div>
            </div>
            <div className='mt-25 flex flex-col md:flex-row justify-between gap-5'>
                <form className="!max-w-xl w-full">
                    <div className="mb-6 flex flex-col md:flex-row gap-6">
                        <input type="email" className="bg-[#F7F7F1] border border-[#AAA] text-[#909090] text-sm rounded-xl  block w-full py-3 px-4" placeholder="Name" required />
                        <input type="tel" className="bg-[#F7F7F1] border border-[#AAA] text-[#909090] text-sm rounded-xl  block w-full py-3 px-4" placeholder='Phone number' required />
                    </div>
                    <div className='mb-6'>
                        <input type="email" className="bg-[#F7F7F1] border border-[#AAA] text-[#909090] text-sm rounded-xl  block w-full py-3 px-4" placeholder='Email adress' required />
                    </div>
                    <div className='mb-4'>
                        <textarea className="bg-[#F7F7F1] border border-[#AAA] text-[#909090] text-sm rounded-xl  block w-full py-3 px-4" rows={9} placeholder='Tell about your project'></textarea>
                    </div>
                    <div className='mb-6'>
                        <p className='font-medium text-[#909090]'>By submiting this form I accept the Privacy Policy of this site.</p>
                    </div>
                    <div className='w-full xs:w-[271px]'>
                        <Button bgColor='white' width='100%' >
                            <span className='z-10 font-medium text-[#151515] group-hover:text-white'>Send message</span>
                        </Button>
                    </div>
                </form>
                <div className='w-full max-w-124'>
                    <div className='mb-8'>
                        <div className='mb-6'>
                            <p className='text-xl md:text-2xl font-medium leading-8 text-[#AAA]'>For general questions, please complete the form to reach us. If you already have project specifics, visit our project planner for a detailed step-by-step approach.</p>
                        </div>
                        <div className='w-full xs:w-[271px]'>
                            <Button bgColor='white'>Go to planner</Button>
                        </div>
                    </div>
                    <div className='flex font-medium'>
                        <p className='text-[#888885]'>Or write to us!</p>
                        <p className='text-[#F7F7F1] ml-6 '>info@drafts.az</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page