import React, { useState } from 'react';

export function BlogPostForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-300">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={10}
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-300">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-white shadow-sm focus:border-primary-200 focus:ring-primary-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-200 text-dark-900 py-2 px-4 rounded-md hover:bg-primary-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
      >
        Save Post
      </button>
    </form>
  );
}