import React from "react";
import PageBanner from "../../components/shared/PageBanner";

const CollegeFacilities = () => {
  const campusImages = [
    { id: 1, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility.webp", alt: "Main building" },
    { id: 2, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility2.webp", alt: "Library" },
    { id: 3, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility8.webp", alt: "Classroom" },
    { id: 4, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility9.webp", alt: "Classroom" },
    { id: 5, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility10.webp", alt: "Classroom" },
    { id: 6, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility11.webp", alt: "Classroom" },
    { id: 7, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility12.webp", alt: "Classroom" },
    { id: 8, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility13.webp", alt: "Classroom" },
    { id: 9, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility16.webp", alt: "Classroom" },
    { id: 10, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility17.webp", alt: "Classroom" },
    { id: 11, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility18.webp", alt: "Classroom" },
    { id: 12, src: "https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility19.webp", alt: "Classroom" },
  ];

  const campusVideos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/MogcmLkwZPk",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/jNTT7GJsdtA",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/XSbVLvDpDqw",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/p2PcCCsRF58",
    },
  ];

  return (
    <>
      <PageBanner
        title="College & Other Facilities"
        path={["College & Other Facilities"]}
      />

      {/* Image Gallery */}
      <section className="py-12 px-6 md:px-12 mt-4">
        <h2 className="text-5xl font-bold mb-6 text-center text-amber-500">
          Campus Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {campusImages.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-6 md:px-12 mt-4 bg-white">
        <h2 className="text-5xl font-bold mb-6 text-center text-amber-500">
          Campus Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {campusVideos.map((video) => (
            <div
              key={video.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={`video-${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollegeFacilities;
