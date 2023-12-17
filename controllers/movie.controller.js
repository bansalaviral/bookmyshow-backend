import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";

export const createMovie = async (req, res) => {
  const movieData = req.body;
  console.log(movieData);
  try {
    // console.log('theatre1 > ', movieData.theatre);
    let theatre = await Theatre.findOne({ name: movieData?.theatreName });
    console.log("theatre2 > ", theatre);
    if (!theatre) {
      theatre = await Theatre.create({
        name: movieData.theatreName,
        location: movieData.theatreLocation,
        phoneNumber: movieData.theatreNumber,
      });
    }
    console.log("theatre3 > ", theatre);

    const data = await Movie.create({ ...movieData, theatre: theatre._id });
    // res.status(200).send(data);
    res.status(200).json({ message: "Successfully Registered", status: 200 });
  } catch (e) {
    res.status(500).send(e);
  }
};
//req.params.id
export const getMoviebyId = async (req, res) => {
  const movieId = req.params.id;
  const movie = await Movie.findById(movieId);
  try {
    res.status(200).send(movie);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getMovies = async (req, res) => {
  const type = req.query.type; // ALL, UPCOMING, LIVE
  const title = req.query.title;
  const page = req.query.page ? +req.query.page : 1;
  let queryFilter = {};
  if (title) {
    queryFilter.title = new RegExp(title, "g");
  }
  switch (type) {
    case "ALL": {
      break;
    }
    case "UPCOMING": {
      queryFilter.releaseDate = { $gt: new Date() }; //UPCOMING
      break;
    }
    case "LIVE": {
      queryFilter.releaseDate = { $lte: new Date() }; //LIVE
      break;
    }
    default:
      break;
  }

  try {
    const results = await Movie.find(queryFilter)
      .skip((page - 1) * 12)
      .limit(12)
      .populate("theatre");
    const count = await Movie.countDocuments();
    res.status(200).send({ page, results, total_pages: Math.ceil(count / 10) });
  } catch (e) {
    res.status(500).send(e);
  }
};
