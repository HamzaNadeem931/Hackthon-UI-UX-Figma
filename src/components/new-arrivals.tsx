import React from "react";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center pt-20">
      {/* Heading */}
      <h1 className="text-[36px] font-extrabold mb-8 text-center mt-4">
        NEW ARRIVALS
      </h1>

      {/* Container for the images and details */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s1.png"
              alt="Image 1"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[20px] mt-4 text-center">
            T-SHIRT WITH TAPE DETAILS
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★☆</span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-gray-700 text-[18px] font-semibold mt-2">$120</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s2.png"
              alt="Image 2"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[20px] mt-4 text-center">
            SKINNY FIT JEANS
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★☆☆</span>
            <span className="ml-2 text-gray-600">3.5/5</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-700 text-[18px] font-semibold">$240</p>
            <p className="text-gray-700 text-[18px] line-through">$260</p>
            <Image
              src="/images/off1.png"
              alt="Discount"
              width={58}
              height={28}
              className="inline-block"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s3.png"
              alt="Image 3"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[20px] mt-4 text-center">
            CHECKERED SHIRT
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★☆</span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-gray-700 text-[18px] font-semibold mt-2">$180</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center">
            <Image
              src="/images/s4.png"
              alt="Image 4"
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[20px] mt-4 text-center">
            SLEEVE STRIPED T-SHIRT
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-[16px]">★★★★★</span>
            <span className="ml-2 text-gray-600">5/5</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-700 text-[18px] font-semibold">$130</p>
            <p className="text-gray-700 text-[18px] line-through">$160</p>
            <Image
              src="/images/off 2.png"
              alt="Discount"
              width={70}
              height={35}
              className="inline-block"
            />
          </div>
        </div>
      </div>
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

export default NewArrival;