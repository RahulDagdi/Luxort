import React, { useState } from "react";

const FAQ = () => {

     const [activeFAQ, setActiveFAQ] = useState(null);
 const faqItems = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Our check-in time is from 3:00 PM & check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.",
  },
  {
    question: "Does the hotel offer airport transportation?",
    answer: "Yes, we offer airport shuttle services upon request.",
  },
  { question: "Does the hotel have dining options?", answer: "Yes, multiple dining options are available." },
  {
    question: "Do you host weddings or special events?",
    answer: "Yes, we specialize in hosting weddings and events.",
  },
];

  return (
      <section className="container mx-auto px-6 mt-32 max-w-3xl">
        <h4 className="font-semibold text-xl mb-10 tracking-wide">Frequently Asked Questions</h4>
        <div className="bg-white rounded border border-gray-300 shadow divide-y divide-gray-300">
          {faqItems.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium text-sm focus:outline-none"
                onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
              >
                {item.question}
                <span>{activeFAQ === idx ? '-' : '+'}</span>
              </button>
              {activeFAQ === idx && (
                <div className="px-6 pb-6 text-gray-700 text-sm">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
  );
};

export default FAQ;
