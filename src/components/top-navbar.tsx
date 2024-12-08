import React from "react";

const TNavbar = () => {
  return (
    <div>
      <header>
        <div className="w-full h-[38px] bg-black flex justify-center items-center">
          {/* Wrapper for content with adjusted width on small screens */}
          <div className="w-full sm:w-[1440px] p-2 sm:p-[9px_100px_9px_544px] gap-0 flex flex-col sm:flex-row items-center justify-between">
            <h6 className="text-white font-satoshi text-[12px] sm:text-[14px] font-normal leading-[18.9px] text-center sm:text-left whitespace-nowrap">
              Sign up and get 20% off your first order.
              <span className="font-medium ml-1 cursor-pointer sm:text-sm text-xs underline">Sign Up Now</span>
            </h6>
            {/* Cross (x) - Hidden on mobile and shown on larger screens */}
            <span className="text-white text-[14px] cursor-pointer mt-2 sm:mt-0 sm:ml-4 hidden sm:block">
              x
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TNavbar ;