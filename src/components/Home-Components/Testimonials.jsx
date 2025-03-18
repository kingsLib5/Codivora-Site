import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  },
  {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  }, {
    text: "I recently started working with Positivus and have been very impressed with their professionalism...",
    name: "Alice Johnson",
    role: "Owner at 123",
  },
  {
    text: "Positivus has been a great partner. They are knowledgeable and we have seen a significant increase in website traffic...",
    name: "Bob Brown",
    role: "Director at XYZ",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-12 px-6 ">
      <h2 className="text-2xl  font-bold mb-4">
        <span className="bg-blue-500 text-black px-3 py-1 rounded">Testimonials</span>
      </h2>
      <p className="text-black mb-8">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="pb-16"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 text-white p-8 rounded-2xl border-2 border-black text-lg relative">
              <p className="mb-4">{testimonial.text}</p>
              <div className="absolute bottom-[-15px] left-6 border-l-[10px] border-l-transparent border-t-[10px] border-t-green-500 border-r-[10px] border-r-transparent"></div>
              <h4 className="text-blue-500 font-bold">{testimonial.name}</h4>
              <p className="text-sm text-white">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows Below Pagination */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button ref={prevRef} className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-500">
          <FaChevronLeft size={20} />
        </button>
        <button ref={nextRef} className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-500">
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
