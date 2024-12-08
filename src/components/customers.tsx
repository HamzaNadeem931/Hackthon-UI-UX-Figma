import React from 'react'

const Customers = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-[24px] md:text-[36px] font-extrabold mb-8 text-center">
        Our Happy Customers
      </h1>

      {/* Testimonials Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-[400px] h-auto bg-white rounded-[20px] shadow-lg p-6 border">
          {/* 5-Star Rating */}
          <div className="flex justify-start mb-3 text-yellow-500 text-lg">
            ★★★★★
          </div>
          {/* Customer Info */}
          <div className="flex items-center mb-3">
            <span className="font-bold">Sarah M.</span>
            <span className="ml-2 text-green-600">●</span>
          </div>
          <p className="text-gray-600">
            I am blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full sm:w-[400px] h-auto bg-white rounded-[20px] shadow-lg p-6 border">
          {/* 5-Star Rating */}
          <div className="flex justify-start mb-3 text-yellow-500 text-lg">
            ★★★★★
          </div>
          {/* Customer Info */}
          <div className="flex items-center mb-3">
            <span className="font-bold">Alex K.</span>
            <span className="ml-2 text-green-600">●</span>
          </div>
          <p className="text-gray-600">
            Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to various tastes and occasions.
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full sm:w-[400px] h-auto bg-white rounded-[20px] shadow-lg p-6 border">
          {/* 5-Star Rating */}
          <div className="flex justify-start mb-3 text-yellow-500 text-lg">
            ★★★★★
          </div>
          {/* Customer Info */}
          <div className="flex items-center mb-3">
            <span className="font-bold">James L.</span>
            <span className="ml-2 text-green-600">●</span>
          </div>
          <p className="text-gray-600">
            As someone who is always on the lookout for unique fashion pieces, I am thrilled to have found Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Customers;