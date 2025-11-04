import React from "react";

const Partners = () => {
  return (
      <section className="container mx-auto px-6 mt-32 flex justify-center gap-10 text-xs font-semibold text-gray-700 opacity-80 flex-wrap cursor-default select-none">
        {[
          "Capsule",
          "Biosynthesis",
          "Galileo",
          "Sphenule",
          "PostalPoint",
          "Galileo",
          "Neitzsche",
        ].map((partner, idx) => (
          <div key={idx}>{partner}</div>
        ))}
      </section>
  );
};

export default Partners;
