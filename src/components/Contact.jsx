import React from 'react';
import { Section } from './ui/Section';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
  };

  return (
    <Section id="contact" className="bg-dark-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Get in Touch</h2>
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-200 text-dark-900 py-2 px-4 rounded-md hover:bg-primary-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}