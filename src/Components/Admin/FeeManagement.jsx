import React, { useState } from "react";

function FeeManagement() {
  // Example fee data
  const [fees, setFees] = useState([
    {
      id: 1,
      studentName: "John Doe",
      courseFee: 10000,
      labFee: 2000,
      tuitionFee: 15000,
      extraCurricularFee: 1000,
      totalFee: 0,
      gst: 0,
      totalWithGST: 0,
    },
    {
      id: 2,
      studentName: "Jane Smith",
      courseFee: 12000,
      labFee: 2500,
      tuitionFee: 18000,
      extraCurricularFee: 1500,
      totalFee: 0,
      gst: 0,
      totalWithGST: 0,
    },
  ]);

  // State for adding or editing fees
  const [showModal, setShowModal] = useState(false);
  const [currentFee, setCurrentFee] = useState({
    studentName: "",
    courseFee: 0,
    labFee: 0,
    tuitionFee: 0,
    extraCurricularFee: 0,
    totalFee: 0,
    gst: 0,
    totalWithGST: 0,
  });
  const [editing, setEditing] = useState(false);
  const [editFeeId, setEditFeeId] = useState(null);

  // Calculate total fee and GST
  const calculateTotalFee = () => {
    const totalFee =
      currentFee.courseFee +
      currentFee.labFee +
      currentFee.tuitionFee +
      currentFee.extraCurricularFee;
    const gst = totalFee * 0.18;
    const totalWithGST = totalFee + gst;

    setCurrentFee((prev) => ({
      ...prev,
      totalFee,
      gst,
      totalWithGST,
    }));
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentFee((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
    calculateTotalFee();
  };

  // Open modal for adding new fee or editing existing fee
  const openModal = (fee = null) => {
    if (fee) {
      setCurrentFee(fee);
      setEditing(true);
      setEditFeeId(fee.id);
    } else {
      setEditing(false);
      setCurrentFee({
        studentName: "",
        courseFee: 0,
        labFee: 0,
        tuitionFee: 0,
        extraCurricularFee: 0,
        totalFee: 0,
        gst: 0,
        totalWithGST: 0,
      });
    }
    setShowModal(true);
  };

  // Save fee (either add new or update existing)
  const saveFee = (e) => {
    e.preventDefault();
    if (editing) {
      // Update existing fee
      const updatedFees = fees.map((fee) =>
        fee.id === editFeeId ? currentFee : fee
      );
      setFees(updatedFees);
    } else {
      // Add new fee
      const newFee = {
        ...currentFee,
        id: fees.length + 1, // Simple id generation (incremental)
      };
      setFees([...fees, newFee]);
    }

    // Reset form after saving
    setCurrentFee({
      studentName: "",
      courseFee: 0,
      labFee: 0,
      tuitionFee: 0,
      extraCurricularFee: 0,
      totalFee: 0,
      gst: 0,
      totalWithGST: 0,
    });
    setShowModal(false);
  };

  // Delete fee
  const deleteFee = (feeId) => {
    const updatedFees = fees.filter((fee) => fee.id !== feeId);
    setFees(updatedFees);
  };

  // Function to handle print for a specific fee card
  const handlePrint = (fee) => {
    const printWindow = window.open("", "_blank", "width=600,height=400");
  
    // Replace the 'your-logo-url' with the actual logo URL.
    const logoUrl = "https://example.com/logo.png";  // Example logo URL
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Details for ${fee.studentName}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { 
              text-align: center; 
              margin-bottom: 20px; 
              font-size: 24px; 
              font-weight: bold;
            }
            .logo {
              width: 100px;
              margin-bottom: 10px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            table, th, td {
              border: 1px solid black;
            }
            th, td {
              padding: 10px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
              font-weight: bold;
            }
            .footer { text-align: center; margin-top: 40px; }
            .footer p { font-size: 16px; margin-bottom: 50px; }
            .signature { margin-top: 50px; font-size: 16px; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${logoUrl}" class="logo" alt="Institute Logo" />
            <div>Navyug College</div>
          </div>
          
          <div>
            <p><strong>Student Name:</strong> ${fee.studentName}</p>
            
            <!-- Fee Table -->
            <table>
              <tr>
                <th>Fee Type</th>
                <th>Amount (₹)</th>
              </tr>
              <tr>
                <td>Course Fee</td>
                <td>${fee.courseFee}</td>
              </tr>
              <tr>
                <td>Lab Fee</td>
                <td>${fee.labFee}</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>${fee.tuitionFee}</td>
              </tr>
              <tr>
                <td>Extra Curricular Fee</td>
                <td>${fee.extraCurricularFee}</td>
              </tr>
              <tr>
                <td><strong>Total Fee</strong></td>
                <td><strong>${fee.totalFee}</strong></td>
              </tr>
              <tr>
                <td><strong>GST (18%)</strong></td>
                <td><strong>${fee.gst}</strong></td>
              </tr>
              <tr>
                <td><strong>Total with GST</strong></td>
                <td><strong>${fee.totalWithGST}</strong></td>
              </tr>
            </table>
          </div>
  
          <div class="footer">
            <p><strong>Accountant's Signature:</strong></p>
            <div class="signature">__________________________</div>
            <button onclick="window.print()">Print</button>
          </div>
        </body>
      </html>
    `);
  
    printWindow.document.close();
  };
  
  

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Fee Management
      </h1>

      {/* Fee List */}
      <div className="space-y-4">
        {fees.map((fee) => (
          <div
            key={fee.id}
            className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {fee.studentName}
              </h3>
              <p className="text-gray-600">Course Fee: ₹{fee.courseFee}</p>
              <p className="text-gray-600">Lab Fee: ₹{fee.labFee}</p>
              <p className="text-gray-600">Tuition Fee: ₹{fee.tuitionFee}</p>
              <p className="text-gray-600">
                Extra Curricular Fee: ₹{fee.extraCurricularFee}
              </p>
              <p className="text-gray-600">Total Fee: ₹{fee.totalFee}</p>
              <p className="text-gray-600">GST (18%): ₹{fee.gst}</p>
              <p className="text-gray-600">
                Total with GST: ₹{fee.totalWithGST}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => openModal(fee)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => deleteFee(fee.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
              <button
                onClick={() => handlePrint(fee)}
                className="text-green-600 hover:text-green-800"
              >
                Print
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Fee Form Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {editing ? "Edit Fee" : "Add Fee"}
            </h3>
            <form onSubmit={saveFee} className="space-y-4">
              <label className="block">
                Student Name:
                <input
                  type="text"
                  name="studentName"
                  value={currentFee.studentName}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter student's name"
                  required
                />
              </label>
              <label className="block">
                Course Fee:
                <input
                  type="number"
                  name="courseFee"
                  value={currentFee.courseFee}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter course fee"
                  required
                />
              </label>
              <label className="block">
                Lab Fee:
                <input
                  type="number"
                  name="labFee"
                  value={currentFee.labFee}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter lab fee"
                  required
                />
              </label>
              <label className="block">
                Tuition Fee:
                <input
                  type="number"
                  name="tuitionFee"
                  value={currentFee.tuitionFee}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter tuition fee"
                  required
                />
              </label>
              <label className="block">
                Extra Curricular Fee:
                <input
                  type="number"
                  name="extraCurricularFee"
                  value={currentFee.extraCurricularFee}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter extra curricular fee"
                  required
                />
              </label>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-red-600 hover:text-red-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800"
                >
                  {editing ? "Update Fee" : "Add Fee"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeeManagement;
