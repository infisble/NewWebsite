import React from 'react';
import { FaBook, FaChartBar, FaMegaport } from 'react-icons/fa';
import { Section } from './ui/Section';

const courses = [
  {
    title: 'Web Development',
    duration: 'Parth - Time',
    level: '8/10',
    price: '$8-10 h',
    icon: FaBook
  },
  {
    title: 'Data Science',
    duration: 'Parth - Time',
    level: '7/10',
    price: '$7-9 h',
    icon: FaChartBar
  },
  {
    title: 'Digital Marketing',
    duration: 'Parth - Time',
    level: '9/10',
    price: '$7-12',
    icon: FaMegaport
  }
];

export function Courses() {
  return (
    <Section id="courses" className="bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('../assets/grid-bg.svg')] opacity-10"></div>
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My skill and project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-dark-800/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200 border border-dark-700"
            >
              <div className="p-6">
                <course.icon className="text-4xl text-primary-200 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">{course.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Duration: {course.duration}</li>
                  <li>Level: {course.level}</li>
                  <li>Price: {course.price}</li>
                </ul>
                <button className="mt-6 w-full bg-primary-200 text-dark-900 py-2 rounded hover:bg-primary-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}