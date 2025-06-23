const router = require('express').Router();
const { register, login, getUser } = require('../controller/auth.controller');

// Register route
router.post('/register', register);
// Login route
router.post('/login', login);
// Get user route
router.get('/user/:id', getUser);

module.exports = router;
// This code defines the authentication routes for user registration, login, and fetching user details in an Express application.