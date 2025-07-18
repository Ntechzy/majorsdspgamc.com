import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full bg-white px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Content */}
      <div className="max-w-lg space-y-5">
        <div className="flex items-center gap-2 text-orange-500 font-medium uppercase tracking-wider">
          <span className="text-xl">🎓</span>
          <span>College Tour</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore Our <span className="text-[#f8a81c]">Beautiful Campus</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Take a virtual tour of our college and experience the environment where future leaders are shaped. From modern classrooms to lush green surroundings, discover what makes us unique.
        </p>
        <button className="bg-[#f8a81c] hover:bg-[#f7b93e] transition-all text-white font-bold px-6 py-4 flex items-center gap-2 text-sm shadow-md rounded-tl-full rounded-tr-full rounded-br-full">
          Explore More →
        </button>
      </div>

      {/* Right Video Embed */}
      <div className="w-full max-w-2xl relative">
        <div className="overflow-hidden rounded-2xl aspect-video shadow-xl border-4 border-white ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EN4lnsJCpZk?si=Rmjj2lnvFUkZjOzI"
            title="Campus Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200">
          <span className="text-sm font-medium text-gray-700">🎓 360° Campus View</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
