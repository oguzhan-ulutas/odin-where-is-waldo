const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// Handle index route
exports.index = asyncHandler(async (req, res, next) => {
  console.log('helöööö');
  res.send('NOT IMPLEMENTED: Book update GET');
});
