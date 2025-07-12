import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 500),   // Image fades in
      setTimeout(() => setAnimationStep(2), 1200),  // Text fades in
      setTimeout(() => setAnimationStep(3), 1600),  // Description fades in
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center w-full px-6">
      {/* This is now the main flex container. 
        - It handles the side-by-side layout on medium screens and up (md:flex-row-reverse).
        - It stacks them on mobile (flex-col).
      */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-16 lg:gap-24 w-full max-w-7xl">

        {/* --- Image Container --- */}
        <div 
          className={`
            relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
            transition-all duration-1000 ease-in-out
            ${animationStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
          <Image
            src="/profile.jpg"
            alt="Shrivaths Shyam"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* --- Text Content --- */}
        <div className="text-center md:text-left">
          <h1 
            className={`
              text-5xl md:text-6xl font-extrabold transition-all duration-700
              ${animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Hi, I'm Shrivaths 👋
          </h1>
          <p 
            className={`
              mt-4 text-xl md:text-2xl max-w-2xl transition-all duration-700 delay-200
              ${animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            An AI Engineer and Software Developer passionate about building intelligent systems and scalable software.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;