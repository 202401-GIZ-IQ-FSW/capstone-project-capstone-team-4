'use client'
import { useEffect, useState } from 'react';

const TicketsPage = ({ params }) => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTickets(params.term);
  }, []);

  const fetchTickets = async (query = '') => {
    try {
      const response = await fetch(`http://localhost:3001/api/tickets/search?query=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTickets(searchQuery);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Tickets</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search tickets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 border bg-blue-500 text-white">
          Search
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Owner</th>
              <th className="py-2 px-4 border-b">Assignee</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="py-2 px-4 border-b">{ticket.subject}</td>
                <td className="py-2 px-4 border-b">{ticket.owner?.name}</td>
                <td className="py-2 px-4 border-b">{ticket.assignee?.name}</td>
                <td className="py-2 px-4 border-b">{ticket.status}</td>
                <td className="py-2 px-4 border-b">{ticket.dueDate ? new Date(ticket.dueDate).toLocaleDateString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsPage;
