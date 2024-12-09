import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import Footer from "../Footer";

const Studenthome = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-50 p-5 pt-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex items-center text-3xl font-bold gap-3">
          <MdHomeFilled />
          <span className="hidden lg:block">Home Page</span>
        </h1>
        <a href="/" className="text-3xl font-bold hover:text-red-500 transition">
          <IoMdLogOut />
        </a>
      </div>

      {/* Main Content */}
      <div className="main h-[calc(100%-4rem)] w-full p-5 pt-14">
        {/* Top Section */}
        <div className="sm:h-screen md:h-72 lg:h-72 w-full flex flex-col md:flex-row lg:justify-between gap-5">
          {/* Profile Picture */}
          <div className="w-full md:w-auto flex items-center justify-center">
            <div
              className="bg-black hover:shadow-blue-200 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-cover bg-center h-64 w-64 rounded-full shadow-lg flex justify-center items-center text-zinc-200 font-bold text-xl cursor-pointer"
              style={{ backgroundImage: `url('')` }}
            >
              <img src="" alt="" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>

          {/* Student Details */}
          <div className="lg:w-[calc(100%-22rem)] lg:p-5 mt-3 lg:mt-0 lg:ml-16 rounded-md bg-white shadow-md p-5">
            <h1 className="uppercase text-2xl mb-6 font-bold">Student Details</h1>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-sm font-thin text-gray-600">Name</h2>
                <p className="text-lg font-semibold">John Doe</p>
              </div>
              <div>
                <h2 className="text-sm font-thin text-gray-600">Enrollment No.</h2>
                <p className="text-lg font-semibold">1543CS202460</p>
              </div>
              <div>
                <h2 className="text-sm font-thin text-gray-600">Department</h2>
                <p className="text-lg font-semibold">Computer Science and Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="mt-5 lg:mt-10 flex lg:flex-nowrap gap-5 lg:justify-between lg:p-5 px-1 py-4 w-full overflow-x-auto space-x-4">
          {/* Fee Status */}
          <a href="/fee-payment" className="h-48 min-w-[70%] lg:min-w-[30%] lg:h-auto mt-2 p-5 rounded-lg bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" >
            <div>
              <h1 className="text-lg font-semibold mb-2"> <GiReceiveMoney className="text-green-400 text-3xl" /> <span> Fee Status </span></h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center float-start gap-2">
                  <p className="bg-orange-100 text-orange-500 px-2 py-1 rounded-xl">Pending!</p>
                  <a className="text-blue-500 text-sm flex items-center gap-1" href="fee-payment">
                    <FaExternalLinkAlt /> Pay Now
                  </a>
                </div>
                <a href="/print-receipt"><button className="p-1 bg-zinc-200 text-black rounded-md float-end ">Print Receipt</button></a>
              </div>
            </div>
          </a>

          {/* Registration Status */}
          <a href="/registration" className="h-48 min-w-[70%] lg:min-w-[30%] lg:h-auto mt-2 p-5 rounded-lg bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div >
              <h1 className="text-lg font-semibold mb-2"><IoIosPersonAdd className="text-blue-400 text-3xl" />Registration Status</h1>
              <div className="flex items-center gap-2">
                <p className="bg-green-100 text-green-500 px-2 py-1 rounded-xl">Done</p>
                <a className="text-blue-500 text-sm flex items-center gap-1" href="registration-done">
                  <FaExternalLinkAlt /> View
                </a>
              </div>
            </div>
          </a>


          {/* Academic Card */}
          <a href="/academic" className="h-48 min-w-[70%] lg:min-w-[30%] lg:h-auto mt-2 p-5 rounded-lg bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" >
            <div >
              <h1 className="text-lg font-semibold mb-2"> <HiAcademicCap className="text-3xl text-orange-400" /> Academic</h1>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Studenthome;
