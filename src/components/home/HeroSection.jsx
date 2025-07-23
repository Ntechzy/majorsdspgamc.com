import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BoxReveal } from "../magicui/box-reveal";

const HeroSection = () => {
    const BgImage= "https://majorsdspgamc.com/assets/images/Media/majorsdspgamc-CAMPUS-2.webp"
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6">
        <p className="text-[#f8a81c] hover:text-[#f7b93e] uppercase tracking-widest font-bold text-sm mb-2">
          🎓 Welcome to Major SD Singh!
        </p>
  
  <BoxReveal  boxColor = "#f8a81c">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Start Your Beautiful <br />
          And <span className="text-[#f8a81c]">Bright</span> Future
        </h1>
</BoxReveal>
        <p className="text-white text-sm md:text-base mt-4 max-w-2xl">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some repeat predefined chunks
          form injected humour.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-[#f8a81c] text-black font-semibold px-6 py-3 rounded-tl-full rounded-tr-full rounded-br-full text-sm hover:bg-yellow-500 transition">
            ABOUT MORE →
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-tl-full rounded-tr-full rounded-br-full text-sm hover:bg-gray-100 transition">
            LEARN MORE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
