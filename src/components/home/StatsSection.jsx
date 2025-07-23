import React from "react";
import { BookOpen, GraduationCap, UserRoundSearch, Trophy } from "lucide-react";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animated blob SVG component
const AnimatedBlob = ({ delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full z-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.8, 
          delay: delay * 0.2,
          type: "spring",
          damping: 10,
          stiffness: 100
        }
      } : {}}
    >
      <motion.path
        fill="#F8A81C"
        d="M60.3,-33.5C69.1,-19.5,61.1,5.6,48.2,29.3C35.4,53,17.7,75.3,-3.6,77.4C-24.8,79.4,-49.7,61.2,-63,37.3C-76.3,13.3,-78.2,-16.5,-65.7,-32.5C-53.3,-48.6,-26.7,-51.1,-0.5,-50.8C25.7,-50.6,51.4,-47.5,60.3,-33.5Z"
        transform="translate(100 100)"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={inView ? { 
          pathLength: 1,
          pathOffset: 0,
          transition: { 
            duration: 1.5, 
            delay: delay * 0.2,
            ease: "easeInOut"
          }
        } : {}}
      />
    </motion.svg>
  );
};

// Decorative floating particles
const FloatingParticles = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
        />
      ))}
    </>
  );
};

const stats = [
  {
    value: 124,
    label: "National Award",
    icon: <Trophy className="w-12 h-12 text-white" />,
    secondaryIcon: (
      <svg viewBox="0 0 24 24" className="absolute w-8 h-8 -top-2 -right-2 text-yellow-300">
        <path fill="currentColor" d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2Z" />
      </svg>
    )
  },
  {
    value: 392,
    label: "We have the best courses",
    icon: <BookOpen className="w-12 h-12 text-white" />,
    secondaryIcon: (
      <svg viewBox="0 0 24 24" className="absolute w-8 h-8 -top-2 -right-2 text-blue-300">
        <path fill="currentColor" d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />
      </svg>
    )
  },
  {
    value: 885,
    label: "Major S.D. Singh Has Professional Teacher",
    icon: <UserRoundSearch className="w-12 h-12 text-white" />,
    secondaryIcon: (
      <svg viewBox="0 0 24 24" className="absolute w-8 h-8 -top-2 -right-2 text-green-300">
        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      </svg>
    )
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      className="relative w-full py-20 text-white text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://majorsdspgamc.com/assets/images/Facility/majorsdspgamc-College-Other-Facility1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-blue-950/60 z-0" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-1">
        <FloatingParticles />
      </div>

      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-white relative z-10"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center relative"
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Animated SVG Blob Background */}
            <div className="relative w-35 h-35 mb-6">
              <AnimatedBlob delay={index} />
              
              {/* Icon on Top with animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { 
                  scale: 1, 
                  rotate: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2 + 0.3
                  }
                } : {}}
              >
                {stat.icon}
              </motion.div>
              
              {/* Secondary decorative icon */}
              {stat.secondaryIcon}
            </div>

            {/* Stat Number with animation */}
            <motion.h3 
              className="text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: index * 0.2 + 0.5 
                }
              } : {}}
            >
              <CountUp 
                start={0}  
                end={stat.value} 
                duration={2.5} 
                delay={index * 0.1}
                separator=","
              />+
            </motion.h3>

            {/* Stat Label with animation */}
            <motion.p 
              className="text-white/90 font-medium text-lg max-w-xs"
              initial={{ opacity: 0 }}
              animate={inView ? { 
                opacity: 1,
                transition: { 
                  delay: index * 0.2 + 0.7 
                }
              } : {}}
            >
              {stat.label}
            </motion.p>
            
            {/* Animated underline */}
            <motion.div 
              className="w-20 h-1 bg-yellow-400 mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { 
                scaleX: 1,
                transition: { 
                  delay: index * 0.2 + 0.9,
                  duration: 0.8,
                  type: "spring"
                }
              } : {}}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Decorative corner elements */}
      <svg className="absolute top-0 left-0 w-24 h-24 text-yellow-400/20" viewBox="0 0 100 100">
        <path fill="currentColor" d="M0,0 L100,0 L100,100 L0,100 Z" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-24 h-24 text-yellow-400/20" viewBox="0 0 100 100">
        <path fill="currentColor" d="M0,0 L100,0 L100,100 L0,100 Z" />
      </svg>
    </section>
  );
};

export default StatsSection;
