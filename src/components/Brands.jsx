import React from 'react';

const brandLogos = [
  { 
    name: 'Apple',
    logo: <svg viewBox="0 0 384 512" className="h-10 w-auto" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.7-119.3-65.2-30.7-61.7-90-62-91.3zM85.3 7H273l15-1.8zM245.9 85.6c14.5-17.6 24.3-42.3 21.6-67.1-21.7 1-47.5 15-62.8 33-13.6 15.8-24.9 41.3-21.6 65.5 24.2 2 48.3-13.8 62.8-31.4z"></path></svg>,
    color: 'text-white'
  },
  {
    name: 'OnePlus',
    logo: <div className="flex items-center justify-center border-[3px] border-current rounded-xl w-10 h-10 font-bold text-lg relative"><span className="absolute left-2 top-1.5">1</span><span className="absolute right-1 top-0.5 text-sm">+</span></div>,
    color: 'text-[#F5010C]'
  },
  {
    name: 'Vivo',
    logo: <span className="font-sans font-bold text-[28px] tracking-widest lowercase">vivo</span>,
    color: 'text-[#415FFF]'
  },
  {
    name: 'Samsung',
    logo: <span className="font-sans font-black text-xl tracking-tighter uppercase">SAMSUNG</span>,
    color: 'text-[#1428A0]'
  },
  {
    name: 'Oppo',
    logo: <span className="font-sans font-bold text-[26px] tracking-[0.2em] uppercase">OPPO</span>,
    color: 'text-[#006937]'
  },
  {
    name: 'Xiaomi',
    logo: <div className="bg-current rounded-2xl w-10 h-10 flex items-center justify-center"><span className="font-sans font-bold text-xl text-black">mi</span></div>,
    color: 'text-[#FF6700]'
  }
];

// Duplicate the array multiple times to ensure smooth infinite scroll
const duplicatedBrands = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

const BrandIcon = ({ name, logo, colorClass, isForeground }) => (
  <div className={`flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 mx-3 md:mx-4 border rounded-3xl backdrop-blur-sm transition-all duration-300 
    ${isForeground ? `border-white/20 bg-black/80 ${colorClass} shadow-[0_0_15px_rgba(255,255,255,0.05)]` : 'border-white/5 bg-black/40 text-gray-500'}
  `}>
    <div className="h-12 flex items-center justify-center mb-1">
      {logo}
    </div>
    <span className="text-xs md:text-sm font-semibold tracking-wider opacity-80">{name}</span>
  </div>
);

const Brands = () => {
  return (
    <section className="relative py-8 md:py-12 bg-[#000000] overflow-hidden flex flex-col items-center border-t border-b border-white/5">
      <div className="relative z-20 text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          We Repair <span className="text-[#ED1C24]">All Major Brands</span>
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto">Expert care for your devices, regardless of the logo on the back.</p>
      </div>

      {/* Container for matching marquees */}
      <div className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        
        {/* Background Marquee (Grayscale) */}
        <div className="absolute inset-0 flex items-center w-full overflow-hidden opacity-20 grayscale pointer-events-none">
          <div className="flex animate-marquee w-max">
            {duplicatedBrands.map((brand, i) => (
              <BrandIcon key={'bg'+i} {...brand} isForeground={false} />
            ))}
          </div>
        </div>

        {/* The Phone Mockup */}
        <div className="relative z-10 w-[190px] h-[380px] md:w-[210px] md:h-[420px] rounded-[2rem] md:rounded-[2.5rem] border-[8px] md:border-[10px] border-zinc-900 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Dynamic Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-xl z-30 flex items-center justify-center">
            <div className="w-10 h-1 bg-black rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>
          </div>

          {/* Side Buttons */}
          <div className="absolute top-20 -left-[10px] md:-left-[12px] w-1 h-8 bg-zinc-800 rounded-l-md z-0"></div>
          <div className="absolute top-32 -left-[10px] md:-left-[12px] w-1 h-8 bg-zinc-800 rounded-l-md z-0"></div>
          <div className="absolute top-28 -right-[10px] md:-right-[12px] w-1 h-12 bg-zinc-800 rounded-r-md z-0"></div>

          {/* Foreground Marquee (Colored) strictly clipped inside the phone */}
          {/* 100vw ensures the start position perfectly aligns with the background marquee */}
          <div className="absolute top-1/2 left-1/2 w-[100vw] -translate-x-1/2 -translate-y-1/2 h-full flex items-center overflow-visible pointer-events-none z-20">
             <div className="flex animate-marquee w-max">
               {duplicatedBrands.map((brand, i) => (
                 <BrandIcon key={'fg'+i} {...brand} colorClass={brand.color} isForeground={true} />
               ))}
             </div>
          </div>
          
          {/* Glass Reflection Overlays */}
          <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none z-40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-40 rounded-[1.5rem] md:rounded-[2rem]"></div>
          
          {/* Bottom Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full z-40"></div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
