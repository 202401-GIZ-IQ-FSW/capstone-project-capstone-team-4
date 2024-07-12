"use client";

import React, { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    dob: "",
    country: "",
    gender: "",
    insurance: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(e)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="font-sans text-center">
      <header className="flex justify-between items-center p-5">
        <h1 className="text-2xl">TicketMaster</h1>
        <nav className="flex items-center space-x-4">
          <p className="px-2">Support</p>
          <p className="px-2">New</p>
          <button className="mx-1 h-8 border border-black bg-white px-3">Submit</button>
          <button className="mx-1 h-8 border border-black bg-white px-3">View Tickets</button>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto">
        <div className="flex justify-between my-5">
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>1</span>
            </div>
            <span>Search</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>2</span>
            </div>
            <span>Describe Issue</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>3</span>
            </div>
            <span>Select Category</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>4</span>
            </div>
            <span>Contact Information</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>5</span>
            </div>
            <span>Additional Details</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 relative top-[-50%]">
              <span>6</span>
            </div>
            <span>Payment Info</span>
          </div>
        </div>
        <div className="bg-white max-w-2xl mx-auto p-5 text-left shadow-lg">
          <h2 className="mb-5 text-2xl">Create New Ticket</h2>
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl mb-3">Ticket Details</h3>
            <p className="mb-5">Fill out the Ticket Form</p>
            <div className="flex justify-around mb-5">
              <div className="flex-1 mr-5">
                <label className="block mb-2 font-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email"
                  className="w-full p-3 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-bold">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+(XX) XX XX XX XX"
                  className="w-full p-3 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="flex justify-around mb-5">
              <div className="flex-1 mr-5">
                <label className="block mb-2 font-bold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="First Last"
                  className="w-full p-3 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-bold">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-3 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="flex justify-around mb-5">
              <div className="flex-1 mr-5">
                <label className="block mb-2 font-bold">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 mb-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-bold">Gender</label>
                <div className="flex gap-5 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label>Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label>Female</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Prefer not to disclose"
                      checked={formData.gender === "Prefer not to disclose"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label>Prefer not to disclose</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-5 rounded mb-4">
              <h3 className="mb-3">Travel Insurance Coverage</h3>
              <p className="mb-3">Add Smart Insurance for $30</p>
              <div className="flex gap-10">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="insurance"
                    value="Yes"
                    checked={formData.insurance === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label>Yes</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="insurance"
                    value="No"
                    checked={formData.insurance === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label>No, thanks</label>
                </div>
              </div>
            </div>
            <button type="submit" className="px-5 py-2 bg-white border border-black rounded hover:bg-gray-100">
              Submit
            </button>
          </form>
        </div>
      </main>
      <footer className="mt-10 p-4 bg-gray-100 border-t border-gray-300 text-center">
        <p className="mb-4">TicketMaster ©</p>
        <nav className="flex justify-center gap-5">
          <button className="underline">Submit a Ticket</button>
          <button className="underline">Track Ticket Status</button>
          <button className="underline">Review</button>
          <button className="underline">Troubleshooting</button>
          <button className="underline">Contact Support</button>
        </nav>
      </footer>
    </div>
  );
};

export default TicketForm;
