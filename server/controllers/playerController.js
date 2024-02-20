const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// Handle index route
exports.index = asyncHandler(async (req, res, next) => {
  // Get leader board from db
  const leaderBoard = await Player.find({}).sort({ seconds: 1 });

  res.json({ leaderBoard });
});

// Player win
exports.winPost = asyncHandler(async (req, res, next) => {
  const newWinner = new Player(req.body);

  // If winner has a name save it.
  if (newWinner.name !== '') {
    await newWinner.save();
  } else {
    return next();
  }

  // Get all leader board and send it.
  const leaderBoard = await Player.find({}).sort({ seconds: 1 });
  res.json({ leaderBoard });
});
