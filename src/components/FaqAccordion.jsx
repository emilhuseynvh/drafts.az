"use client"

import React, { useState } from 'react'
import Button from './ui/Button'
import Accordion from './ui/Accordion';

// interface AccordionItem {
//     title: string;
//     firstContent: string;
//     secondContent: string;
// }
const FaqAccordion = () => {

    const faqAccordion = [
        {
            title: 'Why should we choose Drafts over other web design agencies?',
            firstContent: 'Expert Team with Diverse Skills',
            secondContent: 'Our skilled team Graphic Design as well as UX/UI designers, frontend, and backend developers work together to deliver high-quality, functional, and visually stunning websites that perform exceptionally.'
        },
        {
            title: 'Will I get access to the source code if I use your service?',
            firstContent: "Yes, at Drafts, we believe in transparency and client ownership. When you use our services for website design or development, you will have full access to the source code upon project completion. Here's how it works:",
            secondContent: 'Yes, at Drafts, we believe in transparency and client ownership. When you use our services for website design or development, you will have full access to the source code upon project completion. Here\'s how it works:\n\n1. Full Ownership\n2. Custom Code Delivery\n3. Third-Party Tools and Licenses\n4. Long-Term Support'
        },
        {
            title: 'How do you ensure that the website reflects our brand identity?',
            firstContent: 'Meticulous and Collaborative Approach',
            secondContent: 'At Drafts, we take a meticulous and collaborative approach to ensure your website accurately reflects your brand identity. Here’s how we achieve this:\n\n1. In-Depth Brand Analysis\n2. Collaborative Strategy Sessions\n3. Custom Design Elements\n4. Consistency Across the Website\n5. User-Centric Approach\n6. Testing and Refinement'
        },
        {
            title: 'What kind of businesses do you usually work with?',
            firstContent: 'Diverse Range of Clients',
            secondContent: 'At Drafts, we collaborate with a diverse range of businesses across various industries, tailoring our services to meet the unique needs of each client. Some of the types of businesses we typically work with include:\n\n1. Small and Medium-Sized Enterprises (SMEs)\n2. Startups, Corporations and Enterprises\n3. E-Commerce Businesses\n4. Creative Agencies\n5. Nonprofits and Educational Institutions\n6. Health and Wellness\n7. Consulting and Professional Services\n8. Tech Companies'
        },
        {
            title: 'How do you measure the success of a website after launch?',
            firstContent: 'Performance and Goals Alignment',
            secondContent: 'At Drafts, we understand that a website\'s success is measured by its performance in achieving both business and user goals. Here are the key metrics and methods we use to assess a website’s success after launch:\n\n1. User Engagement Metrics\n2. Conversion Rates\n3. Traffic and SEO Performance\n4. Load Times and Technical Performance\n5. Feedback and User Testing'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='my-17.5'>
            <div className="flex flex-col xs:flex-row justify-between items-start mb-25">
                <div className="flex items-center space-x-3 mb-7 xs:mb-0">
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                    <span className="text-lg text-[#F7F7F1]">FAQ</span>
                </div>
                <div className="max-w-2xl">
                    <div className="flex justify-end md:gap-10 lg:gap-[80px]">
                        <div>
                            <div className="max-w-64 md:max-w-80 w-full flex flex-col items-start gap-7">
                                <p className="text-[#AAA] text-sm leading-6">
                                    Can't find what you're looking for? We're here to help.
                                    Contact us with any other questions!
                                </p>
                                <Button width="200px">
                                    <p className="z-10 group-hover:text-white">Contact us</p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.131 13.869C8.96102 12.699 8.07902 11.389 7.49302 10.06C7.37002 9.77897 7.44202 9.44997 7.65902 9.23297L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z"
                                            stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 3V9H21" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M21 3L15 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>

                                    <svg className="z-10 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path className="group-hover:stroke-white" d="M9.924 6.5H10C13.314 6.5 16 9.186 16 12.5V13.919V18.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M9.92001 6.5L5.00001 6.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M13 15.5L16 18.5L19 15.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div>
                    {
                        faqAccordion.map((item, index) => (
                            <Accordion key={index} item={item} index={index} handleFunction={handleToggle} activeIndex={activeIndex} faq={true} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqAccordion
