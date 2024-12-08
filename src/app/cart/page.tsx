import React from 'react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <span className="px-4">1</span>
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <p className="text-lg font-medium">${item.price}</p>
                  <button className="text-red-500 hover:text-red-700">
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount (-20%)</p>
                <p className="text-red-500">-${discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
              <button className="w-full bg-gray-800 text-white py-2 rounded-lg">
                Apply
              </button>
              <button className="w-full bg-black text-white py-2 rounded-lg mt-4 flex items-center justify-center">
                Go to Checkout ➡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
