import React from "react";

const HeroSection = () => (
    <section className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 text-6xl font-thin leading-tight tracking-wide">
            WELCOME TO <br /> LUXORT
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6 text-gray-700 text-sm font-light tracking-wide max-w-xl">
            <p>
              Discover a world where luxury and comfort blend seamlessly,
              offering unforgettable experiences in a setting of elegance and tranquility.
            </p>
            <div className="space-x-4">
              <button className="bg-[#1C2B26] text-white uppercase py-2 px-6 text-xs tracking-widest hover:bg-[#164028] rounded transition">Book Your Stay</button>
              <button className="border border-[#1C2B26] text-[#1C2B26] uppercase py-2 px-6 text-xs tracking-widest hover:bg-[#1C2B26] hover:text-white rounded transition">
                Explore Our Suites
              </button>
            </div>
          </div>
        </div>

        {/* Slider Mimic */}
        <div className="flex gap-4 mt-10">
          <div className="flex-1 bg-gray-300 h-36 rounded"></div>
          <div className="flex-1 bg-gray-400 h-36 rounded"></div>
          <div className="flex-1 bg-gray-400 h-36 rounded"></div>
        </div>
        <div className="flex justify-between mt-2 text-xs font-semibold text-gray-600 px-2 max-w-md">
          <span>01 GREEN AREA</span>
          <button className="flex items-center gap-1 hover:underline">
            Next <span>→</span>
          </button>
        </div>
      </section>
);

export default HeroSection;
