import React from "react";
import Image from 'next/image'

const ProductPage = () => {
  return (
    <div className="flex w-full px-8 py-4 space-x-8">
      {/* Left Sidebar */}
      <aside className="w-[295px] bg-white border border-gray-200 p-4 space-y-6">
  {/* Filters Title */}
  <div>
    <h2 className="text-lg font-bold">Filters</h2>
  </div>

  {/* Categories */}
  <div>
    <h3 className="text-md font-semibold">Categories</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">T-shirts</li>
      <li className="hover:underline cursor-pointer">Shorts</li>
      <li className="hover:underline cursor-pointer">Shirts</li>
      <li className="hover:underline cursor-pointer">Hoodie</li>
      <li className="hover:underline cursor-pointer">Jeans</li>
    </ul>
  </div>

  {/* Price Filter */}
  <div>
    <h3 className="text-md font-semibold">Price</h3>
    <div className="flex items-center justify-between text-sm mb-2">
      <span>$10</span>
      <span>$500</span>
    </div>
    <input type="range" className="w-full" />
  </div>

  {/* Colors */}
  <div>
    <h3 className="text-md font-semibold">Colors</h3>
    <div className="grid grid-cols-5 gap-2 mt-2">
      <div className="w-6 h-6 bg-red-500 rounded-full border"></div>
      <div className="w-6 h-6 bg-yellow-500 rounded-full border"></div>
      <div className="w-6 h-6 bg-blue-500 rounded-full border"></div>
      <div className="w-6 h-6 bg-green-500 rounded-full border"></div>
      <div className="w-6 h-6 bg-purple-500 rounded-full border"></div>
      <div className="w-6 h-6 bg-black rounded-full border"></div>
      <div className="w-6 h-6 bg-white rounded-full border"></div>
    </div>
  </div>

  {/* Size Filter */}
  <div>
    <h3 className="text-md font-semibold">Size</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      <button className="border border-gray-300 px-3 py-1 text-sm rounded-md">XS</button>
      <button className="border border-gray-300 px-3 py-1 text-sm rounded-md">S</button>
      <button className="border border-gray-300 px-3 py-1 text-sm rounded-md">M</button>
      <button className="border border-gray-300 px-3 py-1 text-sm rounded-md">L</button>
      <button className="border border-gray-300 px-3 py-1 text-sm rounded-md">XL</button>
    </div>
  </div>

  {/* Dress Style */}
  <div>
    <h3 className="text-md font-semibold">Dress Style</h3>
    <ul className="space-y-2 text-sm mt-2">
      <li className="hover:underline cursor-pointer">Casual</li>
      <li className="hover:underline cursor-pointer">Formal</li>
      <li className="hover:underline cursor-pointer">Party</li>
      <li className="hover:underline cursor-pointer">Gym</li>
    </ul>
  </div>

  {/* Apply Filter Button */}
  <button className="w-full py-2 mt-4 text-white bg-black rounded-md">
    Apply Filter
  </button>
</aside>


      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Casual</h1>
          <p className="text-sm text-gray-500">Showing 1-9 of 300 Products</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Product Card */}
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-lg">
              {/* Product Image */}
              <div className="h-[298px] w-full  mb-4">
              <Image src='/images/s4.png' alt='aa' width={350} height={300} />
              </div>
              {/* Product Details */}
              <h3 className="text-sm font-semibold">Product Title</h3>
              <p className="text-gray-500 text-sm">Category</p>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">$240</span>
                <span className="line-through text-gray-400 text-sm">$260</span>
                <span className="text-red-500 text-sm">-20%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md">Previous</button>
          <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md">Next</button>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
