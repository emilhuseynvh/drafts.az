"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import userImage from '../../../public/icons/Frame826.png'
import Image from 'next/image';
export default function Testimonials() {
    const testimonialsArr = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur. Nisl tincidunt justo aliquet in elit varius phasellus massa consequat. Euismod et et tincidunt iaculis porttitor justo vitae ornare consectetur. Tellus mauris erat lobortis cras sem bibendum integer Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            userImage: null,
            userName: 'Anna Nowak',
            userExperience: 'CEO, E-commerce Company'
        },
    ]

    return (
        <div className='py-17.5'>
            <div id='testimonialsCarousel' className='bg-primary-white pt-6  md:py-10 rounded-2xl relative '>
                <div className="px-6 flex  items-center space-x-2 mb-7 xs:mb-0 absolute">
                    <div className="w-1 h-1 rounded-full bg-primary-bg"></div>
                    <span className="text-md text-primary-bg">What out clients say</span>
                </div>
                <div className='mt-10'>
                    <Swiper
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1050: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }

                        }}
                        centeredSlides={true}
                        initialSlide={1}
                        slideToClickedSlide
                        spaceBetween={30}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-140"
                    >

                        <div>
                            {testimonialsArr.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='mt-10 cursor-pointer max-h-max w-[90%]  md:w-90 bg-[#151515] rounded-2xl p-6'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Quote Icon">
                                                <path id="&#226;&#128;&#156;"
                                                    d="M14.0647 32.8002C12.9269 32.8002 11.8346 32.6182 10.7879 32.2541C9.78663 31.8445 8.89917 31.2983 8.12548 30.6157C7.35179 29.933 6.73739 29.1138 6.28228 28.1581C5.82716 27.1568 5.59961 26.0646 5.59961 24.8813C5.59961 23.5159 5.7589 22.1961 6.07748 20.9218C6.44157 19.6475 7.01045 18.4187 7.78414 17.2354C8.05721 16.8258 8.53508 16.0749 9.21774 14.9826C9.94592 13.8903 10.7196 12.7753 11.5388 11.6375C12.358 10.4542 13.1545 9.43024 13.9281 8.56553C14.7018 7.65531 15.2935 7.2002 15.7031 7.2002L16.5223 7.67806C15.43 9.22544 14.2922 10.7501 13.1089 12.2519C11.9712 13.7083 10.8334 15.1874 9.69561 16.6893C10.9699 15.2784 12.1532 13.8221 13.2455 12.3202C14.3377 10.7728 15.521 9.29371 16.7953 7.88286L17.6828 8.56553L18.1607 7.88286L18.5703 7.8146C19.2985 7.8146 19.8673 8.04215 20.2769 8.49726C20.6865 8.95237 20.9824 9.4985 21.1644 10.1357C20.4817 10.6363 19.7763 11.3189 19.0481 12.1837C18.32 13.0029 17.6145 13.9131 16.9319 14.9143C16.2492 15.8701 15.6121 16.8485 15.0204 17.8498C14.4288 18.8055 13.9509 19.6475 13.5868 20.3757C14.6336 18.6007 15.7486 16.8941 16.9319 15.2557C18.1607 13.5717 19.617 12.0699 21.3009 10.7501L21.3692 11.4327C21.3692 11.7058 21.2554 12.0244 21.0279 12.3885C20.8003 12.7525 20.5273 13.1394 20.2087 13.549C19.9356 13.9131 19.6398 14.2772 19.3212 14.6413C19.0026 14.9598 18.7523 15.2329 18.5703 15.4605L17.9559 15.0509C17.6373 15.7335 17.2277 16.4389 16.7271 17.1671C16.2265 17.8498 15.7258 18.5552 15.2252 19.2834C14.7701 20.0116 14.3605 20.7398 13.9964 21.4679C13.6778 22.1961 13.5185 22.9243 13.5185 23.6525L13.8599 23.9938C14.224 22.4009 14.8384 20.9218 15.7031 19.5565C16.4768 18.3277 17.3187 17.1216 18.2289 15.9383C17.9104 16.3934 17.5463 16.9168 17.1367 17.5085C16.6361 18.2821 16.1582 19.1013 15.7031 19.9661C15.248 20.7853 14.8611 21.6045 14.5425 22.4237C14.224 23.2429 14.0647 23.971 14.0647 24.6082C14.2467 24.6992 14.4515 24.7902 14.6791 24.8813C14.9066 24.9723 15.1342 25.0178 15.3617 25.0178L15.9079 24.9495C15.9534 25.2226 16.0217 25.4957 16.1127 25.7687C16.2037 26.0418 16.2492 26.3149 16.2492 26.5879C16.2492 26.952 16.1354 27.2023 15.9079 27.3389C15.6803 27.4299 15.4073 27.4754 15.0887 27.4754L15.1569 28.1581C15.7031 28.3856 16.2265 28.7269 16.7271 29.1821C17.2732 29.5917 17.5463 30.1378 17.5463 30.8205C17.5463 31.2301 17.4097 31.5714 17.1367 31.8445C16.9091 32.072 16.6133 32.2541 16.2492 32.3906C15.8851 32.5271 15.4983 32.6409 15.0887 32.7319C14.6791 32.7774 14.3377 32.8002 14.0647 32.8002ZM26.4209 20.3757C27.6953 18.9193 29.0833 17.5312 30.5852 16.2114C32.1326 14.8461 33.4752 13.4352 34.6129 11.9789L34.6812 12.7298C34.6812 13.0484 34.5674 13.4125 34.3399 13.8221C34.1123 14.1861 33.8393 14.5502 33.5207 14.9143C33.2021 15.2784 32.8608 15.6197 32.4967 15.9383C32.1781 16.2569 31.905 16.53 31.6775 16.7575L31.1313 16.2797C30.8128 16.8258 30.3804 17.3947 29.8343 17.9863C29.2881 18.5325 28.742 19.1014 28.1959 19.693C27.6497 20.2846 27.1491 20.8763 26.694 21.4679C26.2844 22.0596 26.0341 22.6512 25.9431 23.2429L26.2844 23.5159C26.785 22.3326 27.4677 21.2631 28.3324 20.3074C29.1971 19.3517 30.0618 18.4187 30.9265 17.5085C30.1529 18.3732 29.3564 19.3517 28.5372 20.4439C27.6725 21.5362 27.0126 22.6057 26.5575 23.6525L27.5815 23.8573L27.5132 24.4034C27.5132 24.5854 27.5132 24.7675 27.5132 24.9495C27.5587 25.0861 27.5815 25.2453 27.5815 25.4274C27.5815 25.9735 27.3539 26.2466 26.8988 26.2466L26.4892 26.1783L26.4209 26.9293C26.9216 27.2023 27.3312 27.5892 27.6497 28.0898C28.0138 28.5904 28.1959 29.1365 28.1959 29.7282C28.1959 30.4564 27.8773 30.9342 27.2401 31.1618C26.603 31.3438 26.0113 31.4349 25.4652 31.4349C24.6005 31.4349 23.713 31.2756 22.8028 30.957C21.9381 30.5929 21.1417 30.115 20.4135 29.5234C19.6853 28.8862 19.0937 28.1581 18.6385 27.3389C18.1834 26.5197 17.9559 25.6322 17.9559 24.6765C17.9559 23.0836 18.2062 21.5817 18.7068 20.1709C19.2529 18.76 20.0949 17.4857 21.2327 16.3479C21.4602 16.1204 21.9381 15.6198 22.6663 14.8461C23.3945 14.0269 24.1681 13.2077 24.9873 12.3885C25.8065 11.5237 26.5575 10.7501 27.2401 10.0674C27.9228 9.38473 28.3324 9.0434 28.4689 9.0434C28.9241 9.0434 29.2881 9.15717 29.5612 9.38473C28.7875 10.659 27.7863 11.8878 26.5575 13.0711C25.3287 14.2089 24.1681 15.2784 23.0759 16.2797C24.3502 15.2784 25.5335 14.2317 26.6257 13.1394C27.7635 12.0016 28.8558 10.8183 29.9025 9.58953L30.8583 10.1357C30.9038 9.77157 31.1313 9.54402 31.5409 9.45299C31.9961 9.36197 32.3374 9.31646 32.5649 9.31646C33.1111 9.31646 33.5434 9.52126 33.862 9.93086C34.1806 10.3405 34.3854 10.7956 34.4764 11.2962C33.0656 12.707 31.6775 14.1861 30.3121 15.7335C28.9923 17.2809 27.6953 18.8283 26.4209 20.3757ZM25.9431 23.3111C25.9431 23.4932 25.9886 23.5842 26.0796 23.5842V23.5159L25.9431 23.3111ZM26.2844 24.4717C26.3299 24.4261 26.3527 24.3806 26.3527 24.3351C26.3072 24.3806 26.2844 24.4261 26.2844 24.4717ZM18.2972 15.8701L18.3655 15.7335L18.2972 15.8701ZM18.502 15.597C18.4565 15.6425 18.411 15.688 18.3655 15.7335C18.411 15.688 18.4565 15.6425 18.502 15.597Z"
                                                    fill="#DB3D3E" />
                                            </g>
                                        </svg>
                                        <div>
                                            <p className='text-[#AAA] text-sm xs:text-base'>{item.text}</p>
                                        </div>
                                        <div className='mt-14 pt-3 border-t border-t-[#909090] flex items-start gap-3'>
                                            <div>
                                                <Image
                                                    src={item.userImage || userImage}
                                                    alt='Draft.az testimonials user image'
                                                    width={48}
                                                    height={48}
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div>
                                                <h2 className='text-[#F7F7F1] mb-1'>{item.userName}</h2>
                                                <p className='text-[#888885] text-sm xs:text-base'>{item.userExperience}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

            </div>
        </div>
    );
}
