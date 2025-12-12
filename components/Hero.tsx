import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

// Duplicate projects to create a seamless loop
const SCROLL_ITEMS = [...PROJECTS, ...PROJECTS];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      {/* Content Container */}
      <div className="container mx-auto px-6 mb-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-indigo-900 text-sm font-semibold mb-4">
            제29대 미디어스쿨 학생회
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-indigo-400">Moa</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            미디어스쿨 학우들의 목소리를 모아, 새로운 문화를 만들어갑니다.<br className="hidden md:block"/>
            우리의 대표 프로젝트를 확인해보세요.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full py-10">
        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 px-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {SCROLL_ITEMS.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="relative group w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-gray-100"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    자세히 보기 <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;