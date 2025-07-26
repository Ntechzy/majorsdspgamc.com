'use client';
import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = ({ title, subtitle, images = [], Icon = null }) => {
  return (
    <>
      {title && subtitle && (
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <div className="inline-flex items-center justify-center text-[#0c0b08] text-4xl font-bold">
              {Icon && <Icon className="mr-2 w-8 h-8 text-[#1b1813]" />}
              {title}
            </div>
            <p className="text-black">{subtitle}</p>
          </div>
        </div>
      )}

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {images.map((img, index) => (
              <a
                key={index}
                href={img.original}
                className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={img.original}
                  alt={img.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </section>
    </>
  );
};

export default Gallery;
