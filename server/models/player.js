const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  seconds: { type: Number },
  time: { type: String },
});

// Export model
module.exports = mongoose.model("Player", PlayerSchema);
