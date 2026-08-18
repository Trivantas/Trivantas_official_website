const express = require('express');
const { login, verify, changePassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/verify', protect, verify);
router.patch('/change-password', protect, changePassword);

module.exports = router;
