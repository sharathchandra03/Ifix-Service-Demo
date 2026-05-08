import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Smile, ThumbsUp, Cpu, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "1M+",
    label: "Gadgets Repaired",
    icon: <Smartphone className="w-10 h-10 text-white" />
  },
  {
    value: "500K+",
    label: "Happy Customers",
    icon: <Smile className="w-10 h-10 text-white" />
  },
  {
    value: "10K+",
    label: "Google Reviews",
    icon: <ThumbsUp className="w-10 h-10 text-white" />
  },
  {
    value: "60+",
    label: "Team of certified\ntechnicians",
    icon: <Cpu className="w-10 h-10 text-white" />
  }
];

const Trust = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo(textRef.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-20 leading-tight">
          Why Bengaluru <span className="text-[#ED1C24]">Trusts iFix</span><br />
          for Gadget Repairs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="bg-gradient-to-br from-[#8b0000] to-[#1a0000] border border-red-900/30 rounded-2xl p-8 flex items-center justify-between hover:border-[#ED1C24]/50 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
                  <p className="text-white/90 text-sm font-medium whitespace-pre-line leading-snug">{stat.label}</p>
                </div>
                <div className="opacity-90">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column: Text & CTA */}
          <div ref={textRef} className="space-y-8 relative">
            <p className="text-[#cccccc] text-lg leading-relaxed">
              Since 2009, iFix has been Bengaluru's go-to destination for hassle-free gadget repairs. Starting as a trusted Apple service centre, we've grown into a network of six branches across the city, with a vision to expand nationwide.
            </p>
            <p className="text-[#cccccc] text-lg leading-relaxed">
              From iPhones and Androids to MacBooks, iPads, and laptops, our expert technicians bring your devices back to life with speed, precision, and care—making them feel as good as new.
            </p>
            
            <button className="bg-[#ED1C24] hover:bg-red-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 mt-4 shadow-lg shadow-red-500/20">
              Meet the Experts behind iFix
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
