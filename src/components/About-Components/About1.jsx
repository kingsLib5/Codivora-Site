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
      Our agency helps businesses grow and succeed <br /> 
                    online through a range of services including social media <br /> 
                    adverstment, management and marketing, Ecommerce development, Business 
                    Management software(Inventory) <br /> and Web development .
      </p>

      {/* CTA Button */}
      <a 
  href="/your-link" 
  className="inline-block w-[70%] text-center max-w-[300px] md:max-w-none md:w-[30%]"
>
  <button className="relative text-white bg-[#1a1a24] w-[70%] h-[50px] md:h-[60px] overflow-hidden border-2 border-gray-900 px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
    <span className="relative">Chat Us Today</span>
  </button>
</a>
    </section>
  );
};

export default About1;
