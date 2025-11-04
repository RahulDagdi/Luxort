import React from "react";

const Newsletter = () => {
  return (
  <section className="mt-32 bg-[#2E3C34] text-white text-center py-16 px-6 rounded max-w-3xl mx-auto">
        <h5 className="text-2xl font-light tracking-widest mb-6">
          GET EXCLUSIVE OFFERS,<br /> EVENT UPDATES, AND INSIDER NEWS
        </h5>
        <form className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full py-2 px-4 text-gray-900 rounded focus:outline-none"
          />
          <button type="submit" className="bg-[#1C2B26] px-6 py-2 uppercase text-sm tracking-wide rounded hover:bg-[#164028] transition">
            Submit
          </button>
        </form>
      </section>
  );
};

export default Newsletter;
