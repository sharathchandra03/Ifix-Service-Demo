import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SequenceScrubber = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const frameCount = 240;
  const images = useRef([]);
  const airpods = { frame: 0 };

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 001, 002
      const formattedNumber = i.toString().padStart(3, '0');
      const baseUrl = import.meta.env.BASE_URL;
      img.src = `${baseUrl}3d-scroll/ezgif-frame-${formattedNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
      images.current.push(img);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = 1920;
    canvas.height = 1080;

    const render = () => {
      if (images.current[airpods.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image covering the canvas (similar to object-fit: cover)
        const img = images.current[airpods.frame];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        // Shift y slightly down to avoid getting cut by the solid header
        const centerShift_y = ((canvas.height - img.height * ratio) / 2) + 60;
        
        context.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    // Initial render
    render();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        start: 'top top',
        end: '+=1500', // Faster scroll sequence
      }
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [imagesLoaded]);

  return (
    <section ref={containerRef} className="relative h-screen bg-black w-full overflow-hidden flex items-center justify-center">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-secondary">
          Loading Cinematic Sequence...
        </div>
      )}
      
      <div className="absolute inset-0 z-0 opacity-40">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
      </div>
      
      {/* Overlay Text during scroll */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Precision in <br/>
          <span className="text-[#ED1C24]">Every Detail.</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Our advanced diagnostic tools and premium parts ensure your device is restored to factory standards.
        </p>
      </div>
    </section>
  );
};

export default SequenceScrubber;
