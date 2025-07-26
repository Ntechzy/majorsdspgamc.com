import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import achievements from "../../data/achievements";


function AchievementSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Needed for custom navigation after initial render
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10 text-center text-black">
        Our <span className="text-amber-500">Certificate</span>
      </h2>

      {/* Mobile Carousel with Custom Navigation */}
      <div className="block lg:hidden relative">
        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 -left-3 z-10 transform -translate-y-1/2">
          <button
            ref={prevRef}
            className="bg-white hover:bg-blue-700 text-black rounded-full p-2 shadow-lg"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 -right-3 z-10 transform -translate-y-1/2">
          <button
            ref={nextRef}
            className="bg-white hover:bg-blue-700 text-black rounded-full p-2 shadow-lg"
          >
            &#8594;
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation, Pagination]}
        >
          {achievements.map(({ id, imageUrl }) => (
            <SwiperSlide key={id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid on larger screens */}
      <div className="hidden lg:grid gap-8 grid-cols-4">
        {achievements.map(({ id, imageUrl }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementSection;

