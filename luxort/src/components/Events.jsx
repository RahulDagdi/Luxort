import React from "react";

const Events = () => {
  return (
    <div>
     
      <section className="container mx-auto px-6 mt-32 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3 max-w-md">
          <div className="uppercase tracking-wide text-xs font-medium opacity-60 mb-2">
            Unforgettable Events at Luxort
          </div>
          <h3 className="text-2xl font-light tracking-wide mb-4">
            Celebrate Life’s Finest Moments in Style and Elegance
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            At Luxort, we create extraordinary settings for unforgettable events. Whether you’re planning an intimate gathering or a grand celebration.
          </p>
        </div>

        <div className="lg:w-2/3 flex gap-4 overflow-x-auto no-scrollbar">
          <div className="flex-shrink-0 w-2/6 h-32 bg-gray-300 rounded"></div>
          <div className="flex-shrink-0 w-2/6 h-32 bg-gray-400 rounded"></div>
          <div className="flex-shrink-0 w-2/6 h-32 bg-gray-400 rounded"></div>
        </div>
      </section>

 
      <div className="container mx-auto px-6 mt-2 max-w-[25rem] flex justify-between text-xs font-semibold text-gray-600">
        <span>01 WEDDINGS</span>
        <button className="flex items-center gap-1 hover:underline">
          Next <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Events;
