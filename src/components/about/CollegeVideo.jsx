import React from 'react';

const CollegeVideo = () => {
  return (
    <section className="bg-white px-6 md:px-40 py-10">
      <div className="relative w-full overflow-hidden pt-[45%] rounded-xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/so4ZuBbBCwA?si=qx4fxGo-rRjkCE_t"
          allowFullScreen
          title="College Introduction Video"
          id="college-video"
        ></iframe>
      </div>
    </section>
  );
};

export default CollegeVideo;
