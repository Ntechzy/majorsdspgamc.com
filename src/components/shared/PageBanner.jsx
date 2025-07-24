import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router

const PageBanner = ({ title = "Page Title", path = [] }) => {
  return (
    <div
      className="relative w-full h-[50vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/page-img.png')`, // static background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <div className="flex justify-center items-center text-sm font-medium">
          <Link to="/" className="text-white hover:text-[#f8a814] transition">
            Home
          </Link>
          {path.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 mx-1 text-white" />
              <span className={`${index === path.length - 1 ? 'text-[#f8a814]' : 'text-white'}`}>
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
