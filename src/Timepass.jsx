
        {/* Client Testimonials Section */}
        <section className="w-full py-16 sm:py-20 md:py-24">
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
              <div className="overflow-x-auto">
                <div className="flex gap-4 sm:gap-6 md:gap-8 min-w-max pb-4">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 right-0 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] -mt-16">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-30"
            />
          </div>
        </section>
        {/* Success Stories Section */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-overlay-light">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
              {/* Section Header */}
              <div className="lg:col-span-1">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight max-w-xs">
                    Success Stories
                  </h2>
                  <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed">
                    Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis.
                  </p>
                </div>
              </div>
              {/* Success Stories Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {successStories.slice(0, 4).map((story, index) => (
                    <SuccessStoryCard key={index} {...story} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="relative w-full py-16 sm:py-20 md:py-24">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[364px] h-[400px] sm:h-[500px] md:h-[650px]">
            <img
              src="/images/img_69.png"
              alt="Background Element"
              className="w-full h-full object-contain opacity-40"
            />
          </div>
          <div className="absolute top-1/2 right-0 w-[400px] sm:w-[500px] md:w-[638px] h-[400px] sm:h-[500px] md:h-[638px] -mt-32">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-30"
            />
          </div>
          <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Left Column - Innovation Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] rounded-[80px] p-8 sm:p-12 md:p-16 shadow-lg">
                  <div className="flex flex-col gap-6 sm:gap-8 items-center text-center">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white uppercase leading-tight">
                      Innovative Technologies Keeping Us Ahead
                    </h2>
                    <p className="text-[14px] sm:text-[16px] font-normal text-white-light leading-relaxed">
                      Discover the impact of bespoke digital solutions tailored precisely to your
                      business's distinct requirements.
                    </p>
                    <div className="w-full max-w-[300px] sm:max-w-[376px] h-[250px] sm:h-[300px] md:h-[376px]">
                      <img
                        src="/images/img_image_12.png"
                        alt="Innovation Illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column - Technology Lists */}
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center">
                {/* Web App Development */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <span className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white-overlay">
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
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <span className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white-overlay">
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
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <span className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white-overlay">
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
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <span className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white-overlay">
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
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <span className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white-overlay">
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
        {/* Featured Insights Section */}
        <section className="relative w-full py-16 sm:py-20 md:py-24">
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px]">
            <img
              src="/images/img_image_7.png"
              alt="Background Decoration"
              className="w-full h-full object-contain opacity-20"
            />
          </div>
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
        {/* Contact Section */}
        <section className="relative w-full py-16 sm:py-20 md:py-24">
          {/* Background Elements */}
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] md:w-[570px] h-[400px] sm:h-[500px] md:h-[570px] rounded-full">
            <img
              src="/images/img_gradient.png"
              alt="Gradient Background"
              className="w-full h-full object-contain opacity-60"
            />
          </div>
          <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-info-light rounded-[80px] p-6 sm:p-8 md:p-12 lg:p-16">
              <div
                className="bg-info rounded-[80px] p-8 sm:p-12 md:p-16 lg:p-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/img_.png')" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                  {/* Left Column - Contact Info */}
                  <div className="flex flex-col gap-6 sm:gap-8 items-center text-center">
                    {/* Character Illustration */}
                    <div className="w-[200px] sm:w-[250px] md:w-[320px] h-[200px] sm:h-[250px] md:h-[314px]">
                      <img
                        src="/images/img_3d_cartoon_youn.png"
                        alt="Contact Character"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Contact Title */}
                    <div className="flex flex-col gap-2 sm:gap-4">
                      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white uppercase leading-tight">
                        Contact Us
                      </h2>
                      <p className="text-[12px] sm:text-[14px] font-normal text-white text-center leading-relaxed">
                        Talk with us to know how we can make you a part of a thriving digital landscape
                      </p>
                    </div>
                    {/* Contact Details */}
                    <div className="bg-success-light rounded-xl p-4 sm:p-5 md:p-6 w-full max-w-md">
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
                  <div className="bg-light rounded-[20px] p-6 sm:p-8 md:p-10 relative">
                    {/* Form Header */}
                    <div className="flex justify-between items-start mb-6 sm:mb-8">
                      <h3 className="text-[20px] sm:text-[24px] font-semibold text-primary capitalize">
                        Let us talk!
                      </h3>
                      <div className="w-[80px] sm:w-[100px] md:w-[108px] h-[80px] sm:h-[100px] md:h-[108px]">
                        <img
                          src="/images/img_material_symbol.png"
                          alt="Form Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* Contact Form */}
                    <form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                      {/* Name Field */}
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                          What is your name?
                        </label>
                        <div className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px] flex items-center">
                          <img
                            src="/images/img_blinking_cursor.svg"
                            alt="Cursor"
                            className="w-6 h-6 sm:w-7 sm:h-7"
                          />
                        </div>
                      </div>
                      {/* Email Field */}
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                          What is your email address?
                        </label>
                        <div className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px]"></div>
                      </div>
                      {/* Phone Field */}
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                          What is your phone number?
                        </label>
                        <div className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px]"></div>
                      </div>
                      {/* Service Field */}
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                          What are you looking for?
                        </label>
                        <div className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[36px]"></div>
                      </div>
                      {/* Message Field */}
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="text-[10px] sm:text-[12px] font-normal text-primary">
                          How can we help you?
                        </label>
                        <div className="bg-white-transparent rounded border-0 p-2 sm:p-3 min-h-[80px] sm:min-h-[104px]"></div>
                      </div>
                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="bg-black text-white rounded-[28px] capitalize mt-4 sm:mt-6"
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
        </section>
        {/* Footer */}
        <footer className="w-full bg-header py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
                {/* Company Info */}
                <div className="flex flex-col gap-6 sm:gap-8">
                  {/* Logo */}
                  <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[30px] sm:h-[35px] md:h-[40px]">
                    <img
                      src="/images/img_logo_final_1.svg"
                      alt="Chomesy Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Description */}
                  <p className="text-[10px] sm:text-[12px] font-normal text-white-transparent leading-relaxed max-w-md">
                    Not just about software & Product development; we are your tech partners, crafting
                    modern digital solutions for next-gen excellence!
                  </p>
                  {/* Legal Links */}
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[12px] font-normal text-white-transparent">
                    <span>Terms</span>
                    <span>|</span>
                    <button className="hover:text-white transition-colors">Privacy</button>
                  </div>
                  {/* Contact Info */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src="/images/img_phone_light_blue_a700.svg"
                        alt="Phone"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="text-[14px] sm:text-[16px] font-semibold text-white">
                        +1 315 308 0901
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
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
                {/* Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:col-span-2">
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