"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3D Rotation based on scroll progress
  const rotateY = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 15]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]" id="home">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6">
              AVAILABLE FOR HIRE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                Dhruv Kapatel.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              AI & Data Science Engineer specialized in Machine Learning, Generative AI, and building intelligent scalable systems.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 text-white rounded-full font-bold hover:bg-white/10 transition-colors border border-white/10">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-12 lg:mt-0"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d"
              }}
              className="relative w-64 h-80 md:w-80 md:h-[400px] cursor-grab active:cursor-grabbing group"
            >
              {/* Back glow effect translated on Z axis */}
              <div
                className="absolute inset-[-10px] bg-linear-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-[3rem] blur-2xl opacity-40 animate-pulse group-hover:opacity-70 transition-opacity duration-500"
                style={{ transform: "translateZ(-80px)" }}
              />

              {/* Glassmorphism Backdrop */}
              <div
                className="absolute inset-[-15px] bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl"
                style={{ transform: "translateZ(-20px)" }}
              />

              {/* Image Frame */}
              <div
                className="absolute inset-0 rounded-[3rem] p-1.5 bg-linear-to-br from-white/30 via-white/5 to-transparent z-10 overflow-hidden"
                style={{ transform: "translateZ(30px)" }}
              >
                <img
                  src="/photo.jpeg"
                  alt="Dhruv Kapatel"
                  className="w-full h-full object-cover rounded-[2.7rem] shadow-inner filter contrast-100 group-hover:contrast-125 transition-all duration-500"
                />
              </div>

              {/* Floating Icon 1 */}
              <motion.div
                animate={{ y: [-15, 10, -15], rotateZ: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 bg-black/60 backdrop-blur-2xl border border-white/20 p-4 rounded-3xl shadow-xl z-20"
                style={{ transform: "translateZ(60px)" }}
              >
                <span className="text-3xl">🧠</span>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-10 bottom-12 bg-black/70 backdrop-blur-2xl border border-white/20 px-5 py-3 rounded-[2rem] shadow-xl z-20 flex items-center gap-3"
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Open to Work</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
