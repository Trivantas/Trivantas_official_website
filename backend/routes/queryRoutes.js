const express = require('express');
const {
  submitQuery,
  getAllQueries,
  getQueryById,
  updateQueryStatus,
} = require('../controllers/queryController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public route to submit query
router.post('/', submitQuery);

// Protected admin routes
router.get('/', protect, getAllQueries);
router.get('/:id', protect, getQueryById);
router.patch('/:id/status', protect, updateQueryStatus);

module.exports = router;
