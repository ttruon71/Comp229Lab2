const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Get all contacts
router.get('/', contactController.getAllContacts);

// Get contact by ID
router.get('/:id', contactController.getContactById);

// Add new contact
router.post('/', contactController.addContact);

// Update contact by ID
router.put('/:id', contactController.updateContactById);

// Delete contact by ID
router.delete('/:id', contactController.deleteContactById);

// Delete all contacts
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
