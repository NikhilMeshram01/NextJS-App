import React from 'react'

interface BlogPostProps {
    title: string;
    description: string;
    image: string;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ title, description, image }) => (
    <div className="bg-[#111627] bg-transparent rounded-[20px] p-4 sm:p-5 w-full max-w-[412px] mx-auto">
        <div className="flex flex-col gap-3 sm:gap-4">
            {/* Image */}
            <div className="w-full h-[150px] sm:h-[212px] rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="flex justify-between items-start gap-3">
                <h3 className="text-[14px] sm:text-[16px] font-semibold text-white leading-tight flex-1">
                    {title}
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10  rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_frame_20382_black_900.svg" alt="Arrow" className="w-4 h-4 sm:w-10 sm:h-10" />
                </div>
            </div>
            <p className="text-[10px] sm:text-[12px] font-normal text-white-medium leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);
function FeaturedInsights() {
    const blogPosts = [
        {
            title: "Successful MVP Launches That Changed the Game.",
            description: "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
            image: "/images/img_rectangle_3160.png"
        },
        {
            title: "How Our AI Product Development Company is Pioneering Innovation?",
            description: "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we are shaping the future. Click to explore our journey and join us in revolutionizing industries.",
            image: "/images/img_rectangle_3160_212x372.png"
        },
        {
            title: "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
            description: "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
            image: "/images/img_rectangle_3160_1.png"
        }
    ];
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 ">
            {/* Featured Insights Section */}
            {/* Background Decoration */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px]">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-20"
            />
          </div> */}
            <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight">
                            Featured Insights
                        </h2>
                        <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed max-w-2xl">
                            Were you looking to explore a specific topic? You are in the right spot.
                        </p>
                    </div>
                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogPostCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedInsights