import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title = "Page Title", path = [] }) => {
  return (
    <div
      className="relative w-full h-[60vh] min-h-[300px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/page-img.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Adds parallax effect
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-0" />

      {/* Content container */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          {title}
        </h1>
        
        {/* Breadcrumb navigation */}
        <nav className="flex justify-center items-center text-base font-medium">
          <Link 
            to="/" 
            className="text-white hover:text-[#f8a814] transition-colors duration-200 flex items-center"
          >
            Home
          </Link>
          
          {path.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 mx-2 text-white/80" />
              <span className={`${index === path.length - 1 ? 'text-[#f8a814] font-semibold' : 'text-white'}`}>
                {item}
              </span>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f8a814] to-transparent opacity-60" />
    </div>
  );
};

export default PageBanner;