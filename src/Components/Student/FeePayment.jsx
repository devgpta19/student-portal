import React, { useState } from 'react';

function FeeStatus() {
  // Dummy fee data
  const [courseFee] = useState(5000); // Example course fee
  const [labFee] = useState(2000);    // Example lab fee
  const [tuitionFee] = useState(3000); // Example tuition fee
  const [extraCurricularFee] = useState(1000); // Example extra-curricular fee

  // Calculate the total fee and GST
  const totalFee = courseFee + labFee + tuitionFee + extraCurricularFee;
  const gst = totalFee * 0.18;
  const totalAmount = totalFee + gst;

  return (
    <div className="bg-gradient-to-r from-blue-300 via-white to-blue-200 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/student-portal" className="text-blue-600 font-semibold">Back</a>
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/50" alt="Institution Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-800">Navyug College</h1>
        </div>
        <a href="/student-login-signup" className="text-red-600 font-semibold">Logout</a>
      </div>

      <div className="container mx-auto p-8 md:p-12">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fee Status</h2>

          {/* Fee Breakdown Section */}
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Course Fee:</span>
              <span className="text-lg text-gray-600">${courseFee}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Lab Fee:</span>
              <span className="text-lg text-gray-600">${labFee}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Tuition Fee:</span>
              <span className="text-lg text-gray-600">${tuitionFee}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Extra-Curricular Fee:</span>
              <span className="text-lg text-gray-600">${extraCurricularFee}</span>
            </div>

            <hr className="my-4" />

            {/* Total Fee */}
            <div className="flex justify-between font-semibold text-xl">
              <span>Total Fee:</span>
              <span>${totalFee}</span>
            </div>

            <div className="flex justify-between font-semibold text-xl mt-4">
              <span>+ 18% GST:</span>
              <span>${gst.toFixed(2)}</span>
            </div>

            <hr className="my-4" />

            {/* Total Amount to be Paid */}
            <div className="flex justify-between font-bold text-2xl">
              <span>Total Amount to be Paid:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Pay Now Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/payment"  // You can change this to the actual payment page or functionality
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Pay Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeStatus;
