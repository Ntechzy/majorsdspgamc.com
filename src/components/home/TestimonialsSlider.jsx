import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Randal Grand",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 99,
  },
  {
    name: "Edward Miles",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 99,
  },
  {
    name: "Ninal Gordon",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 99,
  },
  {
    name: "Anthony Nicoll",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 99,
  },
];

const TestimonialsSlider = () => {
  return (
    <section
      className="relative w-full py-14 text-white text-center"
      style={{
        backgroundImage:
          "url('https://majorsdspgamc.com/assets/images/Facility/majorsdspgamc-College-Other-Facility1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-950/60 z-0" />
      <div className="text-center mb-10">
        <h3 className="text-orange-400 uppercase font-bold tracking-wide">Testimonials</h3>
        <h2 className="text-4xl font-bold mt-2">
          What Our Students <span className="text-yellow-400">Say's</span>
        </h2>
        <p className="text-gray-200 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-gray-800 rounded-3xl shadow-xl px-6 py-8 relative">
              {/* Rating Badge */}
              <div className="absolute top-0 right-0 bg-yellow-400 text-white font-bold px-3 py-1 rounded-bl-2xl rounded-tr-3xl text-sm">
                {item.rating}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400 text-lg">
                {"★★★★★".split("")}
              </div>

              {/* Text */}
              <p className="italic text-sm text-gray-600 mb-6">{item.text}</p>

              {/* Footer with image & name */}
              <div className="flex items-center gap-3 mt-4 border-t pt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-orange-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSlider;
