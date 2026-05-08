import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[#000000] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-2 cursor-pointer z-10">
          <img src="/Assets/ifix-india-logo.png" alt="iFix India" className="h-11 object-contain" />
        </div>
        
        {/* Absolutely centered links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">Apple Care</a>
          <a href="#locations" className="hover:text-white transition-colors duration-300">Locations</a>
          <a href="#business" className="hover:text-white transition-colors duration-300">Business</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+917676400900" className="text-sm font-medium text-white hover:text-[#ED1C24] transition-colors duration-300">
            +91 7676 400 900
          </a>
          <button className="bg-[#ED1C24] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(237,28,36,0.5)]">
            Fix My Device
          </button>
        </div>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
