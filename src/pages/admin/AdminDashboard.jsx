import React from 'react';

export function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-800 p-6 rounded-lg border border-dark-700">
          <h2 className="text-xl font-semibold mb-2">Total Posts</h2>
          <p className="text-4xl font-bold text-primary-200">3</p>
        </div>
        {/* Add more dashboard widgets as needed */}
      </div>
    </div>
  );
}