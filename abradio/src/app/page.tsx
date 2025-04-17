// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Podcast Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Top Podcasts</h2>
          {/* Top podcasts will be loaded here */}
          <p className="text-gray-500">Loading top podcasts...</p>
          <Link href="/categories" className="text-blue-600 hover:underline mt-4 inline-block">
            Browse Categories
          </Link>
        </div> 
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Trending Episodes</h2>
          {/* Trending episodes will be loaded here */}
          <p className="text-gray-500">Loading trending episodes...</p>
        </div>
      </div>
    </main>
  );
}