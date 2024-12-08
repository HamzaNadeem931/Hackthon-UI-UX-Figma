import React from "react";
import Image from "next/image";  

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#F2F0F1] flex flex-col justify-between items-center">
      {/* Main Hero Content */}
      <div className=" w-full flex flex-col sm:flex-row items-center sm:px-[100px] pt-[60px] relative">
        {/* Left Side: Text Content */}
        <div className="pb-60 mw-full sm:w-[50%] flex flex-col items-center sm:items-start z-20 sm:mt-[200px] pl-[30px] text-center sm:text-left">
          {/* <h1 className=" text-[64px] sm:text-[48px] font-extrabold leading-[1.2] mb-4 ">
            FIND CLOTHES 
            THAT MATCHES YOUR STYLE
          </h1> */}
          <Image src="/images/hero font.png" alt="font" width={600} height={500}/>
          <p className="font-satoshi text-[14px] sm:text-[16px] font-normal leading-[24px] mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed <br />
            to bring out your individuality and cater to your sense of style.
          </p>
          
          {/* Centered Shop Now Button on mobile, left-aligned on larger screens */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8">
            <button className="bg-black text-white rounded-full px-8 py-4 text-[14px] sm:px-6 sm:py-3 sm:text-[16px] w-full sm:w-auto">
              Shop Now
            </button>
          </div>

          {/* Statistics */}
          <div className="flex gap-8 justify-center sm:justify-start">
            <div className="text-center sm:text-left">
              <h3 className="text-[24px] font-bold font-satoshi">200+</h3>
              <p className="text-[14px] text-gray-600">International Brands</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[24px] font-bold font-satoshi">2,000+</h3>
              <p className="text-[14px] text-gray-600">High-Quality Products</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[24px] font-bold font-satoshi">30,000+</h3>
              <p className="text-[14px] text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="full sm:w-[50%] flex justify-center sm:justify-end items-center z-10 sm:top-[-20px]">
          <Image
            src="/images/hero.png"
            alt="Fashion Models"
            width={700} // Adjust the size as needed
            height={600}
            className="object-contain max-w-[100%] max-h-[100%]"
          />
        </div>
    
      </div>
      <span className="absolute w-[76px] h-[76px] top-[20%] right-[10%] group-hover:scale-110 transition-all duration-300 ease-in-out">
    <Image src='/images/Vector.png' alt="Star Icon" width={76} height={76}/>
  </span>

  <span className="absolute w-[44px] h-[44px] bottom-[50%] left-[60%] group-hover:scale-110 transition-all duration-300 ease-in-out">
    <Image src='/images/Vector.png'alt="Star Icon" width={44} height={44}/>
  </span>

      {/* Brand Logos Section */}
      <div className="w-full bg-black py-4 mt-0">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-8">
          <Image
            src="/images/versachi.png"
            alt="Versace"
            width={166.48}
            height={33.16}
            className="object-contain max-w-[100px] sm:max-w-[166.48px]"
          />
          <Image
            src="/images/zara.png"
            alt="Zara"
            width={91}
            height={38}
            className="object-contain max-w-[70px] sm:max-w-[91px]"
          />
          <Image
            src="/images/gucci.png"
            alt="Gucci"
            width={156}
            height={36}
            className="object-contain max-w-[120px] sm:max-w-[156px]"
          />
          <Image
            src="/images/prada.png"
            alt="Prada"
            width={194}
            height={31.2}
            className="object-contain max-w-[150px] sm:max-w-[194px]"
          />
          <Image
            src="/images/kelvin.png"
            alt="Calvin Klein"
            width={206.79}
            height={33.35}
            className="object-contain max-w-[160px] sm:max-w-[206.79px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;