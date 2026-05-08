import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Laptop, Watch, Tablet, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'iPhone Repair', icon: <Smartphone className="w-8 h-8" />, desc: 'Screen replacement, battery issues, and logic board repairs.' },
  { title: 'MacBook Repair', icon: <Laptop className="w-8 h-8" />, desc: 'Keyboard, display, battery, and water damage restoration.' },
  { title: 'iPad Repair', icon: <Tablet className="w-8 h-8" />, desc: 'Broken glass, touch issues, and charging port fixes.' },
  { title: 'iMac Repair', icon: <Monitor className="w-8 h-8" />, desc: 'Performance upgrades, SSD installation, and screen fixes.' },
  { title: 'Apple Watch', icon: <Watch className="w-8 h-8" />, desc: 'Screen repair and battery replacements for all series.' },
  { title: 'Android & Windows', icon: <Smartphone className="w-8 h-8" />, desc: 'Premium repair services for top Android and Windows devices.' },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
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
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Mastery in <span className="text-gradient">Every Device.</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">We specialize in precise, fast, and reliable repairs. Using high-quality parts to ensure your device feels brand new.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="glass-panel p-8 group hover:border-[#ED1C24]/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#ED1C24] mb-6 group-hover:scale-110 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
