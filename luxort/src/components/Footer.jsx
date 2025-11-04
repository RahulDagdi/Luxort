import React from "react";

const Footer = () => {
  return (
   <footer className="bg-[#1C2B26] text-gray-300 py-12 text-sm font-light tracking-wide mt-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="uppercase font-semibold text-white mb-2">Luxort</h6>
            <p className="max-w-xs leading-relaxed">
              Luxury resort where timeless elegance meets modern luxury, offering seamless experiences and unforgettable memories.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold text-white mb-2">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#events" className="hover:underline">Events</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold text-white mb-2">Social Media</h6>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">X</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs opacity-80 mt-12">&copy; 2025 Luxort. All Rights Reserved.</div>

        <div className="container mx-auto px-6 flex justify-between text-xs mt-4 text-gray-400">
          <a href="#terms" className="hover:underline">Terms & Conditions</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
  );
};

export default Footer;
