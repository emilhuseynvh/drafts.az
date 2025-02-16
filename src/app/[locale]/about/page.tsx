"use client"
import AboutSlider from '@/components/About/AboutSlider'
import FindOut from '@/components/About/FindOut'
import HeadSection from '@/components/HeadSection'
import Accordion from '@/components/ui/Accordion'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = () => {
    const t = useTranslations()
    const aboutSection = [
        { "title": "Curiosity", "content": "We're the idea generators, riding waves of innovation. Challenging assumptions, we ignite curiosity and spark discovery." },
        { "title": "Communication", "content": "We are available to cater to your demands anytime so you do not have to worry about time zones. So wherever you are in the world, you will feel like we are right around the corner." },
        { "title": "Transparency", "content": "Everything we do at Drafts is done through a methodological approach because we strongly believe in transparency. We keep our clients in the loop regarding every step of the project." },
        { "title": "Flexibility", "content": "We stick to a fixed and budget-friendly. There are no hidden costs. Our team religiously follow deadlines and promises. Our end goal is to satisfy the demands of our clients." },
        { "title": "Complexity", "content": "We're fueled by the thrill of unraveling puzzles, turning knots of complexity into golden opportunities. With each challenge conquered, we redefine what's possible, transforming obstacles into stepping stones toward greatness." },
        { "title": "Deliverables", "content": "From strategy to reality, our unified team guides your project with unwavering expertise and flawless execution. With every step, we synchronize efforts, ensuring a journey that's as cohesive as it is exceptional." }
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
                <div className='w-full max-w-230 grid grid-cols-1 sm:grid-cols-2 items-center'>
                    {aboutSection.map((item, index) => (
                        <Accordion item={item} index={index} about={true} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default page
