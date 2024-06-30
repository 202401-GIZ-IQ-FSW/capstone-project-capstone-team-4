'use client'
import React, { useState } from 'react';
//import { useRouter } from 'next/router';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    assignee: '',
    status: 'not started',
    subject: '',
    issue: '',
    dueDate: '',
  });
  const [error, setError] = useState('');
  //const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred');
      }

      //router.push('/tickets'); // Redirect to tickets list page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create New Ticket</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="owner">
              Owner
            </label>
            <input
              type="text"
              id="owner"
              name="owner"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.owner}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="assignee">
              Assignee
            </label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.assignee}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="done">Done</option>
              <option value="working">Working</option>
              <option value="not started">Not Started</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="issue">
              Issue
            </label>
            <textarea
              id="issue"
              name="issue"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.issue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="dueDate">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
