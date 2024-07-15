const Ticket = require("../models/ticket"); // Adjust the path if necessary

// search tickets
exports.searchTickets = async (req, res) => {
  const { submitter, status } = req.body;

  try {
    const tickets = await Ticket.find({ submitter, status });
    res.json(tickets);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const ticketData = {
      ...req.body,
      owner: req.session.user_id,
    };
    const ticket = await Ticket.create(ticketData);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate("owner").populate("assignee");
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate("owner")
      .populate("assignee");
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a ticket by ID
exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a ticket by ID
exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
