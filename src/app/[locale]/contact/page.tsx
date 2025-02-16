'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import * as yup from 'yup'
import { Field, Formik, Form } from 'formik'
import HeadSection from '@/components/HeadSection'
import plannerIcon from '../../../../public/icons/planner.svg'

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required").matches(/^\+994[1-9]\d{1}\d{7}$/, "Phone number must be in the format +994XXXXXXXXX"),
    area: yup.string().required("Message is required")
});



const Page = () => {
    const t = useTranslations();
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [text, setText] = useState<string>("")
    useEffect(() => {
        const updateText = () => setText(window.innerWidth > 768 ? t("contact.planner.content_desktop") : t("contact.planner.content_mobile"))
        updateText()
        window.addEventListener("resize", updateText)
        return () => window.removeEventListener("resize", updateText)
    }, [t])
    return (
        <div className='wrapper mt-19 md:mt-25'>
            <div className='pb-7 md:pb-13 border-b border-b-[#909090]'>
                <HeadSection
                    title={t("contact.title")}
                    firstHeadline={t("contact.first_headline")}
                    secondHeadline={t("contact.second_headline")}
                    contact={true}
                />
            </div>
            <div className='mt-25 flex flex-col md:flex-row justify-between gap-5'>
                <div className='mb-6 block md:hidden'>
                    <p className='text-[#F7F7F1]'>{t("contact.form.content")}</p>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        area: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values: contactForm) => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (

                        <Form className="!max-w-xl w-full">
                            <div className="mb-6 flex flex-col md:flex-row gap-6">
                                <div className="w-full">
                                    <Field name="name" type="text" onFocus={() => setFocusedField('name')} className={`bg-transparent border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} outline-none  text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.name")} />
                                    {errors.name ? <p className="text-primary text-xs">{errors.name}</p> : null}
                                </div>
                                <div className="w-full">
                                    <Field name="phone" type="tel" onFocus={() => setFocusedField('phone')} className={`bg-transparent border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} outline-none text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.phone")} />
                                    {errors.phone && touched.phone ? <p className="text-primary text-xs">{errors.phone}</p> : null}
                                </div>
                            </div>
                            <div className='mb-6'>
                                <Field name="email" type="email" onFocus={() => setFocusedField('email')} className={`bg-transparent border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} outline-none text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.email")} />
                                {errors.email && touched.email ? <p className="text-primary text-xs">{errors.email}</p> : null}
                            </div>
                            <div className='mb-4'>
                                <Field as="textarea" name="area" onFocus={() => setFocusedField('area')} className={`bg-transparent border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} outline-none text-sm rounded-xl block w-full py-3 px-4`} rows={9} placeholder={t("contact.form.area")} />
                                {errors.area && touched.area ? <p className="text-primary text-xs">{errors.area}</p> : null}
                            </div>
                            <div className='mb-6 hidden md:block'>
                                <p className='font-medium text-[#909090]'>{t("contact.form.content")}</p>
                            </div>
                            <div className='w-full md:w-[271px]'>
                                <Button bgColor='white' width='100%'>
                                    <span className='z-10 font-medium text-[#151515] group-hover:text-white duration-300'>{t("contact.form.button")}</span>
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='w-full max-w-124'>
                    <div className='mb-8'>
                        <div className='mb-6'>
                            <p className='text-sm md:text-[22px] md:font-medium leading-8 text-[#F7F7F1]'>{text}</p>
                        </div>
                        <div className='w-full xs:w-[271px]'>
                            <Button bgColor='white'>
                                <span className='z-10 font-medium group-hover:text-white duration-300'>{t("contact.planner.button")}</span>
                                <svg className='z-10 ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path className='group-hover:stroke-white  duration-300' d="M7 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H17C18.105 21 19 20.105 19 19V18" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='group-hover:stroke-white  duration-300' fillRule="evenodd" clipRule="evenodd" d="M13 17.0002L16.15 16.6112C16.371 16.5842 16.577 16.4832 16.735 16.3262L21.366 11.6952C22.211 10.8502 22.211 9.48024 21.366 8.63424V8.63424C20.521 7.78924 19.151 7.78924 18.305 8.63424L13.745 13.1942C13.592 13.3472 13.493 13.5452 13.462 13.7602L13 17.0002Z" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path className='group-hover:stroke-white  duration-300' fillRule="evenodd" clipRule="evenodd" d="M13.5 4.5H8.5C7.672 4.5 7 3.828 7 3V3C7 2.172 7.672 1.5 8.5 1.5H13.5C14.328 1.5 15 2.172 15 3V3C15 3.828 14.328 4.5 13.5 4.5Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='group-hover:stroke-white  duration-300' d="M7 8H13" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='group-hover:stroke-white  duration-300' d="M7 12H11" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className='group-hover:stroke-white  duration-300' d="M15 3H17C18.105 3 19 3.895 19 5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className='flex font-medium'>
                        <p className='text-[#888885]'>{t("contact.planner.contact_title")}</p>
                        <p className='text-[#F7F7F1] ml-6 '>info@drafts.az</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
