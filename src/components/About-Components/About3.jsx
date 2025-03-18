import React, { useEffect } from 'react'

function About3() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0)";
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.service-header, .service-subheader, .service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
