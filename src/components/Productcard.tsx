"use client"
import Image from "next/image";
import { useState } from "react";

const ProductCard: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [quantity, setQuantity] = useState<number>(1);

  // Sample image URLs
  const thumbnails: string[] = [
    "/images/image1.png",
    "/images/image 5.png",
    "/images/image 6.png",
  ];

  return (
    <div className="pl-28 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg ">
      {/* Left Section (Images) */}
      <div className="flex space-x-4">
        {/* Thumbnails */}
        <div className="flex flex-col space-y-4">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className="w-[152px] h-[167px] border rounded cursor-pointer overflow-hidden"
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="object-cover w-[152px] h-[167px] "
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full h-auto bg-gray-200 rounded overflow-hidden relative">
          <Image
            src={thumbnails[0]}
            alt="Main Image"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Section (Details) */}
      <div className="flex flex-col">
        {/* Product Title */}
        <h1 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
        {/* Rating */}
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex text-yellow-400">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span className="text-gray-300">&#9733;</span>
          </div>
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>
        {/* Price */}
        <div className="flex items-center mt-4 space-x-2">
          <p className="text-2xl font-semibold text-black">$260</p>
          <p className="text-gray-400 line-through">$300</p>
          <p className="text-red-500 font-semibold text-sm">-40%</p>
        </div>
        {/* Description */}
        <p className="text-gray-600 mt-4 text-sm">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="w-full rounded border-b-2 border-gray-300 mt-4"></div>
        {/* Select Colors */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700">Select Colors</h3>
          <div className="flex space-x-4 mt-2">
            <div className="w-6 h-6 bg-green-700 rounded-full border-2 border-black cursor-pointer"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-indigo-700 rounded-full cursor-pointer"></div>
          </div>
        </div>
        <div className="w-full rounded border-b-2 border-gray-300 mt-4"></div>
        {/* Select Size */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700">Choose Size</h3>
          <div className="flex space-x-4 mt-2">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md text-sm cursor-pointer ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="w-full border-b-2 rounded border-gray-300 mt-4"></div>
        </div>
        {/* Add to Cart */}
        <div className="flex items-center space-x-4 mt-6">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded">
            <button
              className="px-4 py-2 text-lg text-gray-700"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 border-x text-lg">{quantity}</span>
            <button
              className="px-4 py-2 text-lg text-gray-700"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          {/* Add to Cart Button */}
          <button className="flex-1 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
