const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: [String],

  mainRole: String,
  refreshToken: String,
  accessToken: String,
});

module.exports = mongoose.model("User", userSchema);
