'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if (!e.target.closest(".menu-container") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <div className="w-full h-[60px] flex items-center px-[20px] bg-white border-b border-gray-300 relative">
      {/* Hamburger Icon (Visible on mobile) */}
      <div
        className="lg:hidden block cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
      </div>

      {/* Main Heading */}
      <div className="flex items-center flex-1 justify-start">
        <h2 className="font-integral-cf text-[32px] font-bold text-left">
          SHOP.CO
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="lg:flex ml-[50px] gap-[24px] font-satoshi text-[16px] font-normal text-gray-600">
        {/* Dropdown Menu (Mobile) */}
        <div
          className={`menu-container ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md z-10 lg:hidden`}
        >
          <ul className="flex flex-col items-start gap-[16px] py-[10px] px-[20px]">
            <li className="cursor-pointer hover:text-black">
              Shop <span>▼</span>
            </li>
            <li className="cursor-pointer hover:text-black">On Sale</li>
            <li className="cursor-pointer hover:text-black">New Arrivals</li>
            <li className="cursor-pointer hover:text-black">Brands</li>
          </ul>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-[24px]">
          <li className="cursor-pointer hover:text-black">
            Shop <span>▼</span>
          </li>
          <li className="cursor-pointer hover:text-black"><Link href="/Product-Detail">On Sale</Link></li>
          <li className="cursor-pointer hover:text-black"><Link href="/cart">New Arrivals</Link></li>
          <li className="cursor-pointer hover:text-black href=/Categorypage"><Link href="/Categorypage">Brands</Link></li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-[50px] hidden lg:flex justify-end">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products…"
            className="w-full h-[48px] pl-[45px] pr-[15px] bg-[#F0F0F0] rounded-[65px] outline-none text-gray-700"
          />
          <div className="absolute top-1/2 left-[15px] transform -translate-y-1/2">
            <Image src="/images/search.png" alt="Search" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-[20px] items-center justify-end">
        <div className="cursor-pointer">
          <Image src="/images/add-Cart.png" alt="Cart" width={24} height={24} />
        </div>
        <div className="cursor-pointer">
          <Image src="/images/user.png" alt="User" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
