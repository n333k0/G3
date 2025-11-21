import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Manifesto: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const slides = [
    {
      id: 1,
      title: "DESTROY NEGATIVE ENERGY",
      subtitle: "THE POWER OF TECHNO",
      image: "https://picsum.photos/800/1200?grayscale",
      text: "Logic breaks down at the infinite. We embrace the chaos of the irrational number. There is no pattern, only the relentless drive forward."
    },
    {
      id: 2,
      title: "PURE MATHEMATICS",
      subtitle: "VS HUMAN EMOTION",
      image: "https://picsum.photos/800/1201?grayscale",
      text: "The circle is perfect. The ratio is impossible. In this gap, we find the rhythm of existence. 140 BPM heartbeats synchronized with the universe."
    },
    {
      id: 3,
      title: "BRUTALIST REALITY",
      subtitle: "NO ORNAMENTS",
      image: "https://picsum.photos/800/1202?grayscale",
      text: "Strip away the decoration. Reveal the raw structure. Concrete, steel, and data. This is the aesthetic of the truth."
    },
    {
      id: 4,
      title: "THE VOID",
      subtitle: "ENTER THE UNKNOWN",
      image: "https://picsum.photos/800/1203?grayscale",
      text: "As the digits expand, so does our consciousness. There is no end. Only the scroll."
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          {slides.map((slide, i) => (
            <div key={slide.id} className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center p-4 md:p-12 border-r border-neutral-900 bg-black/80 backdrop-blur-sm">
              
              {/* Background "Slide Number" */}
              <div className="absolute top-4 left-4 text-[10rem] font-bold text-neutral-900 select-none -z-10 font-['Oswald']">
                0{i + 1}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl w-full">
                <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-neutral-900 relative overflow-hidden group">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply"></div>
                  <div className="absolute bottom-0 left-0 bg-red-600 text-black p-2 font-mono text-xs uppercase">
                    Ref_Img_{slide.id}.jpg
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 text-left">
                  <h3 className="text-red-500 font-mono text-sm tracking-widest mb-2">{slide.subtitle}</h3>
                  <h2 className="text-5xl md:text-8xl font-['Oswald'] font-bold uppercase mb-6 leading-[0.9] techno-glitch" data-text={slide.title}>
                    {slide.title}
                  </h2>
                  <p className="font-mono text-neutral-400 md:text-lg border-l-2 border-red-600 pl-6">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;