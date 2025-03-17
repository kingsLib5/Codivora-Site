import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-16  min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        We <span className="text-blue-600">Navigate</span> the <br />
        digital landscape <br />
        for success
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 max-w-2xl text-base sm:text-lg">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition">
        Book a consultation
      </button>
    </section>
  );
};

export default About;
