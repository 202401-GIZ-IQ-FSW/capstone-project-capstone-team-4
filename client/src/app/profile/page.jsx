import React from "react";
import Navbar from "../components/profile/Navbar";
import Profile from "../components/profile/Profile";
import Sidebar from "../components/profile/Sidebar";
import Footer from "../components/profile/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 md:grid-rows-6 h-screen">
        <div className="p-4 col-start-1 col-end-2 row-start-1 row-end-2 md:row-end-6 bg-gray-100 text-black">
          <Sidebar />
        </div>
        <div className="p-4 col-start-1 col-end-7 row-start-2 row-end-6 md:col-start-2 md:col-end-7 md:row-start-1 md:row-end-6 bg-white text-black">
          <Profile />
        </div>
        <div className="p-0 col-start-1 col-end-7 row-start-6 row-end-7  text-black">
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
