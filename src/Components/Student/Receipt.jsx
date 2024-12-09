import React from 'react';

function Receipt() {
  // Simulate receipt data from the payment process (it could come from a backend)
  const receiptData = {
    institutionName: 'Navyug Postgraduate College',
    institutionLogo: 'https://via.placeholder.com/100', // Sample logo URL
    studentName: 'John Doe',
    studentContact: '+1 234 567 8901',
    transactionId: 'TXN123456789',
    courseFee: 5000,
    labFee: 2000,
    tuitionFee: 3000,
    extraCurricularFee: 1000,
    gst: 18,
    totalAmount: 11800, // Including 18% GST
    paymentStatus: 'Success',
    paymentDate: new Date().toLocaleString(),
    accountantSignature: 'John Smith', // Sample accountant name
  };

  // Function to trigger the print dialog
  const printReceipt = () => {
    window.print();
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-white to-blue-200 min-h-screen font-sans" id="receipt">
      <div className="container mx-auto p-8 md:p-12">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            {/* Institution Header */}
            <div className="flex justify-center items-center mb-4">
              <img src={receiptData.institutionLogo} alt="Institution Logo" className="w-24 h-24 mr-4" />
              <h1 className="text-3xl font-bold text-gray-800">{receiptData.institutionName}</h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fee Payment Receipt</h2>
          </div>

          {/* Receipt Details */}
          <div className="space-y-6">
            {/* Student Details */}
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Student Name:</span>
              <span className="text-lg text-gray-600">{receiptData.studentName}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Contact Number:</span>
              <span className="text-lg text-gray-600">{receiptData.studentContact}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-700">Transaction ID:</span>
              <span className="text-lg text-gray-600">{receiptData.transactionId}</span>
            </div>

            <hr className="my-4" />

            {/* Fee Breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-700">Course Fee:</span>
                <span className="text-lg text-gray-600">${receiptData.courseFee}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-700">Lab Fee:</span>
                <span className="text-lg text-gray-600">${receiptData.labFee}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-700">Tuition Fee:</span>
                <span className="text-lg text-gray-600">${receiptData.tuitionFee}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-700">Extra-Curricular Fee:</span>
                <span className="text-lg text-gray-600">${receiptData.extraCurricularFee}</span>
              </div>

              <hr className="my-4" />

              {/* Total Fee */}
              <div className="flex justify-between font-semibold text-xl">
                <span>Total Fee:</span>
                <span>${receiptData.courseFee + receiptData.labFee + receiptData.tuitionFee + receiptData.extraCurricularFee}</span>
              </div>

              <div className="flex justify-between font-semibold text-xl mt-4">
                <span>+ {receiptData.gst}% GST:</span>
                <span>${(receiptData.gst / 100) * (receiptData.courseFee + receiptData.labFee + receiptData.tuitionFee + receiptData.extraCurricularFee)}</span>
              </div>

              <hr className="my-4" />

              {/* Total Amount to be Paid */}
              <div className="flex justify-between font-bold text-2xl">
                <span>Total Amount Paid:</span>
                <span>${receiptData.totalAmount}</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-green-600">Payment Status: {receiptData.paymentStatus}</p>
              <p className="text-lg text-gray-600">Payment Date: {receiptData.paymentDate}</p>
            </div>

            {/* Accountant's Signature */}
            <div className="flex justify-between mt-8 border-t pt-4">
              <span className="text-lg font-semibold text-gray-700">Accountant Signature:</span>
              <span className="text-lg text-gray-600">{receiptData.accountantSignature}</span>
            </div>
          </div>

          {/* Print Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={printReceipt}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out"
            >
              Print as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
