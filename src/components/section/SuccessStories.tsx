import React from 'react'

interface SuccessStoryProps {
    title: string;
    description: string;
    image: string;
}
const SuccessStoryCard: React.FC<SuccessStoryProps> = ({ title, description, image }) => (
    <div className="relative w-full max-w-[400px] mx-auto rounded-[20px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-[200px] sm:h-[304px] object-cover" />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="flex justify-between p-2">
                <button className="bg-white-transparent shadow-lg rounded-xl px-3 py-1 text-[8px] sm:text-[10px] font-semibold text-primary capitalize">
                    Success Stories
                </button>
                <div className="w-8 h-8 sm:w-10 sm:h-10  rounded-full flex items-center justify-center">
                    <img src="/images/img_frame_20382.svg" alt="Icon" className="w-6 h-6 sm:w-9 sm:h-9" />
                </div>
            </div>
            {/* Bottom Content */}
            <div className="bg-white w-[96%] p-3 sm:p-4 shadow-lg rounded-tr-[20px]">
                <h3 className="text-[16px] sm:text-[20px] font-semibold text-primary mb-1">
                    {title}
                </h3>
                <p className="text-[8px] sm:text-[10px] font-normal text-primary">
                    {description}
                </p>
            </div>
        </div>
    </div>
);
function SuccessStories() {
    const successStories = [
        {
            title: "FinConnect",
            description: "Customer Relationship Management (CRM)",
            image: "/images/img_rectangle_3157.png"
        },
        {
            title: "HealthSync",
            description: "Health Tracking App for Patients and Doctors",
            image: "/images/img_rectangle_3157_304x400.png"
        },
        {
            title: "Commerce360",
            description: "Online Store, Multivendor Marketplace & E-commerce Apps",
            image: "/images/img_rectangle_3157_1.png"
        },
        {
            title: "PrintwithAI",
            description: "Web-to-Print Software / Online Design Tool / Product Designer Tool",
            image: "/images/img_rectangle_3157_2.png"
        },
        {
            title: "PM Insights",
            description: "Project Management Tool (SaaS & Hosted)",
            image: "/images/img_rectangle_3157_3.png"
        }
    ];
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 bg-overlay-light">
            {/* Success Stories Section */}
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {/* Box 1: Text Block */}
                    <div className="col-span-1 row-span-1 flex flex-col justify-center gap-4 sm:gap-6 bg-transparent">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight max-w-xs">
                            Success Stories
                        </h2>
                        <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed">
                            Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>

                    {/* Boxes 2–6: SuccessStoryCards */}
                    {successStories.slice(0, 5).map((story, index) => (
                        <SuccessStoryCard key={index} {...story} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories