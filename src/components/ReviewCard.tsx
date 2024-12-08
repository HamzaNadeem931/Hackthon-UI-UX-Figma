import React from "react";

const ReviewCard: React.FC = () => {
  return (
    <div className="w-[580px] h-[241px] border border-gray-300 rounded-lg p-6 flex flex-col justify-between shadow-sm">
      {/* Header: Stars, Name, and Icon */}
      <div className="flex items-center justify-between">
        {/* Star Ratings */}
        <div className="flex items-center">
          {/* Full Stars */}
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          ))}
          {/* Half Star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-400"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77V2z" />
          </svg>
        </div>

        {/* Ellipsis Menu */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </button>
      </div>

      {/* User Name */}
      <div className="flex items-center mt-3">
        <span className="text-lg font-semibold text-black">Samantha D.</span>
        {/* Verified Badge */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-green-500 ml-2"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.2 15-4-4 1.4-1.4L10.8 14l6-6 1.4 1.4z" />
        </svg>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-2">
        "I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable. As a fellow designer, I appreciate the attention
        to detail. It's become my favorite go-to shirt."
      </p>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-4">Posted on August 14, 2023</p>
    </div>
  );
};

export default ReviewCard;
