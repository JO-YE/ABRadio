// src/app/categories/page.tsx

export default function CategoriesPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        
        {/* We'll replace this with actual content from the API later */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="font-medium">Category 1</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="font-medium">Category 2</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="font-medium">Category 3</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="font-medium">Category 4</p>
          </div>
        </div>
      </div>
    );
  }