import React from "react";

const AboutSection = () => (
     <section className="container mx-auto px-6 mt-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3 max-w-md">
            <div className="uppercase tracking-wide text-xs font-medium opacity-60 mb-2">About Luxort</div>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Luxort, we redefine the meaning of luxury hospitality. Our hotel offers a seamless blend of classic style and modern comfort, providing guests with unique and memorable experiences.
            </p>

            <div className="flex items-center mt-10 space-x-4 opacity-90">
              <div className="bg-gray-400 rounded-full w-16 h-16"></div>
              <div>
                <p className="italic text-gray-700 max-w-xs">
                  Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your perfect escape.
                </p>
                <p className="font-semibold mt-4">— Rodrigo Palipo</p>
                <p className="text-xs">Founder of Luxort</p>
              </div>
            </div>
          </div>

          {/* Right Content Slider */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            <div className="bg-gray-300 h-48 rounded"></div>
            <div className="bg-gray-400 h-24 rounded"></div>
            <div className="flex justify-between text-xs font-semibold text-gray-600 px-2">
              <span>01 COMFY AREA</span>
              <button className="flex items-center gap-1 hover:underline">
                Next <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
);

export default AboutSection;
