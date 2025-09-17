import React from 'react'
import BlurMainBall from '../animate/BlurMainBall';

interface ServiceCardProps {
    title: string;
    description: string;
    buttonText: string;
    backgroundColor: string;
    icon?: string;
    onButtonClick?: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    buttonText,
    backgroundColor,
    icon,
    onButtonClick
}) => (
    <div className={`${backgroundColor} rounded-xl px-4 sm:p-5 w-[305px] max-w-[308px] mx-auto relative`}>
        <div className="flex flex-col gap-4 sm:gap-2">
            {/* Service Badge and Icon */}
            <div className="flex justify-between items-start">
                <button className="bg-white-light border border-white-overlay rounded-2xl px-3 sm:px-4 py-2 text-[8px] sm:text-[10px] font-normal text-white capitalize">
                    Our Services
                </button>
                {icon && (
                    <div className="w-[120px] sm:w-[149px] h-[120px] sm:h-[177px]">
                        <img src={icon} alt={title} className="w-full h-full object-contain" />
                    </div>
                )}
            </div>
            {/* Content */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-[-80px]">
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-white leading-tight">
                    {title}
                </h3>
                <p className="text-[12px] sm:text-[14px] h-[176px] font-normal text-white-light leading-relaxed mb-5">
                    {description}
                </p>
                {/* CTA Button */}
                <button
                    onClick={onButtonClick}
                    className="bg-black absolute bottom-4 w-[265px] rounded-[28px] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    <span className="text-[10px] sm:text-[12px] font-normal text-white">
                        {buttonText}
                    </span>
                    <img
                        src="/images/img_auto_layout_horizontal.svg"
                        alt="Arrow"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                </button>
            </div>
        </div>
    </div>
);
function Product() {
    const services = [
        {
            title: "MVP",
            description: "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
            buttonText: "Talk to a Product Expert",
            backgroundColor: "bg-accent",
            icon: "/images/img_frame.svg"
        },
        {
            title: "SaaS",
            description: "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
            buttonText: "Talk to a Product Expert",
            backgroundColor: "bg-danger",
            icon: "/images/img_frame_red_400.png"
        },
        {
            title: "AI",
            description: "We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes",
            buttonText: "Talk to a Product Expert",
            backgroundColor: "bg-warning",
            icon: "/images/img_frame_lime_400.svg"
        },
        {
            title: "B2B & B2C Commerce Transformation",
            description: "We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.",
            buttonText: "Talk to a Ecommerce Expert",
            backgroundColor: "bg-success",
            icon: "/images/img_frame_light_green_a200.svg"
        }
    ];
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24">
            {/* Product Engineering Section */}
            <BlurMainBall />
            {/* Background Elements */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[444px] h-[300px] sm:h-[400px] md:h-[444px] rounded-full bg-gradient-to-b from-[#085cff] to-transparent opacity-30 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-[400px] sm:w-[500px] md:w-[638px] h-[400px] sm:h-[500px] md:h-[638px]">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-40"
            />
          </div> */}
            <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight">
                            Product Engineering
                        </h2>
                        <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed max-w-2xl">
                            Discover the impact of bespoke digital solutions tailored precisely to your business's
                            distinct requirements. Our experienced team of professionals ensures you receive
                            outstanding results that consistently exceed your expectations.
                        </p>
                    </div>
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                buttonText={service.buttonText}
                                backgroundColor={service.backgroundColor}
                                icon={service.icon}
                                onButtonClick={() => console.log(`Clicked ${service.title}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product