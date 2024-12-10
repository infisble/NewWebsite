import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useBlogStore } from '../../store/blogStore';

export function BlogPostList() {
  const posts = useBlogStore((state) => state.posts);
  const deletePost = useBlogStore((state) => state.deletePost);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/admin/posts/new"
          className="bg-primary-200 text-dark-900 px-4 py-2 rounded-md hover:bg-primary-300 transition-colors duration-200"
        >
          New Post
        </Link>
      </div>

      <div className="bg-dark-800 rounded-lg border border-dark-700 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-dark-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Author</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 text-sm text-gray-300">{post.title}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{post.author}</td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  {format(new Date(post.date), 'MMM dd, yyyy')}
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary-200 hover:text-primary-300"
                    target="_blank"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}