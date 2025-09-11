import React from 'react'

interface TestimonialProps {
    quote: string;
    author: string;
    position: string;
    rating: string;
    project: string;
    country: string;
    logo?: string;
}
const TestimonialCard: React.FC<TestimonialProps> = ({
    quote,
    author,
    position,
    rating,
    project,
    country,
    logo
}) => (
    <div className="bg-card-light hover:bg-white/10 hover:shadow-lg transition-all duration-300 rounded-xl sm:rounded-[20px] p-4 sm:p-6 w-full max-w-[400px] mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6">
            {/* Quote Icon */}
            <img src="/images/img_bi_quote.svg" alt="Quote" className="w-6 h-6 sm:w-8 sm:h-8" />
            {/* Quote Text */}
            <p className="text-[14px] sm:text-[16px] font-semibold text-white leading-relaxed w-[352px] h-[192px]">
                {quote}
            </p>
            {/* Author Info */}
            <div className="flex flex-col gap-1">
                <p className="text-[12px] sm:text-[14px] font-bold text-white text-right">
                    {author}
                </p>
                <p className="text-[10px] sm:text-[12px] font-normal text-white-transparent text-right">
                    {position}
                </p>
            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-white-overlay"></div>
            {/* Project Details */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <p className="text-[8px] sm:text-[10px] font-normal text-white-transparent">
                        Star Rating - {rating}
                    </p>
                    <p className="text-[8px] sm:text-[10px] font-normal text-white-transparent">
                        Project - {project}
                    </p>
                    <p className="text-[8px] sm:text-[10px] font-normal text-white-transparent">
                        Country - {country}
                    </p>
                </div>
                {logo && (
                    <img src={logo} alt="Company Logo" className="w-12 h-6 sm:w-16 sm:h-8 object-contain" />
                )}
            </div>
        </div>
    </div>
);
function Testimonials() {
    const testimonials = [
        {
            quote: "We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.",
            author: "JEFTA MUGWENI",
            position: "(CEO), Campion Savings Club",
            rating: "5 / 5",
            project: "Custom CRM MVP Development",
            country: "Zimbabwe",
            logo: "/images/img_frame_34991.png"
        },
        {
            quote: "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
            author: "BRANDON LAU",
            position: "(CEO), KIRI Journey",
            rating: "5 / 5",
            project: "E-commerce Development",
            country: "HongKong",
            logo: "/images/img_frame_34991.png"
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            author: "MARC DOLLON",
            position: "CTO, MasterStudy",
            rating: "5 / 5",
            project: "SaaS-Based Cloud ERP",
            country: "United States",
            logo: "/images/img_frame_34991.png"
        },
        {
            quote: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
            author: "MARC DOLLON",
            position: "CTO, MasterStudy",
            rating: "5 / 5",
            project: "SaaS-Based Cloud ERP",
            country: "United States",
            logo: "/images/img_frame_34991.png"
        }
    ];
    return (
        <section className="w-full py-16 sm:py-20 md:py-24">
            {/* Client Testimonials Section */}
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight">
                                Our Happy Clients
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed">
                                Dummy ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white-medium rounded-full flex items-center justify-center hover:bg-white-overlay transition-colors">
                                <img
                                    src="/images/img_size_large_color_default.svg"
                                    alt="Previous"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </button>
                            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white-medium rounded-full flex items-center justify-center hover:bg-white-overlay transition-colors">
                                <img
                                    src="/images/img_size_large_color_default_white_a700.svg"
                                    alt="Next"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </button>
                        </div>
                    </div>
                    {/* Testimonials Slider */}
                    <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
                        <div className="flex gap-4 sm:gap-6 md:gap-8 min-w-max pb-4">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Decoration */}
            {/* <div className="absolute top-1/2 right-0 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] -mt-16">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-30"
            />
          </div> */}
        </section>
    )
}

export default Testimonials