import React from "react";
import Image from "next/image";

const Style = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      {/* Section Header */}
      <h2 className="text-[48px] font-bold mt-8 text-center">BROWSE BY DRESS STYLE</h2>

      {/* Main Container with Single Box */}
      <div className="bg-white rounded-[40px] shadow-lg w-full max-w-[1239px] h-auto p-4 md:h-[666px] flex flex-col">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Casual */}
          <div className="w-full md:w-[407px] h-auto">
            <Image
              src="/images/s9.png"
              alt="Casual"
              width={407}
              height={289}
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Formal */}
          <div className="w-full md:w-[684px] h-auto">
            <Image
              src="/images/s10.png"
              alt="Formal"
              width={684}
              height={289}
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
          {/* Party */}
          <div className="w-full md:w-[684px] h-auto">
            <Image
              src="/images/s11.png"
              alt="Party"
              width={684}
              height={289}
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Gym */}
          <div className="w-full md:w-[407px] h-auto">
            <Image
              src="/images/s12.png"
              alt="Gym"
              width={407}
              height={289}
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style;