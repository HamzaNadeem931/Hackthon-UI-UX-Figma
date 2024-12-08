'use client'
import React from 'react';
import ProductCard from '@/components/Productcard';
import Image from "next/image";
import ReviewCard from '@/components/ReviewCard';
import Pditem from '@/components/Pditem';
import Footer from '@/components/footer';

const Page = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      {/* Breadcrumb Section */}
      <section className="text-lg pt-5 pl-28">
        <ul className="flex space-x-2 text-gray-500">
          <li className="flex items-center">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-1 text-gray-400">&gt;</span>
          </li>
          <li className="flex items-center">
            <a href="#" className="hover:underline">Shop</a>
            <span className="mx-1 text-gray-400">&gt;</span>
          </li>
          <li className="flex items-center">
            <a href="#" className="hover:underline">Men</a>
            <span className="mx-1 text-gray-400">&gt;</span>
          </li>
          <li className="font-medium text-black">T-shirts</li>
        </ul>
      </section>

      {/* Product Section */}
      <section className="my-6">
        <ProductCard />
      </section>

      {/* Tabs Section */}
      <section className="my-12 ">
          <div className="flex items-center justify-center space-x-[250px] gap-28">
            <button className="relative px-4 py-2 text-xl font-bold text-gray-500 hover:text-black transition">
              Product Details
              <div className="absolute bottom-0 left-0 w-full h-[2px] havor:bg-black"></div>
            </button>
            <button className="relative px-4 py-2 text-xl font-bold text-gray-500  hover:text-black transition">
              Rating & Reviews
              <div className="absolute bottom-0 left-0 w-full h-[2px] havor:bg-black"></div>
            </button>
            <button className="relative px-4 py-2 text-xl font-bold text-gray-500 hover:text-black transition">
              FAQs
              <div className="absolute bottom-0 left-0 w-full h-[2px] havor:bg-black"></div>
            </button>
          </div>
        <div className="w-[1240px] ml-[108px] border-b-2 border-gray-300"> </div>
      </section>

      {/* Reviews Section */}
      <section className="my-12">
        <div className="flex items-center justify-between mr-12 ml-[114px] mx-auto">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-black">All Reviews</h2>
            <span className="text-sm text-gray-500">(451)</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M3 6h18M7 14h10m-7 4h4"
                />
              </svg>
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-black bg-gray-100 rounded-full">
              Latest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="px-6 py-2 text-sm text-white bg-black rounded-full">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      <section className='ml-28'>
        <div className='grid grid-cols-2 gap-3 mr-10'>
          <div><ReviewCard/></div>
          <div><ReviewCard/></div>
          <div><ReviewCard/></div>
          <div><ReviewCard/></div>
          <div><ReviewCard/></div>
          <div><ReviewCard/></div>
        </div>
        <button className="px-6 py-3 mt-12 ml-[520px] border border-black bg-white text-black rounded-2xl hover:bg-gray-800 hover:text-white transition">Load More Review</button>
      </section>

      <section className='pb-5'>
      <Pditem />
      </section>

      <section>
        <Footer />
      </section>

    </div>

  );
};

export default Page;
