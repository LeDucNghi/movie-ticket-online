const Movie = require("../models/Movies");

// GET MOVIE LIST
exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();

  res.status(200).send({ movies });
};

// GET MOVIE DETAIL
exports.getMovieDetail = async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);

    res.status(200).send({ data: movie });
  } catch (error) {
    console.log(
      "🚀 ~ file: movieController.js:18 ~ exports.getMovieDetail= ~ error:",
      error
    );
  }
};

// ADD NEW MOVIE
exports.addNewMovie = async (req, res) => {
  const { name, languages, genre, releaseDate, trailer, duration, thumbnail } =
    req.body;

  if (
    !name ||
    !languages ||
    !genre ||
    !releaseDate ||
    !trailer ||
    !duration ||
    !thumbnail
  )
    return res.status(400).send({ message: "Something are missing 🤔" });

  const movie = await Movie.findOne({ name: name });

  if (movie)
    return res
      .status(403)
      .send({ message: "This movie is existed already 😢" });

  try {
    const result = await Movie.create({
      name: name,
      languages: languages,
      genre: genre,
      releaseDate: releaseDate,
      trailer: trailer,
      duration: duration,
      thumbnail: thumbnail,
    });

    res.status(200).send({ message: `Movie ${name} is created` });
  } catch (error) {
    console.log(
      "🚀 ~ file: movieController.js:23 ~ exports.handleAddNewMovie= ~ error:",
      error
    );
  }
};
