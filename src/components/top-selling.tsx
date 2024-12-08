
import React from "react";
import Image from "next/image";

const TopSelling = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center pt-32  px-4 md:pt-40">
      {/* Heading */}
      <h1 className="text-[28px] md:text-[36px] font-extrabold mb-8 text-center">
        TOP SELLING
      </h1>

      {/* Container for the images and details */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-4 lg:gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full max-w-[295px]">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s5.png"
              alt="Image 1"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] mt-4 text-center">
            VERTICAL STRIPED SHIRT
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★★</span>
            <span className="ml-2 text-gray-600">5.0/5</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-700 text-[16px] md:text-[18px] font-semibold">$212</p>
            <p className="text-gray-700 text-[16px] md:text-[18px] line-through">$232</p>
            <Image
              src="/images/off1.png"
              alt="Discount"
              width={58}
              height={28}
              className="inline-block"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-full max-w-[295px]">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s6.png"
              alt="Image 2"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] mt-4 text-center">
            COURAGE GRAPHIC T-SHIRT
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★</span>
            <span className="ml-2 text-gray-600">4.0/5</span>
          </div>
          <p className="text-gray-700 text-[16px] md:text-[18px] font-semibold mt-2">$145</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full max-w-[295px]">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s7.png"
              alt="Image 3"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] mt-4 text-center">
            LOOSE FIT BERMUDA SHORTS
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★</span>
            <span className="ml-2 text-gray-600">3.0/5</span>
          </div>
          <p className="text-gray-700 text-[16px] md:text-[18px] font-semibold mt-2">$80</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center w-full max-w-[295px]">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s8.png"
              alt="Image 4"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] mt-4 text-center">
            FADED SKINNY JEANS
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★☆</span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-gray-700 text-[16px] md:text-[18px] font-semibold mt-2">$210</p>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <div className="w-[200px] h-[48px] px-4 py-2 rounded-[50px] border bg-[#0000001A] flex items-center justify-center">
          <button className="font-satoshi font-medium text-[16px] text-center">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
