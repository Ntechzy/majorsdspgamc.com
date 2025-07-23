import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const getYouTubeId = (url) => {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const videoTestimonials = [
  {
    videoId: "https://www.youtube.com/embed/tCp0rUeoRH0?si=-dR5af7AdwATRr-x",
    name: "Alex Johnson",
    role: "Computer Science Graduate"
  },
  {
    videoId: "https://www.youtube.com/embed/eSVGRxfJB74?si=Ka4sbwAEe51o3NMX",
    name: "Sarah Williams",
    role: "Business Administration"
  },
  {
    videoId: "https://www.youtube.com/embed/x1-kKpqNPLM?si=nUdGI3kiakVlsEca",
    name: "Michael Chen",
    role: "Engineering Student"
  },
  {
    videoId: "https://www.youtube.com/embed/WCNChDAztcY?si=zxGYB8V48tcNrVJ1",
    name: "Priya Patel",
    role: "Medical Student"
  },
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
            Hear From Our <span className="text-[#f8a81c]">Students</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from our community about their learning experiences
          </p>
        </motion.div>

        {/* Video Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="pb-10"
        >
          {videoTestimonials.map((item, index) => {
            const id = getYouTubeId(item.videoId);
            const isActive = activeVideo === index;

            return (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="relative pt-[56.25%]">
                    {isActive ? (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={item.videoId + "&autoplay=1"}
                        title={`Student Testimonial ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-blue-950 cursor-pointer flex items-center justify-center"
                        onClick={() => setActiveVideo(index)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                          alt="Video Thumbnail"
                          className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <motion.div 
                          className="relative z-10"
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            opacity: hoveredIndex === index ? 1 : 0.9
                          }}
                        >
                          <svg
                            className="w-14 h-14 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </div>
                 
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button className="testimonial-prev bg-[#f8a81c] hover:bg-yellow-600 rounded-full p-3 transition-all duration-300 shadow-sm border border-gray-200">
            <svg
              className="w-5 h-5 text-white"
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
          <button className="testimonial-next bg-[#f8a81c] hover:bg-yellow-600 rounded-full p-3 transition-all duration-300 shadow-sm border border-gray-200">
            <svg
              className="w-5 h-5 text-white"
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

export default VideoTestimonials;