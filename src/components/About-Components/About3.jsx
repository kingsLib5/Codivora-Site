import React from "react";

const services = [
  {
    title: "Search Engine Optimization",
    description: "Service Info",
    bgColor: "bg-gray-100",
    textColor: "text-green-700",
    img: "🔍",
  },
  {
    title: "Pay-per-click advertising",
    description: "Service Info",
    bgColor: "bg-green-400",
    textColor: "text-gray-900",
    img: "📺",
  },
  {
    title: "Social Media Marketing",
    description: "Service Info",
    bgColor: "bg-black",
    textColor: "text-white",
    img: "❤️",
  },
  {
    title: "Email Marketing",
    description: "Service Info",
    bgColor: "bg-gray-100",
    textColor: "text-green-700",
    img: "📧",
  },
  {
    title: "Content Creation",
    description: "Service Info",
    bgColor: "bg-green-400",
    textColor: "text-gray-900",
    img: "📝",
  },
  {
    title: "Analytics and Tracking",
    description: "Service Info",
    bgColor: "bg-black",
    textColor: "text-white",
    img: "📊",
  },
];

const About3 = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-green-700">Services</h2>
      <p className="text-gray-700 mt-2 text-lg">
        At our digital marketing agency, we offer a range of services to help businesses grow and
        succeed online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-12 rounded-xl shadow-lg ${service.bgColor} flex items-center justify-between min-h-[250px]`}
          >
            <div>
              <span className={`px-4 py-2 text-lg font-bold ${service.textColor} bg-white rounded`}>
                {service.title}
              </span>
              <p className="mt-6 text-lg font-semibold">{service.description}</p>
            </div>
            <span className="text-6xl">{service.img}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About3;
