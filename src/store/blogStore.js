import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { blogPosts as initialPosts } from '../data/blogPosts';

export const useBlogStore = create(
  persist(
    (set, get) => ({
      posts: initialPosts,
      addPost: (post) => {
        const newPost = {
          ...post,
          id: Date.now(),
          date: new Date().toISOString(),
          readTime: `${Math.ceil(post.content.length / 1000)} min read`,
        };
        set((state) => ({
          posts: [newPost, ...state.posts],
        }));
        return newPost;
      },
      updatePost: (id, updatedPost) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, ...updatedPost } : post
          ),
        })),
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
      getPost: (slug) => {
        const state = get();
        return state.posts.find((post) => post.slug === slug);
      },
    }),
    {
      name: 'blog-storage',
    }
  )
);