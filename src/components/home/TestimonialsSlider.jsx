import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "BAMS Graduate",
    image: "https://i.pinimg.com/736x/f1/ed/45/f1ed4533538fcacee1c25d77acbe9930.jpg",
    text: "SAS Ayurvedic College provided a strong foundation in Ayurvedic principles and hands-on training. The personalized guidance from faculty helped me become a confident practitioner.",
    rating: 99,
  },
  {
    name: "Rahul Verma",
    role: "Intern - Ayurvedic Hospital",
    image: "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    text: "The clinical exposure I received at the college hospital gave me real-world experience in diagnosing and treating patients with classical Ayurvedic methods.",
    rating: 99,
  },
  {
    name: "Neha Tripathi",
    role: "Final Year BAMS Student",
    image: "https://i.pinimg.com/736x/f1/ed/45/f1ed4533538fcacee1c25d77acbe9930.jpg",
    text: "From herbal garden visits to in-depth lectures on Charaka Samhita, every part of the curriculum is immersive and enriching. I’m proud to be part of this institution.",
    rating: 99,
  },
  {
    name: "Dr. Saurabh Mishra",
    role: "PG Scholar – Kayachikitsa",
    image: "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    text: "The advanced PG department and experienced gurus make this college a center of excellence for Ayurvedic learning and research. The atmosphere here truly reflects Ayurvedic values.",
    rating: 99,
  },
];


const TestimonialsSlider = () => {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-blue-950/90 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://majorsdspgamc.com/assets/images/Facility/majorsdspgamc-College-Other-Facility1.webp')",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-400 uppercase font-bold tracking-wider text-sm mb-2">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Students Say</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hear from our students about their transformative experiences and success stories.
          </p>
        </motion.div>

        {/* Swiper with enhanced controls */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
            bulletClass: "swiper-pagination-bullet bg-gray-300 opacity-70",
            bulletActiveClass: "swiper-pagination-bullet-active bg-yellow-400",
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-2xl px-8 py-10 relative overflow-hidden border border-white/10 h-[50vh]"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-yellow-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                  {item.rating}
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-200 italic text-center mb-8 text-lg leading-relaxed">
                  "{item.text}"
                </p>

                {/* Footer with image & name */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-2 border-yellow-400 object-cover shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-xl">{item.name}</h4>
                  <p className="text-yellow-400 text-sm uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination and navigation */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          <button className="testimonial-prev bg-white/10 hover:bg-yellow-400/30 rounded-full p-3 transition-colors duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <div className="testimonial-pagination flex space-x-2" />
          
          <button className="testimonial-next bg-white/10 hover:bg-yellow-400/30 rounded-full p-3 transition-colors duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;