import React, { useState } from 'react';
import { PrimaryButton } from './ui/Button';
import { Container } from './ui/Container';
import { TypeWriter } from './ui/TypeWriter';
import { scrollToElement } from '../utils/scroll';
import heroImage from '../assets/hero-image.svg';
import waveBg from '../assets/wave-bg.svg';

export function Hero() {
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <div id="hero" className="relative bg-gradient-to-r from-dark-800 to-dark-700 text-white pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('../assets/grid-bg.svg')] opacity-20"></div>
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
              <TypeWriter 
                text="Transform Your Future with Quality Education"
                delay={70}
                onComplete={() => setShowSubtext(true)}
              />
            </h1>
            {showSubtext && (
              <p className="text-lg md:text-xl text-gray-300 animate-slide-up">
                Unlock your potential with our cutting-edge courses and expert instructors. 
                Start your learning journey today.
              </p>
            )}
            <PrimaryButton 
              onClick={() => scrollToElement('courses')}
              className="animate-bounce-subtle"
            >
              Get Started
            </PrimaryButton>
          </div>
          <div className="relative animate-float z-10">
            <img 
              src={heroImage} 
              alt="Education Illustration" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0">
        <img src={waveBg} alt="" className="w-full" />
      </div>
    </div>
  );
}