import React from 'react'

function Footer() {
    return (
        <footer className="w-full  bg-black/40 py-12 sm:py-16 md:py-20 ">
            {/* Footer */}
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
                    {/* Main Footer Content */}
                    <div className="flex flex-row ">
                        {/* Left Company Info */}
                        <div className="flex flex-col gap-6 sm:gap-8 w-[720px]">
                            {/* Logo */}
                            <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[30px] sm:h-[35px] md:h-[40px]">
                                <img
                                    src="/images/img_logo_final_1.svg"
                                    alt="Chomesy Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Description */}
                            <p className="text-[10px] sm:text-[12px] font-normal text-white-transparent leading-relaxed max-w-sm ml-12 mt-[-20px]">
                                <span>Not just about software & Product development;</span> <br />
                                <span>we are your tech partners, crafting modern digital</span> <br />
                                <span>solutions for next-gen excellence!</span>
                            </p>
                            {/* Legal Links */}
                            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[12px] font-normal text-white-transparent ml-12 mt-[-20px]">
                                <span>Terms</span>
                                <span>|</span>
                                <button className="hover:text-white transition-colors">Privacy</button>
                            </div>
                            {/* Contact Info */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex items-center gap-3 sm:gap-4 ml-[15px]">
                                    <img
                                        src="/images/img_phone_light_blue_a700.svg"
                                        alt="Phone"
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                    />
                                    <span className="text-[14px] sm:text-[16px] font-semibold text-white">
                                        +1 315 308 0901
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 ml-[15px]">
                                    <img
                                        src="/images/img_mail_light_blue_a700.svg"
                                        alt="Email"
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                    />
                                    <span className="text-[14px] sm:text-[16px] font-semibold text-white">
                                        sales@chromezy.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Right Navigation Links */}
                        <div className="flex flex-row w-[400px] justify-between">
                            {/* Company Links */}
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <div className="flex flex-col gap-3 sm:gap-4 py-3 sm:py-4">
                                    {['Home', 'About Us', 'Career', 'Case Study'].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center">
                                                <button className="text-[12px] sm:text-[14px] font-normal text-white-transparent hover:text-white transition-colors">
                                                    {item}
                                                </button>
                                                <img
                                                    src="/images/img_frame_white_a700_12x12.svg"
                                                    alt="Arrow"
                                                    className="w-2 h-2 sm:w-3 sm:h-3"
                                                />
                                            </div>
                                            {index < 3 && <div className="w-full h-[1px] bg-white-light mt-3 sm:mt-4"></div>}
                                        </div>
                                    ))}
                                </div>
                                <div className="py-1 sm:py-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[16px] sm:text-[20px] font-semibold text-white">
                                            Join the Team
                                        </span>
                                        <img
                                            src="/images/img_frame_white_a700_12x12.svg"
                                            alt="Arrow"
                                            className="w-2 h-2 sm:w-3 sm:h-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Services Links */}
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <div className="flex flex-col gap-3 sm:gap-4 py-3 sm:py-4">
                                    {['AI', 'MVP', 'SaaS', 'E-commerce'].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center">
                                                <button className="text-[12px] sm:text-[14px] font-normal text-white-transparent hover:text-white transition-colors">
                                                    {item}
                                                </button>
                                                <img
                                                    src="/images/img_frame_white_a700_12x12.svg"
                                                    alt="Arrow"
                                                    className="w-2 h-2 sm:w-3 sm:h-3"
                                                />
                                            </div>
                                            {index < 3 && <div className="w-full h-[1px] bg-white-light mt-3 sm:mt-4"></div>}
                                        </div>
                                    ))}
                                </div>
                                <div className="py-1 sm:py-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[16px] sm:text-[20px] font-semibold text-accent">
                                            Work with us
                                        </span>
                                        <img
                                            src="/images/img_frame_white_a700_12x12.svg"
                                            alt="Arrow"
                                            className="w-2 h-2 sm:w-3 sm:h-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-white-overlay"></div>
                        {/* Copyright and Social */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                            {/* Copyright */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[12px] font-normal text-white-transparent">
                                <span>Copyright © 2024</span>
                                <span>|</span>
                                <span>Chromezy, All Rights Reserved</span>
                                <span>|</span>
                                <span>
                                    Designed by <span className="underline">PairaLabs</span>
                                </span>
                            </div>
                            {/* Social Links */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <span className="text-[10px] sm:text-[12px] font-normal text-white-transparent">
                                    Connect with us:
                                </span>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img
                                        src="/images/img_frame_white_a700_24x24.svg"
                                        alt="Social 1"
                                        className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity cursor-pointer"
                                    />
                                    <img
                                        src="/images/img_frame_24x24.svg"
                                        alt="Social 2"
                                        className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity cursor-pointer"
                                    />
                                    <img
                                        src="/images/img_frame_4.svg"
                                        alt="Social 3"
                                        className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer