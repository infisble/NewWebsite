import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogLayout } from './components/Blog/BlogLayout';
import { AdminLayout } from './components/Admin/AdminLayout';
import { HomePage } from './pages/HomePage';
import { BlogList } from './components/Blog/BlogList';
import { BlogPost } from './components/Blog/BlogPost';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { BlogPostList } from './pages/admin/BlogPostList';
import { NewBlogPost } from './pages/admin/NewBlogPost';
import { LoginForm } from './components/Auth/LoginForm';
import { RegistrationForm } from './components/Auth/RegistrationForm';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="posts" element={<BlogPostList />} />
          <Route path="posts/new" element={<NewBlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}