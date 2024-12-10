import React from 'react';
import { AdminSidebar } from './AdminSidebar';
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex">
      <AdminSidebar />
      <main className="flex-1 p-8 animate-fade-in">
        <Outlet />
      </main>
    </div>
  );
}