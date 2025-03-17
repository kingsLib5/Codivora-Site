import React from "react";

const aboutLogos = [
  { src: "/src/assets/amazon.svg", alt: "Amazon" },
  { src: "/src/assets/dribbbble.svg", alt: "Dribbbble" },
  { src: "/src/assets/hubspot.svg", alt: "HubSpot" },
  { src: "/src/assets/notion.svg", alt: "Notion" },
  { src: "/src/assets/netflix.svg", alt: "Netflix" },
  { src: "/src/assets/zoom.svg", alt: "Zoom" },
];

const About2 = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-12 p-8 bg-white mb-20">
      {aboutLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-15 sm:h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      ))}
    </section>
  );
};

export default About2;
