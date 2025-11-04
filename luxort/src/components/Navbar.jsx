import React from "react";

const Navbar = () => (
  <nav className="flex justify-between items-center border-b border-gray-300 px-6 py-3 text-sm">
        <div className="flex space-x-8 uppercase font-semibold text-gray-700">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#events" className="hover:underline">Events</a>
        </div>
        <div className="flex items-center space-x-6 text-gray-600 text-xs font-semibold uppercase">
          <span>LUXORT</span>
          <div className="flex items-center gap-1 cursor-pointer border border-gray-400 px-2 rounded">
            EN <span>▾</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <path d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
            </svg>
            +123 7644 9870
          </div>
          <button className="border border-gray-400 px-4 py-1 text-xs font-semibold uppercase hover:bg-gray-300 rounded transition">
            Login
          </button>
        </div>
      </nav>
);

export default Navbar;
