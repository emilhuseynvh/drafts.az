"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import PlusIcon from "../../public/icons/Plus.svg";
import Image from "next/image";

interface AccordionItem {
    title: string;
    content: string;
    buttons: string[];
}

const Services: React.FC = () => {
    const servicesAccordion: AccordionItem[] = [
        {
            title: "Graphic Design",
            content:
                "Creative and user-centric designs ensure your projects stand out and leave a lasting impression. Our experienced graphic designers provide unique and functional solutions tailored to your needs.",
            buttons: [
                "Logo",
                "Branding",
                "Poster",
                "SMM Poster",
                "Icons",
                "Product Poster",
                "Web Design",
            ],
        },
        {
            title: "UX/UI Design",
            content:
                "User-centric design plays a key role in providing a unique user experience. Our UX/UI designers do their magic to provide a unique and cost-effective web and mobile presence.",
            buttons: [
                "User Interface",
                "User Experience",
                "Web",
                "Landing Page",
                "Mobile App",
                "Design System",
            ],
        },
        {
            title: "Front-end Developer",
            content:
                "Our professional frontend developer team works together to create high-quality, functional, visually appealing, and high-performing websites.",
            buttons: [
                "JavaScript",
                "React",
                "Next.js",
                "Vue.js",
                "Angular",
                "TypeScript",
                "HTML",
                "CSS",
            ],
        },
        {
            title: "Back-end Developer",
            content:
                "By building robust systems and providing reliable solutions with modern technologies, our team of professional backend developers ensures that websites run smoothly and perform at a high level.",
            buttons: ["Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "SQL"],
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="mt-36">
<<<<<<< HEAD
            <div className="flex flex-col xs:flex-row justify-between items-start">
                <div className="flex items-center space-x-3 mb-7 xs:mb-0">
=======
            <div className="container flex justify-between items-start">
                <div className="flex items-center space-x-3">
>>>>>>> parent of 10fb255 (hero section added)
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                    <span className="text-lg text-[#F7F7F1]">Services</span>
                </div>
                <div className="max-w-2xl">
                    <div className="flex justify-end md:gap-10 lg:gap-[80px]">
                        <div className="md:w-[40%] lg:w-full">
                            <p className="hidden md:block  text-[#AAA] text-2xl leading-8">
                                How we take your business to the next level
                            </p>
                        </div>
                        <div>
                            <div className="max-w-64 md:max-w-80 w-full flex flex-col items-start gap-7">
                                <p className="text-[#AAA] text-sm leading-6">
                                    We are an agency distinguished by our professionalism, and we are
                                    committed to helping you take your business to the next level.
                                </p>
                                <Button width="200px">
                                    <p className="z-10 group-hover:text-white">See all services</p>
                                    <svg className="hidden md:block z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path className="group-hover:stroke-white" id="Path" d="M16.9508 16.9498L7.05078 7.0498" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path className="group-hover:stroke-white" id="Path_2" d="M16.9509 9.87695V16.95L9.87891 16.949" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </g>
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
            <div className="w-full flex justify-between">
                <div></div>
                <div className="mt-20 max-w-2xl">
                    {servicesAccordion.map((item, index) => (
                        <div
                            onClick={() => handleToggle(index)}
                            className="mb-6 cursor-pointer group"
                            key={index}
                        >
                            <div className="flex items-start gap-5 md:gap-11">
                                <div>
                                    <span className="text-white">.0{index + 1}</span>
                                </div>
                                <div className="w-full">
                                    <div className="pb-8">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-[#F7F7F1]  text-3xl md:text-[56px]">{item.title}</h2>
                                            <Image
                                                src={PlusIcon}
                                                alt="Accordion toggle icon"
                                                className={`transition-transform duration-700 origin-top-left w-5 h-5 md:w-8 md:h-8 ${activeIndex === index ? "rotate-45" : ""
                                                    }`}
                                            />
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-[max-height]  ease-linear duration-700 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-[#AAA] py-8">{item.content}</p>
                                            <ul className="flex flex-wrap gap-3">
                                                {item.buttons.map((list, listIndex) => (
                                                    <li
                                                        key={listIndex}
                                                        className="uppercase bg-[#F7F7F1] rounded-full px-4 py-2 leading-6"
                                                    >
                                                        {list}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full h-[2px] bg-[#F7F7F1]  duration-500">
                                        <div className="w-0 h-full duration-1000 ease-in-out group-hover:bg-red-500 group-hover:w-full "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
