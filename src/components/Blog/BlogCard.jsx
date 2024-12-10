import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export function BlogCard({ post }) {
  return (
    <article className="bg-dark-800/50 rounded-lg overflow-hidden shadow-lg border border-dark-700/50 hover:shadow-xl transition-shadow duration-200">
      <Link to={`/blog/${post.slug}`} className="block p-6">
        <div className="mb-4">
          <span className="text-primary-200 text-sm">{post.category}</span>
          <h2 className="text-xl font-semibold text-white mt-2 hover:text-primary-200 transition-colors">
            {post.title}
          </h2>
        </div>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-400">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
      </Link>
    </article>
  );
}