import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative pointer-events-none">
      <motion.div 
        style={{ opacity, scale }}
        className="text-center z-10 flex flex-col items-center"
      >
        <h1 className="text-xs md:text-sm font-mono tracking-[0.5em] mb-4 text-red-500 uppercase">
          Demonstración visual
        </h1>
        <div className="text-4xl md:text-7xl font-bold uppercase font-['Oswald'] tracking-tight leading-none">
          Why <span className="text-red-600">PI</span> is<br />
          Irrational
        </div>
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 text-[10px] md:text-xs font-mono tracking-widest animate-pulse text-gray-400"
      >
        SCROLL TO INITIATE SEQUENCE
      </motion.div>
    </section>
  );
};

export default Hero;