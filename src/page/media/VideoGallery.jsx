import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import NewsletterSection from "../../components/shared/NewsletterSection";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/6yljVMFbzDg?si=OzmD9jnvsJOCNFpY",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/YH4_JbyR0uw?si=hvh6jmIhGVPlIkI_",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/iv8vRgmML1s?si=IptbgfytlhPrXUrh",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/tCp0rUeoRH0?si=ntSFIEhBliIsqp8i",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/y5xktd1yaQc?si=x9_JMfjZCMOCbOWX",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/DxjGADNmlL4?si=ETYrUp_ufk80WPfn",
  },
];

const VideoGallery = () => {
  return (
    <>
      <PageBanner title="Video Gallery" path={["Video Gallery"]} />

      <section className="py-12 px-10 md:px-12 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
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

      <NewsletterSection />
    </>
  );
};

export default VideoGallery;
