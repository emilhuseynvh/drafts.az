"use client"
import AboutSlider from '@/components/About/AboutSlider'
import FindOut from '@/components/About/FindOut'
import HeadSection from '@/components/HeadSection'
import Accordion from '@/components/ui/Accordion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const t = useTranslations()
    const aboutSection = t.raw("aboutSection.about_us") || []
    const [selectedMember, setSelectedMember] = useState({ description: "Ajdars description", img: "" })
    const aboutTeam = [
        { "name": "Ibrahim Hasanzada", "position": "Developer", "motto": "Work smart, not hard", "github": "link", "linkedin": "link", "instagram": "link", "img": "", "description": "Ibrahims description" },
        { "name": "Emil Huseynov", "position": "Developer", "motto": "Apasny", "github": "link", "linkedin": "link", "instagram": "link", "img": "", "description": "Emils description" },
        { "name": "Ajdar Khalbiyev", "position": "UX/UI Designer", "motto": "Praise O poet!", "behance": "link", "linkedin": "link", "instagram": "link", "img": "", "description": "Ajdars description" },
        { "name": "Sanan Mammadov", "position": "UX/UI Designer", "motto": "Step by Step, Frame by Frame", "behance": "link", "linkedin": "link", "instagram": "link", "img": "", "description": "Sanans description" },
        { "name": "Musa Azizov", "position": "Visual designer", "motto": "lorem ipsum", "behance": "link", "linkedin": "link", "instagram": "link", "img": "", "description": "Musas description" },
    ]
    return (
        <div className='wrapper mt-25'>
            <div className='pb-13 border-b border-b-[#909090]'>
                <HeadSection
                    title={t("aboutSection.title")}
                    firstHeadline={t("aboutSection.first_headline")}
                    secondHeadline={t("aboutSection.second_headline")}
                />
            </div>
            <div className='mt-25 flex flex-col md:flex-row gap-7 md:gap-40  items-start'>
                <div className="flex items-start space-x-3 pb-7 xs:py-0 ">
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1] md:block hidden"></div>
                    <span className="md:text-lg text-[#F7F7F1] md:max-w-48 w-full">Find out who we are, what  we’re all about & meet the team</span>
                </div>
                <div className='flex flex-col gap-10 w-full'>
                    {t.raw("aboutSection.sections").map((item: any, index: number) => (
                        <FindOut key={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
            <div className='mt-25'>
                <AboutSlider />
            </div>
            <div className='flex justify-end'>
                <div className='w-full max-w-230 gap-y-10 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 items-center'>
                    {aboutSection.map((item, index) => (
                        <Accordion key={index} item={item} index={index} about={true} />
                    ))}
                </div>
            </div>
            <div className='mt-25'>
                <div className='text-start lg:text-end'>
                    <h2 className='uppercase text-8xl text-primary font-extrabold'>Meet our team</h2>
                </div>
                <div className='mt-15'>
                    <div className='flex gap-6 w-full'>
                        <div className='w-75'>
                            <div>
                                {/* // <Image src={`/img/`} alt='Drafts.az team image' width={200} height={200} /> */}
                                <div className='w-72 h-75 bg-primary'></div>
                                <div>
                                    <p className='text-white'>{selectedMember.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full group'>
                            <ul className='w-full '>
                                {aboutTeam.map((item, index) => (
                                    <li
                                        onMouseEnter={() => setSelectedMember({ description: item.description, img: item.img })}
                                        onMouseLeave={() => setSelectedMember({ description: "Ajdars description", img: "" })
                                        }
                                        key={index} className='w-full py-6 flex justify-between border-y border-y-white'>
                                        <div className='grid grid-cols-2 lg:grid-cols-3 w-[70%]'>
                                            <p className={`text-lg text-[#909090] ${selectedMember.description == item.description && 'group-hover:text-white'}`}>{item.name}</p>
                                            <p className={`text-lg text-[#909090] ${selectedMember.description == item.description && 'group-hover:text-white'}`}>{item.position}</p>
                                            <p className={`text-[#909090] text-lg hidden lg:block ${selectedMember.description == item.description && 'group-hover:text-white'}`}>{item.motto}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <Link href={''}>
                                                {item.behance ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M19.248 10.9882H22.9069" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M17.9104 17.498H17.9118" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M23.942 17.3243H17.9102V16.9668C17.9102 15.2172 19.3285 13.7988 21.0781 13.7988V13.7988C22.8278 13.7988 24.2461 15.2172 24.2461 16.9668V17.0202C24.2454 17.1878 24.1097 17.3236 23.942 17.3243V17.3243Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M17.9102 17.3242V17.499C17.9099 18.8301 18.7103 20.0307 19.9391 20.5424C21.1679 21.0541 22.5839 20.7765 23.5285 19.8386" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M8.16211 15.3332V11.3315C8.16211 11.1473 8.31141 10.998 8.49558 10.998H11.3314" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M12.1678 15.333C13.6755 15.333 14.8981 16.5545 14.8996 18.0621V18.0621C14.8996 18.7863 14.6119 19.4808 14.0998 19.9929C13.5878 20.5049 12.8933 20.7926 12.1691 20.7926H8.34885C8.24614 20.7926 8.16211 20.6432 8.16211 20.4591V15.333H12.1678Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M22.6705 28.0051H9.33165C6.3849 28.0051 3.99609 25.6163 3.99609 22.6696V9.33067C3.99609 6.38393 6.3849 3.99512 9.33165 3.99512H22.6705C25.6173 3.99512 28.0061 6.38393 28.0061 9.33067V22.6696C28.0061 25.6163 25.6173 28.0051 22.6705 28.0051Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M11.332 10.999C12.5288 10.9998 13.4989 11.9698 13.4996 13.1666V13.1666C13.4981 14.3629 12.5283 15.3321 11.332 15.3328" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M7.2 7.86667C5.33333 9.86667 4 12.6667 4 16.2667C4 18.9333 4.93333 21.4667 6.4 23.4667C8.13333 25.7333 10.6667 27.0667 12 27.6V26.6667C12 26.6667 12 24.5333 13.2 22.6667C10.5333 22.5333 8.4 20 8.4 17.0667C8.4 16 8.8 15.0667 9.46667 14.2667L9.6 11.7333C9.6 11.0667 10.2667 10.6667 10.9333 10.8L13.7333 11.8667C14.5333 11.7333 15.3333 11.6 16.2667 11.6C17.2 11.6 18 11.7333 18.8 11.8667L21.2 10.6667C21.8667 10.4 22.5333 10.9333 22.5333 11.6L22.6667 14.1333C23.3333 14.9333 23.7333 16 23.7333 16.9333C23.7333 19.8667 21.6 22.2667 18.9333 22.5333C20.1333 24.4 20.1333 26.5333 20.1333 26.5333V27.4667C21.4667 26.9333 24 25.6 25.7333 23.3333C27.2 21.4667 28.1333 18.8 28.1333 16.1333C28.1333 12.5333 26.8 9.73333 24.9333 7.73333C22.4 5.2 18.9333 4 16 4C13.0667 4 9.6 5.2 7.2 7.86667V7.86667Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                }
                                            </Link>
                                            <Link href={''}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M10 4H22.0053C25.316 4 28 6.684 28 9.99467V22.0067C28 25.316 25.316 28 22.0053 28H9.99467C6.684 28 4 25.316 4 22.0053V10C4 6.68667 6.68667 4 10 4V4Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M10.8268 14.7998V21.9998" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M15.625 21.9998V17.7998C15.625 16.1425 16.9677 14.7998 18.625 14.7998V14.7998C20.2823 14.7998 21.625 16.1425 21.625 17.7998V21.9998" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M10.8235 10.4507C10.6582 10.4507 10.5235 10.5853 10.5249 10.7507C10.5249 10.916 10.6595 11.0507 10.8249 11.0507C10.9902 11.0507 11.1249 10.916 11.1249 10.7507C11.1249 10.584 10.9902 10.4507 10.8235 10.4507" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                            <Link href={''}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} fillRule="evenodd" clipRule="evenodd" d="M9.99467 4H22.0067C25.316 4 28 6.68267 28 9.99467V22.0067C28 25.316 25.3173 28 22.0053 28H9.99467C6.684 28 4 25.3173 4 22.0053V9.99467C4 6.684 6.68267 4 9.99467 4V4Z" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M22.5996 8.95104C22.3516 8.95237 22.1503 9.15371 22.1503 9.40171C22.1503 9.64971 22.3529 9.85104 22.6009 9.85104C22.8489 9.85104 23.0503 9.64971 23.0503 9.40171C23.0516 9.15237 22.8489 8.95104 22.5996 8.95104" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className={`${selectedMember.description == item.description && 'stroke-[#909090] group-hover:stroke-white'}`} d="M19.3933 12.6061C21.2679 14.4806 21.2679 17.5198 19.3933 19.3943C17.5188 21.2688 14.4796 21.2688 12.6051 19.3943C10.7306 17.5198 10.7306 14.4806 12.6051 12.6061C14.4796 10.7316 17.5188 10.7316 19.3933 12.6061" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
