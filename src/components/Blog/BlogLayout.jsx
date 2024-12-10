import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

export function BlogLayout() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navigation />
      <Outlet />
      <footer className="bg-dark-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} EduTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}