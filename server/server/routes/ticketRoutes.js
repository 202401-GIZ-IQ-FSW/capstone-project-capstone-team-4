const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController'); // Adjust the path if necessary

// Create a new ticket
router.post('/tickets', ticketController.createTicket);

// Get all tickets
router.get('/tickets', ticketController.getAllTickets);

// Get a single ticket by ID
router.get('/tickets/:id', ticketController.getTicketById);

// Update a ticket by ID
router.put('/tickets/:id', ticketController.updateTicket);

// Delete a ticket by ID
router.delete('/tickets/:id', ticketController.deleteTicket);

module.exports = router;
