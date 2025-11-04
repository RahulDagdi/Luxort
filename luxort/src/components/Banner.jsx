import React from "react";

const AnnouncementBanner = () => (
  <div className="bg-[#1C2B26] text-xs font-semibold uppercase tracking-wide text-white py-2 px-6 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          EXCLUSIVE OFFER! 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! &nbsp;&nbsp;&nbsp;
          EXCLUSIVE OFFER! 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! &nbsp;&nbsp;&nbsp;
          EXCLUSIVE OFFER! 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY!
        </div>
        
          <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        /* Hide scrollbar for no-scrollbar class */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </div>
      
);

export default AnnouncementBanner;
