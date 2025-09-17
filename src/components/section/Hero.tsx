import React from 'react'
import MainBall from '../animate/MainBall'
import Image from 'next/image';

interface StatisticProps {
    value: string;
    label: string;
}
const StatisticCard: React.FC<StatisticProps> = ({ value, label }) => (
    <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center w-full px-4 sm:px-5 lg:px-6">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-tight bg-gradient-to-r from-[#3c6bfe] to-[#9d84f2] bg-clip-text text-transparent">
            {value}
        </h3>
        <p className="text-[10px] sm:text-[12px] md:text-[14px] text-white text-center leading-tight">
            {label}
        </p>
    </div>
);

function Hero() {
    const statistics = [
        { value: "200%", label: "Revenue Growth" },
        { value: "4X", label: "Speed to Market" },
        { value: "73%", label: "New Orders" },
        { value: "10K+", label: "Active Users" }
    ];
    return (
        <section className="relative w-full ">
            <Image
                width={450}
                height={969}
                src="/images/image 16.png"
                alt="Hero_Image_2"
                className="absolute top-[150px] sm:top-[200px] md:top-[200px] left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[969px] h-[250px] sm:h-[350px] md:h-[450px] object-contain bg-[#151a2c] blur-md opacity-40 bg-blend-hard-light"
            />
            {/* </div> */}
            <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="flex flex-col gap-8 sm:gap-12 md:gap-8 items-center text-center">
                    {/* AI Badge */}
                    <div className="flex items-center gap-2 sm:gap-3 bg-transparent rounded-full px-4 sm:px-6 py-2 sm:py-3">
                        <img
                            src="/images/img_mdi_magic.svg"
                            alt="AI Magic"
                            className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span className="text-[16px] sm:text-[14px] md:text-[16px] font-medium text-[#ecf4bd]">
                            Introducing AI Automation
                        </span>
                    </div>
                    {/* Main Heading */}
                    <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-tight">
                        <span className="text-white">from </span>
                        <span className="text-[#11deff]">CONCEPT</span>
                        <br />
                        <span className="text-white"> to </span>
                        <span className="text-[#4380ff]">REALITY</span>
                    </h1>
                    {/* Subtitle */}
                    <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-[#bdf4cf] leading-relaxed max-w-4xl">
                        We Engineer your Software Success & Digital Transformation.
                    </h2>
                    {/* Description */}
                    <p className="text-[14px] sm:text-[16px] font-normal text-white leading-relaxed max-w-3xl">
                        <span>At Chromezy, we translate your ideas into market-ready solutions quickly and</span><br />
                        <span>precisely. Leveraging the power of technology and prioritizing user needs, we deliver</span><br />
                        <span>products thatare both cutting-edge and user-centric.</span>
                    </p>
                    {/* Statistics */}
                    <div className="w-full max-w-4xl bg-transparent rounded-lg p-6 sm:p-8 md:p-10 mx-4 sm:mx-8 md:mx-16 mt-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                            {statistics.map((stat, index) => (
                                <StatisticCard key={index} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Company Logos */}
            <section className="w-full py-12 sm:py-16 md:py-20">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Line */}
                    <div className="w-full h-[1px] bg-white-medium mb-8 sm:mb-12"></div>
                    {/* Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[148px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[72px]">
                                <img
                                    src="/images/img_frame_34991.png"
                                    alt={`Partner Logo ${index + 1}`}
                                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Bottom Line */}
                    <div className="w-full h-[1px] bg-white-medium mt-8 sm:mt-12"></div>
                </div>
            </section>
        </section>
    )
}

export default Hero