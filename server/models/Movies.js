const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  thumbnail: String,
  languages: [{ language: String }],
  genre: [{ genreName: String }],
  rate: {
    tomatoes: {
      type: Number,
      default: 0,
    },
    audience: {
      type: Number,
      default: 0,
    },
  },
  releaseDate: String,
  trailer: String,
  duration: String,
});

module.exports = mongoose.model("movies", movieSchema);
