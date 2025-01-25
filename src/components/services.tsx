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
            <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                    <span className="text-lg text-[#F7F7F1]">Services</span>
                </div>
                <div className="max-w-2xl">
                    <div className="flex gap-[80px]">
                        <div>
                            <p className="text-[#AAA] text-2xl leading-8">
                                How we take your business to the next level
                            </p>
                        </div>
                        <div>
                            <div className="max-w-80 w-full flex flex-col items-start gap-7">
                                <p className="text-[#AAA] text-xs leading-6">
                                    We are an agency distinguished by our professionalism, and we are
                                    committed to helping you take your business to the next level.
                                </p>
                                <Button>
                                    <p className="z-10 group-hover:text-white">See all services</p>
                                    <svg className="z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:stroke-white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10.131 13.869C8.96102 12.699 8.07902 11.389 7.49302 10.06C7.37002 9.77897 7.44202 9.44997 7.65902 9.23297L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z"
                                            stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M15 3V9H21" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path className="group-hover:stroke-white" d="M21 3L15 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        {servicesAccordion.map((item, index) => (
                            <div
                                onClick={() => handleToggle(index)}
                                className="mb-6 cursor-pointer group"
                                key={index}
                            >
                                <div className="flex items-start gap-11">
                                    <div>
                                        <span className="text-primary">.0{index + 1}</span>
                                    </div>
                                    <div className="w-full">
                                        <div className="pb-8">
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-[#F7F7F1] text-[56px]">{item.title}</h2>
                                                <Image
                                                    src={PlusIcon}
                                                    alt="Accordion toggle icon"
                                                    className={`transition-transform duration-700 origin-top-left ${activeIndex === index ? "rotate-45" : ""
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
        </div>
    );
};

export default Services;
