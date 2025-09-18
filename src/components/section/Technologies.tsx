import React, { useEffect, useRef, useState } from 'react'
import Glob from '../animate/Glob';

interface TechnologyButtonProps {
    name: string;
    icon: string;
}
const TechnologyButton: React.FC<TechnologyButtonProps> = ({ name, icon }) => (
    <button className="bg-white-overlay border border-white-overlay rounded-lg px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-white-medium transition-colors">
        <img src={icon} alt={name} className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-[12px] sm:text-[14px] font-semibold text-white">
            {name}
        </span>
    </button>
);
function Technologies() {
    const webTechnologies = [
        { name: "React", icon: "/images/img_frame_cyan_a400_03.svg" },
        { name: "Node", icon: "/images/img_frame_green_600.svg" },
        { name: "Angular", icon: "/images/img_frame_deep_orange_a700.svg" },
        { name: "Vue", icon: "/images/img_frame_green_300.svg" },
        { name: "ExpressJS", icon: "/images/img_frame_20x20.png" },
        { name: "AdobeXD", icon: "/images/img_frame_gray_900_03.svg" },
        { name: "Figma", icon: "/images/img_frame_deep_purple_a200.svg" },
        { name: "Whimsical", icon: "/images/img_frame_gray_900_03.svg" }
    ];
    const mobileTechnologies = [
        { name: "Flutter", icon: "/images/img_frame_light_blue_a200_01.svg" },
        { name: "Kotlin", icon: "/images/img_frame_1.png" },
        { name: "Swift", icon: "/images/img_frame_2.png" },
        { name: "React Native", icon: "/images/img_frame_cyan_a400_03.svg" },
        { name: "AdobeXD", icon: "/images/img_frame_gray_900_03.svg" },
        { name: "Figma", icon: "/images/img_frame_deep_purple_a200.svg" }
    ];
    const ecommerceTechnologies = [
        { name: "Shopify", icon: "/images/img_frame_gray_900_03.svg" },
        { name: "WooCommerce", icon: "/images/img_frame_gray_900_03.svg" },
        { name: "Prestashop", icon: "/images/img_frame_gray_900_03.svg" }
    ];
    const analyticsTechnologies = [
        { name: "Python", icon: "/images/img_frame_3.png" },
        { name: "PowerBI", icon: "/images/img_frame_white_a700.png" },
        { name: "Tableau", icon: "/images/img_frame_deep_orange_700_01.svg" },
        { name: "Amazon QuickSight", icon: "/images/img_frame_deep_orange_700_01.svg" },
        { name: "Apache Spark", icon: "/images/img_frame_deep_orange_700_01.svg" }
    ];
    const cloudTechnologies = [
        { name: "Azure", icon: "/images/img_frame_light_blue_700.svg" },
        { name: "AWS", icon: "/images/img_frame_white_a700_20x20.svg" },
        { name: "Docker", icon: "/images/img_frame_blue_500.svg" },
        { name: "Kubernetes", icon: "/images/img_frame_blue_a700_01.svg" },
        { name: "Google Cloud", icon: "/images/img_frame_blue_a200_01.svg" },
        { name: "Ola Krutrim", icon: "/images/img_frame_gray_900_03.svg" }
    ];

    return (
        <>
            <section className="hidden sm:block relative w-full py-16 sm:py-20 md:py-24">
                {/* Technologies Section */}
                <Glob />

                <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                        {/* Left Column - Innovation Card */}
                        <div className="flex flex-col justify-center w-[488px] h-[979px]">
                            <div className="bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] rounded-[80px] p-8 sm:p-12 md:p-10 shadow-lg">
                                <div className="flex flex-col gap-6 sm:gap-8 items-center py-20">
                                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight">
                                        Innovative Technologies Keeping Us Ahead
                                    </h2>
                                    <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed">
                                        Discover the impact of bespoke digital solutions tailored precisely to your
                                        business's distinct requirements.
                                    </p>
                                    <div className="w-full max-w-[300px] sm:max-w-[376px] h-[250px] sm:h-[300px] md:h-[376px]">
                                        <img
                                            src="/images/image 121.png"
                                            alt="Innovation Illustration"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column - Technology Lists */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-9 justify-center w-[712px]  ml-[-100px]">
                            {/* Web App Development */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex gap-6 sm:gap-8 md:gap-10">
                                    <span className="text-[28px] sm:text-[32px] md:text-[40px] mt-[-12px] font-semibold text-white-overlay">
                                        01
                                    </span>
                                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white">
                                            Web App Development
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {webTechnologies.map((tech, index) => (
                                                <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile App Development */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex gap-6 sm:gap-8 md:gap-10">
                                    <span className="text-[28px] sm:text-[32px] md:text-[40px] mt-[-12px] font-semibold text-white-overlay">
                                        02
                                    </span>
                                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white">
                                            Mobile App Development
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {mobileTechnologies.map((tech, index) => (
                                                <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* E-commerce */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex  gap-6 sm:gap-8 md:gap-10">
                                    <span className="text-[28px] sm:text-[32px] md:text-[40px] mt-[-12px] font-semibold text-white-overlay">
                                        03
                                    </span>
                                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white">
                                            E-commerce
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {ecommerceTechnologies.map((tech, index) => (
                                                <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Analytics */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex  gap-6 sm:gap-8 md:gap-10">
                                    <span className="text-[28px] sm:text-[32px] md:text-[40px] mt-[-12px] font-semibold text-white-overlay">
                                        04
                                    </span>
                                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white">
                                            Analytics
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {analyticsTechnologies.map((tech, index) => (
                                                <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Data & Cloud */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex gap-6 sm:gap-8 md:gap-10">
                                    <span className="text-[28px] sm:text-[32px] md:text-[40px] mt-[-12px] font-semibold text-white-overlay">
                                        05
                                    </span>
                                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white">
                                            Data & Cloud
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {cloudTechnologies.map((tech, index) => (
                                                <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full py-12 px-4 block lg:hidden">
                {/* Technologies Section */}
                <Glob />

                <div className="relative w-full max-w-[480px] mx-auto">
                    {/* Innovation Card */}
                    <div className="flex flex-col justify-center w-full">
                        <div className="bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] rounded-3xl p-6 shadow-lg">
                            <div className="flex flex-col gap-6 items-center py-10">
                                <h2 className="text-[24px] font-semibold text-white uppercase leading-tight text-center">
                                    Innovative Technologies Keeping Us Ahead
                                </h2>
                                <p className="text-[14px] font-normal text-white-light leading-relaxed text-center">
                                    Discover the impact of bespoke digital solutions tailored precisely to your
                                    business's distinct requirements.
                                </p>
                                <div className="w-full max-w-[260px] h-[220px]">
                                    <img
                                        src="/images/image 121.png"
                                        alt="Innovation Illustration"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technology Lists */}
                    <div className="flex flex-col gap-6 mt-10">
                        {/* Web App Development */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <span className="text-[24px] font-semibold text-white-overlay">01</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-[16px] font-semibold text-white">
                                        Web App Development
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {webTechnologies.map((tech, index) => (
                                            <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile App Development */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <span className="text-[24px] font-semibold text-white-overlay">02</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-[16px] font-semibold text-white">
                                        Mobile App Development
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {mobileTechnologies.map((tech, index) => (
                                            <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* E-commerce */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <span className="text-[24px] font-semibold text-white-overlay">03</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-[16px] font-semibold text-white">
                                        E-commerce
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {ecommerceTechnologies.map((tech, index) => (
                                            <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <span className="text-[24px] font-semibold text-white-overlay">04</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-[16px] font-semibold text-white">
                                        Analytics
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {analyticsTechnologies.map((tech, index) => (
                                            <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data & Cloud */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <span className="text-[24px] font-semibold text-white-overlay">05</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-[16px] font-semibold text-white">
                                        Data & Cloud
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cloudTechnologies.map((tech, index) => (
                                            <TechnologyButton key={index} name={tech.name} icon={tech.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Technologies