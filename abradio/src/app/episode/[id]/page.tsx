// src/app/episode/[id]/page.tsx

// For server components
type Props = {
    params: {
      id: string;
    };
   };
   
   export default function EpisodePage({ params }: Props) {
    const { id } = params;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Episode Details</h1>
        <p className="text-lg text-gray-600 mb-4">Episode ID: {id}</p>
        
        {/* We'll replace this with actual content from the API later */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Episode Title Placeholder</h2>
          <div className="text-gray-700 mb-4">Episode description will be loaded here...</div>
          
          <div className="mt-6">
            <div className="bg-gray-200 p-4 rounded-lg">
              <p className="text-center text-gray-600">Audio player placeholder</p>
            </div>
          </div>
        </div>
      </div>
    );
   }