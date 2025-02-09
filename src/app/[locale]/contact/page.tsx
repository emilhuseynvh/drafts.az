'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import arrowIcon from '../../../../public/icons/Arrow.svg'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import * as yup from 'yup'
import { Field, Formik, Form } from 'formik'

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required").matches(/^\+994[1-9]\d{1}\d{7}$/, "Phone number must be in the format +994XXXXXXXXX"),
    area: yup.string().required("Message is required")
});

const Page = () => {
    const t = useTranslations();
    const [focusedField, setFocusedField] = useState<string | null>(null);
    return (
        <div className='wrapper mt-25'>
            <div className='pb-13 border-b border-b-[#909090]'>
                <div className='md:flex gap-10 items-end mb-6'>
                    <div className="flex items-center space-x-3 pb-7 xs:py-0">
                        <div className="w-2 h-2 rounded-full bg-[#F7F7F1]"></div>
                        <span className="text-lg text-[#F7F7F1]">{t("contact.title")}</span>
                    </div>
                    <h2 className='text-end md:text-start text-3xl md:text-5xl text-white'>{t("contact.first_headline")}</h2>
                </div>
                <div className='flex items-center text-white'>
                    <h2 className='text-3xl md:text-5xl'>{t("contact.second_headline")}</h2>
                    <div className='h-6 w-6 md:w-14 md:h-14 rounded-sm md:rounded-xl bg-white flex justify-center items-center ml-6'>
                        <Image src={arrowIcon} width={32} height={32} alt='Drafts.az contact page arrow icon' className='rotate-135 w-4 h-4 md:w-8 md:h-8' />
                    </div>
                </div>
            </div>
            <div className='mt-25 flex flex-col md:flex-row justify-between gap-5'>
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
                                    <Field name="name" type="text" onFocus={() => setFocusedField('name')} className={`bg-[#F7F7F1] border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.name")} />
                                    {errors.name ? <p className="text-primary text-xs">{errors.name}</p> : null}
                                </div>
                                <div className="w-full">
                                    <Field name="phone" type="tel" onFocus={() => setFocusedField('phone')} className={`bg-[#F7F7F1] border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} outline-none text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.phone")} />
                                    {errors.phone && touched.phone ? <p className="text-primary text-xs">{errors.phone}</p> : null}
                                </div>
                            </div>
                            <div className='mb-6'>
                                <Field name="email" type="email" onFocus={() => setFocusedField('email')} className={`bg-[#F7F7F1] border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} text-sm rounded-xl block w-full py-3 px-4`} placeholder={t("contact.form.email")} />
                                {errors.email && touched.email ? <p className="text-primary text-xs">{errors.email}</p> : null}
                            </div>
                            <div className='mb-4'>
                                <Field as="textarea" name="area" onFocus={() => setFocusedField('area')} className={`bg-[#F7F7F1] border border-[#AAA] duration-300 ${focusedField ? 'text-[#151515]' : 'text-[#909090]'} text-sm rounded-xl block w-full py-3 px-4`} rows={9} placeholder={t("contact.form.area")} />
                                {errors.area && touched.area ? <p className="text-primary text-xs">{errors.area}</p> : null}
                            </div>
                            <div className='mb-6'>
                                <p className='font-medium text-[#909090]'>{t("contact.form.content")}</p>
                            </div>
                            <div className='w-full xs:w-[271px]'>
                                <Button bgColor='white' width='100%'>
                                    <span className='z-10 font-medium text-[#151515] group-hover:text-white'>{t("contact.form.button")}</span>
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='w-full max-w-124'>
                    <div className='mb-8'>
                        <div className='mb-6'>
                            <p className='text-xl md:text-2xl font-medium leading-8 text-[#AAA]'>{t("contact.planner.content")}</p>
                        </div>
                        <div className='w-full xs:w-[271px]'>
                            <Button bgColor='white'>
                                <span className='z-10 group-hover:text-white'>{t("contact.planner.button")}</span>
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
