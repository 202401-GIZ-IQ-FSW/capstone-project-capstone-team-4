const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController'); // Adjust the path if necessary

// Create a new ticket
router.post('/', ticketController.createTicket);

// Get all tickets
router.get('/', ticketController.getAllTickets);

// Get a single ticket by ID
router.get('/:id', ticketController.getTicketById);

// Update a ticket by ID
router.put('/:id', ticketController.updateTicket);

// Delete a ticket by ID
router.delete('/:id', ticketController.deleteTicket);
router.get('/search', ticketController.searchTickets)
module.exports = router;
