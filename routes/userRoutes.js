const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// Add new user
router.post('/', userController.addUser);

// Update user by ID
router.put('/:id', userController.updateUserById);

// Delete user by ID
router.delete('/:id', userController.deleteUserById);

// Delete all users
router.delete('/', userController.deleteAllUsers);

module.exports = router;
