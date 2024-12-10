import React from 'react';
import { BlogCard } from './BlogCard';
import { Section } from '../ui/Section';
import { useBlogStore } from '../../store/blogStore';

export function BlogList() {
  const posts = useBlogStore((state) => state.posts);

  return (
    <Section className="bg-dark-900 pt-32">
      <h1 className="text-3xl font-bold text-white mb-8">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}