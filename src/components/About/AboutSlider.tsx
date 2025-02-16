"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
const AboutSlider = () => {
    const t = useTranslations()
    const aboutSliderArray = ['_0b06a847-f848-478e-ba1b-aee035e8ef5c.png', '_0b06a847-f848-654as-651b-1654asd-as5d4.png', '497bb25928c0921daac055f12e9a1414.png', '8f265af93d90f0cb6f3fbaf5f0d0262f.png', 'e8b16d3d6ba5a65fe5b262f95a37345d.png', '157948f39abcdcb03dc952262fae36d2.jpg']
    const path = process.env.PUBLIC_URL
    return (
        <div className='py-17.5'>
            <div className='md:py-12 h-120 md:h-182 bg-primary-white px-3 py-5 rounded-2xl relative flex flex-col md:items-center justify-between '>
                <div className='absolute'>
                    <div className="flex items-center space-x-4 mb-7 xs:mb-0">
                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-bg"></div>
                        <span className="md:text-3xl text-primary-bg font-medium max-w-98">We take your bussines to the next level</span>
                    </div>
                </div>
                <div className='w-full pt-16  md:pt-40'>
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={false}
                        pagination={false}
                        className="mySwiper h-70 md:h-90 w-full"
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            }
                        }}
                        speed={2000}
                        modules={[Autoplay]}
                    >
                        {aboutSliderArray.map((item: any, index: number) => (
                            <SwiperSlide className='w-100 md:!w-125' key={index}>
                                <div className='h-full'>
                                    <Image src={`/img/${item}`} alt='Drafts.az about images' className='w-full h-full object-cover rounded-2xl' width={500} height={360} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex items-start space-x-4 mb-7 xs:mb-0 ">
                    <div className="hidden md:block w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-bg mt-4"></div>
                    <div className='max-w-124'>
                        <span className="md:text-3xl text-primary-bg font-medium hidden md:block">Simplicity through research, design and strategy</span>
                        <span className="md:text-3xl text-primary-bg font-medium block md:hidden ">Simplicity through in-depth research, thoughtful design, and strategic planning.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutSlider
