import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SequenceScrubber from './components/SequenceScrubber';
import Services from './components/Services';
import Brands from './components/Brands';
import Trust from './components/Trust';
import Locations from './components/Locations';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Basic smooth scroll setup or Lenis could be added here
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden font-sans relative">
      <Navbar />
      <main>
        <Hero />
        <SequenceScrubber />
        <Services />
        <Brands />
        <Trust />
        <Locations />
      </main>
      <Footer />
      
      {/* Global Floating Action Button */}
      <a href="tel:+917676400900" className="fixed bottom-8 right-8 z-50 bg-[#ED1C24] hover:bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(237,28,36,0.5)] transition-transform hover:scale-110">
        <Phone className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}

export default App;
