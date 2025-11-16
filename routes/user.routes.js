const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// DEBUG
console.log("Controller:", userController);

// Routing standar REST API
router.get('/', userController.getAllUsers);           // GET all
router.get('/:id', userController.getUserById);        // GET by ID
router.post('/', userController.createUser);           // CREATE
router.put('/:id', userController.updateUser);         // UPDATE
router.delete('/:id', userController.deleteUser);      // DELETE

module.exports = router;