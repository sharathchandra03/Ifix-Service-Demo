import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  { name: "Indiranagar 100FT Road", image: "/Assets/Location Images/Indiranagar.jpg" },
  { name: "Koramangala", image: "/Assets/Location Images/Kormangala.png" },
  { name: "Kammanahalli", image: "/Assets/Location Images/Kamanhalli.png" },
  { name: "Marathahalli", image: "/Assets/Location Images/Marthalli.png" },
  { name: "BEL Road", image: "/Assets/Location Images/BEL Road.jpg" },
  { name: "CMH Road", image: "/Assets/Location Images/CMH Road.avif" }
];

const Locations = () => {
  const sectionRef = useRef(null);
  const listRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !listRef.current.includes(el)) {
      listRef.current.push(el);
    }
  };

  return (
    <section id="locations" ref={sectionRef} className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#ED1C24]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Always near you.</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Visit any of our premium service centers across Bangalore for expert assistance and immediate repairs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="glass-panel group cursor-pointer overflow-hidden flex flex-col border border-glassBorder hover:border-[#ED1C24]/50 transition-colors duration-500 bg-black/40"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex justify-between items-center bg-black/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#ED1C24]" />
                  <h3 className="text-lg font-semibold text-white">{loc.name}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary group-hover:text-[#ED1C24] group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
