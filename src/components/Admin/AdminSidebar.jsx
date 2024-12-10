import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaNewspaper, FaHome, FaArrowLeft } from 'react-icons/fa';

export function AdminSidebar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <aside className="w-64 bg-dark-800 min-h-screen p-4">
      <div className="mb-8">
        <Link to="/" className="text-2xl font-bold text-primary-200 hover:text-primary-300 transition-colors flex items-center gap-2">
          <FaArrowLeft className="w-4 h-4" />
          <span>EduTech</span>
        </Link>
      </div>
      <nav className="space-y-2">
        <Link
          to="/admin"
          className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${
            isActive('/admin')
              ? 'bg-primary-200 text-dark-900'
              : 'text-gray-300 hover:bg-dark-700'
          }`}
        >
          <FaHome className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/posts"
          className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${
            isActive('/admin/posts')
              ? 'bg-primary-200 text-dark-900'
              : 'text-gray-300 hover:bg-dark-700'
          }`}
        >
          <FaNewspaper className="w-5 h-5" />
          <span>Blog Posts</span>
        </Link>
      </nav>
    </aside>
  );
}