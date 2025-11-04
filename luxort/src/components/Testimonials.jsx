import React from "react";

const Testimonials = () => {
  const reviews = [
    { name: "Aarav Mehta", text: "Amazing service and beautiful location!" },
    { name: "Priya Sharma", text: "A perfect weekend getaway. Highly recommended!" },
    { name: "Rohan Patel", text: "The rooms were clean and the staff were friendly." },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Guests Say</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl p-6 max-w-sm">
            <p className="text-gray-600 mb-4">“{r.text}”</p>
            <h4 className="font-semibold text-gray-800">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
