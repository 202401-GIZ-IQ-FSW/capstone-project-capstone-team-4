const express = require('express');
const router = express.Router();
const signController = require('../controllers/auth');

// Admin Signin Routes
router.post('/signin', signController.postSignIn);
router.post('/register', signController.postRegisterUser);
router.post('/signout', signController.getSignOut);

module.exports = router;