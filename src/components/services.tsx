"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import CallIcon from "../../public/icons/Phone, Call.svg";
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
                                    See all services
                                    <Image src={CallIcon} alt="Drafts.az call services icon" />
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
                                        <span className="text-[#DB3D3E]">.0{index + 1}</span>
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
