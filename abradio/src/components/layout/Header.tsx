// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Podcast Platform
          </Link>
        </div>
        
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search podcasts..."
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              🔍
            </button>
          </form>
          
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-blue-600">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
}