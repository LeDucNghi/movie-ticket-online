const express = require("express");
const {
  addNewMovie,
  getAllMovies,
  getMovieDetail,
} = require("../controllers/movieController");
const router = express.Router();

// ADD NEW MOVIE
router.post("/add", addNewMovie);

// GET MOVIE LIST
router.get("/all", getAllMovies);

// GET MOVIE DETAIL
router.get("/:id", getMovieDetail);

module.exports = router;
