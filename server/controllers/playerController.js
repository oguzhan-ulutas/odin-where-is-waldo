const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// Handle index route
exports.index = asyncHandler(async (req, res, next) => {
  console.log('helööööggg');
  const helo = { helo: 'helo' };
  res.json(helo);
});
