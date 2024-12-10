import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export function LoginForm() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // In a real app, you'd make an API call here
    // For demo purposes, we'll simulate login
    const user = {
      id: 1,
      email: formData.email,
      role: 'admin', // This would come from your backend
    };

    setUser(user);
    navigate(user.role === 'admin' ? '/admin' : '/');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary-200 text-dark-900 py-2 px-4 rounded-md hover:bg-primary-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <Link to="/register" className="text-primary-200 hover:text-primary-300">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}