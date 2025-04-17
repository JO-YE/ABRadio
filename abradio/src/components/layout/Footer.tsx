// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Podcast Platform</h3>
              <p className="text-gray-400 mt-2">Discover amazing podcasts</p>
            </div>
            
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Podcast Platform. All rights reserved.</p>
              <p className="text-gray-400 mt-2">Built for Bloocode Technology Assessment</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }