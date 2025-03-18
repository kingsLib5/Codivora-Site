import React from "react";

const About1 = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-16  h-[70vh]">
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
      <button className="relative text-white bg-[#1a1a24] w-[20%] h-[60px] overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300">
          <span className="relative">Chat Us Today</span>
      </button>
    </section>
  );
};

export default About1;
