import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPostForm } from '../../components/Admin/BlogPostForm';
import { useBlogStore } from '../../store/blogStore';

export function NewBlogPost() {
  const navigate = useNavigate();
  const addPost = useBlogStore((state) => state.addPost);

  const handleSubmit = (formData) => {
    const newPost = addPost(formData);
    navigate(`/blog/${newPost.slug}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Blog Post</h1>
      <div className="max-w-2xl bg-dark-800 rounded-lg border border-dark-700 p-6">
        <BlogPostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}