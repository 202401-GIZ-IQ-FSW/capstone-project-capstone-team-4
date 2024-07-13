'use client'
import { useEffect, useState } from 'react';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/ticket');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTickets();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Tickets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-500">
          <thead>
            <tr>
              <th className="py-2 px-4 border bg-slate-200 border-gray-500" >Subject</th>
              <th className="py-2 px-4 border bg-slate-200 border-gray-500" >Owner</th>
              {/* <th className="py-2 px-4 border bg-slate-200 border-gray-500" >Assignee</th> */}
              <th className="py-2 px-4 border bg-slate-200 border-gray-500" >Status</th>
              <th className="py-2 px-4 border bg-slate-200 border-gray-500" >Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="py-2 px-4 border border-gray-500 text-center">{ticket.subject}</td>
                <td className="py-2 px-4 border border-gray-500 text-center">{ticket.owner?.name}</td>
                {/* <td className="py-2 px-4 border border-gray-500 text-center">{ticket.assignee?.name}</td> */}
                <td className="py-2 px-4 border border-gray-500 text-center">{ticket.status}</td>
                <td className="py-2 px-4 border border-gray-500 text-center">{ticket.dueDate ? new Date(ticket.dueDate).toLocaleDateString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsPage;
