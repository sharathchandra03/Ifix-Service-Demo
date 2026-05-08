import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-black">
      {/* Live Shader Background */}
      <ShaderBackground />

      {/* Soft dark vignette overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none z-[1]"></div>
      
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div ref={addToRefs} className="inline-block px-4 py-1.5 rounded-full border border-glassBorder bg-glass mb-8 backdrop-blur-md">
          <span className="text-xs md:text-sm font-medium text-secondary uppercase tracking-wider">Premium Apple Service Center in Bangalore</span>
        </div>
        
        <h1 ref={addToRefs} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Revive your <br/>
          <span className="text-gradient">favorite devices.</span>
        </h1>
        
        <p ref={addToRefs} className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          Experience the highest standard of repair for your iPhone, iPad, and MacBook. We bring your technology back to life with precision and care.
        </p>
        
        <div ref={addToRefs} className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#ED1C24] hover:bg-red-700 text-white px-8 py-4 rounded-full text-base font-bold transition-transform duration-300 hover:scale-105 flex items-center gap-2 group shadow-[0_0_20px_rgba(237,28,36,0.4)]">
            Fix My Device
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-glass border border-glassBorder text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
