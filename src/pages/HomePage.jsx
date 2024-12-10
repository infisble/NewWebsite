import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Courses } from '../components/Courses';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Courses />
      <Contact />
    </main>
  );
}