import { HoverEffect } from "../ui/card-hover-effect";
import course from "../../data/coursedata";

function CardHoverEffectDemo() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
           Our <span className="text-yellow-400">Courses</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6" />
        </div>
        <HoverEffect items={course} />
      </div>
    </div>
  );
}

export default CardHoverEffectDemo;