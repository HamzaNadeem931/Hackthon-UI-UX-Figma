import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Newsletter Section */}
      <div className="w-full bg-black text-white py-10 px-5 flex flex-col md:flex-row justify-between items-center rounded-lg mb-6">
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h2 className="text-[28px] font-extrabold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>

        {/* Email Input and Button */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 w-[300px] rounded-full text-black outline-none"
          />
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="bg-gray-100 px-6 py-10  lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* SHOP.CO Section */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center lg:items-start">
            <h2 className="text-xl font-bold mb-3">SHOP.CO</h2>
            <p className="text-center lg:text-left text-gray-600 leading-relaxed">
              We have clothes that suit your style and which you are proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4 text-2xl text-gray-500 hover:text-black cursor-pointer">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-instagram "></i>
              <i className="fab fa-pinterest "></i>
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* COMPANY Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-gray-600  hover:text-black cursor-pointer">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            {/* HELP Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">HELP</h3>
              <ul className="space-y-2 text-gray-600  hover:text-black cursor-pointer">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FAQ</h3>
              <ul className="space-y-2 text-gray-600  hover:text-black cursor-pointer">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            {/* RESOURCES Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-gray-600 hover:text-black cursor-pointer">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How-to Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="w-[46.61px] h-[30.03px] flex justify-center items-center rounded-[5.38px]  border-[#D6DCE5] gap-3">
              <i className="text-[#1434CB] fab fa-cc-visa"></i>
              <i className="text-[#EB001B] fab fa-cc-mastercard"></i>
              <i className="text-[#003087] fab fa-cc-paypal"></i>
              <i className="text-black fab fa-cc-apple-pay"></i>
              <i className="text-black fab fa-cc-google-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
