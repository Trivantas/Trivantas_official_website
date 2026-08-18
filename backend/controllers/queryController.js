const Query = require('../models/Query');
const { sendQueryNotification } = require('../utils/emailService');

// Email regex helper
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @desc    Submit a new query (chatbot flow)
// @route   POST /api/queries
// @access  Public
const submitQuery = async (req, res) => {
  try {
    const { name, email, phone, productId, productName, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ success: false, message: 'Mobile number is required' });
    }
    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      return res.status(400).json({ success: false, message: 'Invalid mobile number' });
    }
    if (!productId || !productName) {
      return res.status(400).json({ success: false, message: 'Product information is required' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message query is required' });
    }
    if (message.trim().length < 5) {
      return res.status(400).json({ success: false, message: 'Message must be at least 5 characters long' });
    }
    if (message.trim().length > 1000) {
      return res.status(400).json({ success: false, message: 'Message cannot exceed 1000 characters' });
    }

    const newQuery = await Query.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      productId,
      productName,
      message: message.trim(),
    });

    // Send email notification to admin (asynchronous/non-blocking)
    sendQueryNotification(newQuery);

    return res.status(201).json({
      success: true,
      message: 'Query submitted successfully',
      queryId: newQuery._id,
    });
  } catch (error) {
    console.error('Submit query error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while submitting query',
    });
  }
};

// @desc    Get all queries with search, filter, and sort
// @route   GET /api/queries
// @access  Private (Admin only)
const getAllQueries = async (req, res) => {
  try {
    const { search, status } = req.query;
    let findQuery = {};

    // Filter by status
    if (status && status !== 'All') {
      findQuery.status = status;
    }

    // Search by name, email, phone or product
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      findQuery.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { productName: searchRegex },
      ];
    }

    // Default sorting: Newest first
    const queries = await Query.find(findQuery).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: queries.length,
      queries,
    });
  } catch (error) {
    console.error('Get all queries error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching queries',
    });
  }
};

// @desc    Get a single query by ID
// @route   GET /api/queries/:id
// @access  Private (Admin only)
const getQueryById = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);

    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'Query not found',
      });
    }

    return res.status(200).json({
      success: true,
      query,
    });
  } catch (error) {
    console.error('Get query details error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching query details',
    });
  }
};

// @desc    Update query status
// @route   PATCH /api/queries/:id/status
// @access  Private (Admin only)
const updateQueryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status || !['New', 'Contacted', 'Resolved'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value. Must be New, Contacted, or Resolved',
      });
    }

    const query = await Query.findById(req.params.id);
    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'Query not found',
      });
    }

    query.status = status;
    await query.save();

    return res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      query,
    });
  } catch (error) {
    console.error('Update status error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while updating status',
    });
  }
};

module.exports = {
  submitQuery,
  getAllQueries,
  getQueryById,
  updateQueryStatus,
};
