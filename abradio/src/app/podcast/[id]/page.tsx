// src/app/podcast/[id]/page.tsx

type Props = {
    params: {
      id: string;
    };
  };
  
  export default function PodcastPage({ params }: Props) {
    const { id } = params;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Podcast Details</h1>
        <p className="text-lg text-gray-600 mb-4">Podcast ID: {id}</p>
        
        {/* We'll replace this with actual content from the API later */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Podcast Title Placeholder</h2>
          <div className="text-gray-700 mb-4">Podcast description will be loaded here...</div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <div className="space-y-4">
          <p className="text-gray-500">Episode list will be loaded here...</p>
        </div>
      </div>
    );
  }