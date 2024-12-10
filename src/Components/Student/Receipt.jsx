import React from 'react';

function Receipt() {
  // Simulate receipt data from the payment process (it could come from a backend)
  const receiptData = {
    institutionName: 'Navyug Postgraduate College',
    institutionLogo: 'https://via.placeholder.com/100', // Sample logo URL
    studentName: 'John Doe',
    studentContact: '+1 234 567 8901',
    studentEmail: 'johndoe@example.com',
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
    // Create a new window for printing
    const printWindow = window.open('', '', 'height=800,width=800');

    // Get the content of the receipt to print
    const content = document.getElementById('receipt').innerHTML;

    // Add necessary styles to the print window
    printWindow.document.write(`
        <html>
          <head>
            <title>Receipt</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
              }

              .container {
                min-width: 100%;
                margin: 0 auto;
              }

              /* Center alignment for institution logo and name */
              .institution-header {
                text-align: center;
                margin-top: 30px;
                margin-bottom: 30px;
              }

              .institution-header img {
                width: 100px;
                height: 100px;
                margin-bottom: 10px;
              }

              .institution-header h1 {
                font-size: 24px;
                font-weight: bold;
              }

              /* Date and Time on the top right */
              .payment-date-time {
                position: absolute;
                top: 30px;
                right: 20px;
                font-size: 14px;
              }

              /* Student details on the left */
              .student-details {
                margin-bottom: 20px;
              }

              .student-details div {
                margin-bottom: 8px;
              }

              .student-details span {
                font-size: 16px;
              }

              /* Table styles for the fee breakdown */
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }

              table th,
              table td {
                padding: 10px;
                text-align: left;
                border: 1px solid #ccc;
              }

              table th {
                background-color: #f4f4f4;
                font-weight: bold;
              }

              table td {
                font-size: 16px;
              }

              /* Footer: accountant signature on the bottom-right */
              .footer {
                margin-top: 50px;
                bottom: 20px;
                right: 20px;
                font-size: 16px;
              }

              /* Print specific styles */
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                }

                #receipt {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                }

                /* Set A4 page size */
                @page {
                  size: A4;
                  margin: 0;
                }

                /* Ensure content fits in the page */
                #receipt, #receipt * {
                  visibility: visible;
                }

                .no-print {
                  display: none;
                }
              }
            </style>
          </head>
          <body>
            <div id="receipt">
              <!-- Institution Header -->
              <div class="institution-header">
                <img src="${receiptData.institutionLogo}" alt="Institution Logo" />
                <h1>${receiptData.institutionName}</h1>
              </div>

              <!-- Date and Time of Payment -->
              <div class="payment-date-time">
                <strong>Date & Time:</strong> ${receiptData.paymentDate}<br />
              </div>

              <!-- Student Details on the Left -->
              <div class="student-details">
                <div><strong>Name:</strong> ${receiptData.studentName}</div>
                <div><strong>Contact:</strong> ${receiptData.studentContact}</div>
                <div><strong>Email:</strong> ${receiptData.studentEmail}</div>
                <div><strong>Transaction ID:</strong> ${receiptData.transactionId}</div>
              </div>

              <!-- Fee Breakdown Table -->
              <table>
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Course Fee</td>
                    <td>${receiptData.courseFee}</td>
                  </tr>
                  <tr>
                    <td>Lab Fee</td>
                    <td>${receiptData.labFee}</td>
                  </tr>
                  <tr>
                    <td>Tuition Fee</td>
                    <td>${receiptData.tuitionFee}</td>
                  </tr>
                  <tr>
                    <td>Extra-Curricular Fee</td>
                    <td>${receiptData.extraCurricularFee}</td>
                  </tr>
                  <tr>
                    <th>Total Fee</th>
                    <th>${receiptData.courseFee + receiptData.labFee + receiptData.tuitionFee + receiptData.extraCurricularFee}</th>
                  </tr>
                  <tr>
                    <th>+ ${receiptData.gst}% GST</th>
                    <th>${(receiptData.gst / 100) * (receiptData.courseFee + receiptData.labFee + receiptData.tuitionFee + receiptData.extraCurricularFee)}</th>
                  </tr>
                  <tr>
                    <th>Total Amount Paid</th>
                    <th>${receiptData.totalAmount}</th>
                  </tr>
                </tbody>
              </table>

              <!-- Footer: Accountant Signature -->
              <div class="footer">
                <strong>Accountant Signature:</strong> ${receiptData.accountantSignature}
              </div>
            </div>
          </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();  // Trigger the print dialog
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-white to-blue-200 min-h-screen font-sans" id="receipt">
      <div className="container mx-auto p-8 md:p-12">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            {/* Institution Header */}
            <div className="flex flex-col gap-5 justify-center items-center mb-4">
              <img src={receiptData.institutionLogo} alt="Institution Logo" className="w-24 h-24 mr-4" />
              <h1 className="text-3xl font-bold text-gray-800">{receiptData.institutionName}</h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Fee Payment Receipt</h2>
          </div>

          {/* Student Details (Top Left Corner) */}
          <div className="mb-8 text-left">
            <div className="flex justify-start mb-4">
              <span className="text-lg font-semibold text-gray-700">Name: </span>
              <span className="text-lg text-gray-600 ml-2">{receiptData.studentName}</span>
            </div>
            <div className="flex justify-start mb-4">
              <span className="text-lg font-semibold text-gray-700">Contact: </span>
              <span className="text-lg text-gray-600 ml-2">{receiptData.studentContact}</span>
            </div>
            <div className="flex justify-start mb-4">
              <span className="text-lg font-semibold text-gray-700">Email: </span>
              <span className="text-lg text-gray-600 ml-2">{receiptData.studentEmail}</span>
            </div>
            <div className="flex justify-start mb-4">
              <span className="text-lg font-semibold text-gray-700">Transaction ID: </span>
              <span className="text-lg text-gray-600 ml-2">{receiptData.transactionId}</span>
            </div>
            <hr />
          </div>

          {/* Fee Breakdown */}
          <div className="space-y-6">
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

          {/* Print Button */}
          <div className="flex justify-center mt-8 no-print">
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
