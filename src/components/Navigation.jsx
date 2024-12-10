import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { scrollToElement } from '../utils/scroll';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const navItems = [
    { label: 'Home', href: '/', onClick: () => location.pathname === '/' && scrollToElement('hero') },
    { label: 'Courses', href: '/#courses', onClick: () => location.pathname === '/' && scrollToElement('courses') },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact', onClick: () => location.pathname === '/' && scrollToElement('contact') },
  ];

  const handleNavClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50">
      <nav className="bg-dark-800/40 backdrop-blur-md rounded-2xl shadow-xl border border-dark-700/50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary-200">EduTech</Link>
            
            <button
              className="md:hidden text-gray-300 hover:text-primary-200 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-primary-200 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="text-primary-200 hover:text-primary-300 transition-colors duration-200"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-primary-200 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-primary-200 hover:text-primary-300 transition-colors duration-200"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 space-y-2 border-t border-dark-600/50 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-gray-300 hover:text-primary-200 transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block w-full text-left text-primary-200 hover:text-primary-300 transition-colors duration-200 py-2"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-300 hover:text-primary-200 transition-colors duration-200 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block w-full text-left text-primary-200 hover:text-primary-300 transition-colors duration-200 py-2"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}