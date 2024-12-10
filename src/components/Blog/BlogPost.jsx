import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Section } from '../ui/Section';
import { useBlogStore } from '../../store/blogStore';
import { renderMarkdown } from '../../utils/markdown';

export function BlogPost() {
  const { slug } = useParams();
  const getPost = useBlogStore((state) => state.getPost);
  const post = getPost(slug);

  if (!post) {
    return (
      <Section className="bg-dark-900 pt-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary-200 hover:text-primary-300">
            Back to Blog
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-dark-900 pt-32">
      <article className="max-w-2xl mx-auto">
        <Link to="/blog" className="text-primary-200 hover:text-primary-300 mb-8 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>
        <div 
          className="prose prose-invert prose-primary max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </article>
    </Section>
  );
}