import React from "react";
import { BoxReveal } from "../magicui/box-reveal";
import { motion } from "framer-motion";

const HeroSection = () => {
    const BgImage = "/college1.png";
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            className="relative h-[90vh] w-full bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${BgImage})`,
                backgroundPosition: "center center",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-950/60" />

            {/* Content */}
            <motion.div 
                className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6 lg:px-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Welcome Tag */}
                <motion.p 
                    className="text-[#f8a81c] hover:text-[#f7b93e] uppercase tracking-[0.2em] font-bold text-sm md:text-base mb-4 md:mb-6 transition-colors duration-300"
                    variants={itemVariants}
                >
                    🎓 Welcome to Major SD Singh!
                </motion.p>
                
                {/* Main Heading with Box Reveal */}
                <BoxReveal boxColor="#f8a81c" duration={0.8}>
                    <motion.h1 
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug lg:leading-[1.2] mb-6"
                        variants={itemVariants}
                    >
                        Start Your Beautiful <br />
                        And <span className="text-[#f8a81c]">Bright</span> Future
                    </motion.h1>
                </BoxReveal>

                {/* Description */}
                <motion.p 
                    className="text-white/90 text-sm md:text-base lg:text-lg mt-2 mb-8 max-w-2xl leading-relaxed"
                    variants={itemVariants}
                >
                    There are many variations of passages of Lorem Ipsum available but the
                    majority have suffered alteration in some repeat predefined chunks
                    form injected humour.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default HeroSection;