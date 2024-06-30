'use client'
import React, { useState } from "react";
import "./TicketForm.css";
import Navbar from "@/app/components/profile/Navbar";

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
    <div className="ticket-form-container">
        <Navbar />
      <main>
        <div className="progress-bar">
          <div className="step completed">
            <div className="step-number">1</div>
            <span>Search</span>
          </div>
          <div className="step completed">
            <div className="step-number">2</div>
            <span>Describe Issue</span>
          </div>
          <div className="step completed">
            <div className="step-number">3</div>
            <span>Select Category</span>
          </div>
          <div className="step current">
            <div className="step-number">4</div>
            <span>Contact Information</span>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <span>Additional Details</span>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <span>Payment Info</span>
          </div>
        </div>
        <div className="ticket-form">
          <h2>Create New Ticket</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+(XX) XX XX XX XX"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="First Last"
                  required
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <div className="choices">
                  <div className="input">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label>Male</label>
                  </div>

                  <div className="input">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label>Female</label>
                  </div>

                  <div className="input">
                    <input
                      type="radio"
                      name="gender"
                      value="Prefer not to disclose"
                      checked={formData.gender === "Prefer not to disclose"}
                      onChange={handleChange}
                    />
                    <label>Prefer not to disclose</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="insurance">
              <h3>Travel Insurance Coverage</h3>
              <p>Add Smart Insurance for $30 </p>
              <div className="choices">
                <div>
                  <input
                    type="radio"
                    name="insurance"
                    value="Yes"
                    checked={formData.insurance === "Yes"}
                    onChange={handleChange}
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="insurance"
                    value="No"
                    checked={formData.insurance === "No"}
                    onChange={handleChange}
                  />
                  <label>No, thanks</label>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <p>TicketMaster Â©</p>
        <nav>
          <button>Submit a Ticket</button>
          <button>Track Ticket Status</button>
          <button>Review</button>
          <button>Troubleshooting</button>
          <button>Contact Support</button>
        </nav>
      </footer>
    </div>
  );
};

export default TicketForm;
