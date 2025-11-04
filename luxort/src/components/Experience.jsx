import React from "react";

const Experience = () => {
  return (
        <section className="container mx-auto px-6 mt-32 max-w-4xl text-center">
        <div className="uppercase text-xs font-medium tracking-widest opacity-60 mb-1">Hotel Highlights</div>
        <h3 className="text-3xl font-light tracking-wide mb-3">Experience the Extraordinary</h3>
        <p className="max-w-xl mx-auto text-sm text-gray-700 mb-12 leading-relaxed">
          Experience elegance and comfort in our Luxury Rooms & Suites, where modern amenities and timeless design create the perfect retreat.
        </p>

   
        <div className="flex justify-center space-x-3 text-xs text-gray-600 font-semibold uppercase tracking-wide border-b border-gray-300 pb-2 mb-8 cursor-pointer flex-wrap">
          {["Swimming Pool", "Fine Dining Restaurant", "Luxury Rooms & Suites", "Spa & Wellness"].map((item) => (
            <div key={item} className="hover:text-[#1C2B26] border-b-2 border-transparent hover:border-[#1C2B26] px-3 py-1 transition">
              {item}
            </div>
          ))}
        </div>

        <div className="bg-gray-300 h-48 rounded"></div>
      </section>
  );
};

export default Experience;
