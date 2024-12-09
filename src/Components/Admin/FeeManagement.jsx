import React, { useState } from "react";

function FeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [fees, setFees] = useState([
    {
      "id": 1,
      "name": "John Doe",
      "enrollNo": "12345",
      "contact": "9876543210",
      "email": "johndoe@example.com",
      "courseFee": 5000,
      "labFee": 1000,
      "tuitionFee": 2000,
      "extracurricularFee": 500,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "enrollNo": "12346",
      "contact": "9876543211",
      "email": "janesmith@example.com",
      "courseFee": 5200,
      "labFee": 1100,
      "tuitionFee": 2100,
      "extracurricularFee": 600,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 3,
      "name": "Alex Johnson",
      "enrollNo": "12347",
      "contact": "9876543212",
      "email": "alexjohnson@example.com",
      "courseFee": 4800,
      "labFee": 950,
      "tuitionFee": 1900,
      "extracurricularFee": 450,
      "gst": 0.18,
      "status": "Pending"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "enrollNo": "12348",
      "contact": "9876543213",
      "email": "emilydavis@example.com",
      "courseFee": 5100,
      "labFee": 1000,
      "tuitionFee": 2000,
      "extracurricularFee": 550,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 5,
      "name": "Michael Brown",
      "enrollNo": "12349",
      "contact": "9876543214",
      "email": "michaelbrown@example.com",
      "courseFee": 5000,
      "labFee": 1000,
      "tuitionFee": 2000,
      "extracurricularFee": 500,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 6,
      "name": "Sophia Martinez",
      "enrollNo": "12350",
      "contact": "9876543215",
      "email": "sophiamartinez@example.com",
      "courseFee": 5300,
      "labFee": 1050,
      "tuitionFee": 2100,
      "extracurricularFee": 600,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 7,
      "name": "William Wilson",
      "enrollNo": "12351",
      "contact": "9876543216",
      "email": "williamwilson@example.com",
      "courseFee": 4900,
      "labFee": 1000,
      "tuitionFee": 2000,
      "extracurricularFee": 450,
      "gst": 0.18,
      "status": "Pending"
    },
    {
      "id": 8,
      "name": "Olivia Moore",
      "enrollNo": "12352",
      "contact": "9876543217",
      "email": "oliviamoore@example.com",
      "courseFee": 5100,
      "labFee": 950,
      "tuitionFee": 2000,
      "extracurricularFee": 500,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 9,
      "name": "Liam Taylor",
      "enrollNo": "12353",
      "contact": "9876543218",
      "email": "liamtaylor@example.com",
      "courseFee": 4800,
      "labFee": 1000,
      "tuitionFee": 1900,
      "extracurricularFee": 450,
      "gst": 0.18,
      "status": "Paid"
    },
    {
      "id": 10,
      "name": "Ava Harris",
      "enrollNo": "12354",
      "contact": "9876543219",
      "email": "avaharris@example.com",
      "courseFee": 5000,
      "labFee": 1000,
      "tuitionFee": 2000,
      "extracurricularFee": 500,
      "gst": 0.18,
      "status": "Paid"
    },
  ]);

  const handlePrint = (studentId) => {
    const student = fees.find((fee) => fee.id === studentId);
    const totalFee = student.courseFee + student.labFee + student.tuitionFee + student.extracurricularFee;
    const gstAmount = totalFee * student.gst;
    const totalAmount = totalFee + gstAmount;

    const printWindow = window.open("", "", "width=600,height=400");
    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
            .signature { margin-top: 40px; text-align: right; }
          </style>
        </head>
        <body>
          <div style="text-align: center;">
            <h2>Institute Logo</h2>
            <h3>Institute Name</h3>
          </div>
          <h3>Fee Receipt</h3>
          <p><strong>Name:</strong> ${student.name}</p>
          <p><strong>Enrollment No:</strong> ${student.enrollNo}</p>
          <p><strong>Contact:</strong> ${student.contact}</p>
          <p><strong>Email:</strong> ${student.email}</p>
  
          <h4>Payment Details</h4>
          <table>
            <tr>
              <th>Fee Type</th>
              <th>Amount (₹)</th>
            </tr>
            <tr>
              <td>Course Fee</td>
              <td>₹${student.courseFee}</td>
            </tr>
            <tr>
              <td>Lab Fee</td>
              <td>₹${student.labFee}</td>
            </tr>
            <tr>
              <td>Tuition Fee</td>
              <td>₹${student.tuitionFee}</td>
            </tr>
            <tr>
              <td>Extracurricular Fee</td>
              <td>₹${student.extracurricularFee}</td>
            </tr>
            <tr>
              <td><strong>Total Fee</strong></td>
              <td><strong>₹${totalFee}</strong></td>
            </tr>
            <tr>
              <td>GST (18%)</td>
              <td>₹${gstAmount}</td>
            </tr>
            <tr>
              <td><strong>Total Amount to be Paid</strong></td>
              <td><strong>₹${totalAmount}</strong></td>
            </tr>
            <tr>
              <td>Status</td>
              <td>${student.status}</td>
            </tr>
          </table>
  
          <div class="signature">
            <p>Signature of Accountant</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };


  // Filter and sort students
  const filteredFees = fees
    .filter(
      (fee) =>
        (statusFilter === "All" || fee.status === statusFilter) &&
        (fee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fee.enrollNo.includes(searchTerm))
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Fee Management</h1>
        <a
          href="/admin-portal"
          className="text-red-600 font-semibold hover:underline"
        >
          Back to Admin Portal
        </a>
      </div>

      {/* Search and Filter Bar */}
      <div className="mt-8 flex lg:gap-4 gap-1 -mx-2">
        <input
          type="text"
          placeholder="Search by Name, Email, or Enrollment No."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Fee List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fee Records</h2>

        {filteredFees.length > 0 ? (
          <div className="space-y-4">
            {filteredFees.map((fee) => (
              <div
                key={fee.id}
                className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {fee.name}
                  </h3>
                  <p className="text-gray-600">
                    Enrollment No: {fee.enrollNo}
                  </p>
                  <p className="text-gray-600">Email: {fee.email}</p>
                  <p className="text-gray-600">Course Fee: ₹{fee.courseFee}</p>
                  <p className="text-gray-600">Lab Fee: ₹{fee.labFee}</p>
                  <p className="text-gray-600">
                    Tuition Fee: ₹{fee.tuitionFee}
                  </p>
                  <p className="text-gray-600">
                    Extracurricular Fee: ₹{fee.extracurricularFee}
                  </p>
                  <p className="text-gray-600">
                    Total Amount: ₹
                    {fee.courseFee +
                      fee.labFee +
                      fee.tuitionFee +
                      fee.extracurricularFee +
                      fee.courseFee * fee.gst}
                  </p>
                  <p
                    className={`${fee.status === "Pending"
                      ? "text-red-600 font-bold"
                      : "text-green-600 font-bold"
                      }`}
                  >
                    Status: {fee.status}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Printing receipt for ${fee.name}`)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Print Receipt
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            No records found. Try adjusting your search or filter.
          </p>
        )}
      </div>
    </div>
  );
}

export default FeeManagement;
