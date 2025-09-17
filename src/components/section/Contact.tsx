'use client'

import React from 'react'
import Button from '../ui/Button'
import { useParallax } from 'react-scroll-parallax'
import Image from 'next/image';

function Contact() {

    const avatarParallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        scale: [0, 1],
        speed: 1
    });

    const [isAnimationDone, setIsAnimationDone] = React.useState(false);
    const msgParallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [0, 25, 'easeInOut'],
        translateY: [0, 50, 'easeInOut'],
    })

    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 style={{ height: '200vh' }}">
            {/* Contact Section */}
            <div className="relative w-full max-w-[1280px] mx-auto  pt-[-100px]">
                <div className=" bg-info-light rounded-[80px] overflow-hidden">
                    <div className=" rounded-[80px] pr-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ">
                            {/* Left Column - Contact Info */}
                            <div style={{ backgroundImage: "url('/images/img_.png')" }} className='bg-cover w-[840px] h-[760px] bg-[center_top_92%] py-12 relative'>
                                <div className='absolute inset-0 bg-blue-500 opacity-100 mix-blend-color'></div>
                            </div>
                            <div className="absolute left-48 flex flex-col gap-6 sm:gap-8 items-center text-center ">



                                {/* Character Illustration */}
                                <div ref={avatarParallax.ref} className="w-[200px] sm:w-[250px] md:w-[320px] h-[200px] sm:h-[250px] md:h-[314px]">
                                    <Image
                                        width={320}
                                        height={314}
                                        src="/images/img_3d_cartoon_youn.png"
                                        alt="Contact Character"
                                        className="w-full h-full object-contain mt-4"
                                    />
                                </div>
                                {/* </Parallax> */}
                                {/* Contact Title */}
                                <div className="flex flex-col gap-2 sm:gap-4">
                                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white uppercase leading-tight">
                                        Contact Us
                                    </h2>
                                    <p className="text-[12px] sm:text-[12px] font-normal text-white text-center leading-relaxed">
                                        <span>Talk with us to know how we can make you a</span><br />
                                        <span>part of a thriving digital landscape</span>
                                    </p>
                                </div>
                                {/* Contact Details */}
                                <div className="bg-success-light rounded-xl p-4 sm:p-5 md:p-6 w-[420px] max-w-md">
                                    <div className="flex flex-col gap-4 sm:gap-5">
                                        {/* Phone */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <img
                                                    src="/images/img_phone.svg"
                                                    alt="Phone"
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                />
                                                <span className="text-[10px] sm:text-[12px] font-normal text-white">
                                                    Phone
                                                </span>
                                            </div>
                                            <span className="text-[14px] sm:text-[16px] font-semibold text-white">
                                                +1 315 308 0901
                                            </span>
                                        </div>
                                        {/* Divider */}
                                        <div className="w-full h-[1px] bg-overlay-light"></div>
                                        {/* Email */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <img
                                                    src="/images/img_mail.svg"
                                                    alt="Email"
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                />
                                                <span className="text-[10px] sm:text-[12px] font-normal text-white">
                                                    Email
                                                </span>
                                            </div>
                                            <span className="text-[14px] sm:text-[16px] font-semibold text-white">
                                                sales@chromezy.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column - Contact Form */}

                            {
                                !isAnimationDone && (
                                    <div ref={msgParallax.ref} className="absolute right-10 top-[-130px] z-10">
                                        <Image
                                            width={223}
                                            height={223}
                                            src="/images/line-md_email.png"
                                            alt="Message Icon"
                                        />
                                    </div>
                                )
                            }
                            <div className='absolute right-[74px] w-[450px] overflow-hidden'>
                                <div className='relative w-full h-full'>
                                    <div className='relative w-full h-full'>
                                        <div className='absolute right-[-60px] top-[-90px] z-20'>
                                            {
                                                isAnimationDone && (
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src={"/images/line-md_email.png"}
                                                        alt='Message Icon'
                                                    />
                                                )
                                            }
                                        </div>

                                    </div>
                                    <div className=" bg-light rounded-[20px] p-6 sm:p-8 md:p-10 relative">

                                        <div className="flex justify-between items-start">
                                            <h3 className="text-[20px] sm:text-[24px] font-semibold text-primary capitalize mb-2">
                                                Let us talk!
                                            </h3>
                                        </div>

                                        <form className="flex flex-col gap-4 sm:gap-5 md:gap-4">

                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                                                    What is your name?
                                                </label>
                                                <input className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px] max-h-9 flex items-center focus:border-none focus:outline-none" />
                                            </div>

                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                                                    What is your email address?
                                                </label>
                                                <input className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px] max-h-9 focus:border-none focus:outline-none" />
                                            </div>

                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                                                    What is your phone number?
                                                </label>
                                                <input className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px] max-h-9 focus:border-none focus:outline-none" />
                                            </div>

                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                                                    What are you looking for?
                                                </label>
                                                <input className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px] max-h-9 focus:border-none focus:outline-none" />
                                            </div>

                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                                                    How can we help you?
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    className="bg-white-transparent rounded border-0 p-2 sm:p-3 focus:border-none focus:outline-none"></textarea>
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="dark"
                                                size="xs"
                                                className=" text-white rounded-[28px] capitalize mt-4 sm:mt-2"
                                                fullWidth
                                            >
                                                Send request
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact