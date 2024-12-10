import React from 'react';
import { FaGraduationCap, FaUsers, FaCertificate, FaLaptop } from 'react-icons/fa';
import { Section } from './ui/Section';
import featureBg from '../assets/feature-bg.svg';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Backend dev',
    description: 'You can get help back help  with years of experience'
  },
  {
    icon: FaUsers,
    title: 'Web design ',
    description: 'I can help you with web design ask'
  },
  {
    icon: FaCertificate,
    title: 'Certified Help ',
    description: 'Earn help and solve ask on you reqwest'
  },
  {
    icon: FaLaptop,
    title: 'Online Access',
    description: 'Study anywhere, anytime with our flexible learning platform'
  }
];

export function Features() {
  return (
    <Section className="bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('../assets/dots-bg.svg')] opacity-30"></div>
      <div className="absolute inset-0 opacity-10">
        <img src={featureBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white animate-fade-in">
          Why Choose Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-700/80 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-dark-600 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="text-4xl text-primary-400 mb-4 animate-bounce-subtle" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}