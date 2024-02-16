const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// Handle index route
exports.index = asyncHandler(async (req, res, next) => {
  // Get leader board from db
  const leaderBoard = await Player.find({}).sort({ seconds: 1 });

  res.json({ leaderBoard });
});
