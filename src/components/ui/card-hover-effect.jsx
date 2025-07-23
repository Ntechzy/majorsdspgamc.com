import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Import your images or use placeholder URLs
const courseImages = {
  bams: "https://sgtuniversity.ac.in/assets/images/faculty/ims/programmes/Bachelor_of_Ayurvedic_Medicine_and_Surgery.webp",
  prasuti: "https://webfiles.amrita.edu/2021/09/8ngr6lmd-chem-1-",
  shalya: "/images/shalya.jpg",
  nursing: "/images/nursing.jpg",
  pharmacist: "/images/pharmacist.jpg",
};

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8 bg-gray-100",
        className
      )}
    >
      {items.map((item, idx) => {
        // Get image based on course
        const imagePath = courseImages[item.link.split('/')[2].replace('-', '')] || "/images/default-course.jpg";
        
        return (
          <a
            href={item?.link}
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-amber-300/80 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="h-50 w-full overflow-hidden rounded-t-lg mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-50 object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-medium px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                  Duration: {item.duration}
                </span>
                <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                  Seats: {item.seats}
                </span>
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-tl-4xl rounded-tr-4xl rounded-br-4xl h-full w-full p-0 overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl relative z-20",
        className
      )}
    >
      <div className="p-6">
        <div className="relative z-50 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-amber-600 font-bold text-xl leading-snug tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-2 text-gray-600 text-sm leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
};