import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  trailerVideo: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  casts: [
    {
      name: String,
      image: String,
    },
  ],
  duration: Number,
  genre: {
    type: String,
    required: true,
    enum: [
      "Drama",
      "Sci-Fi",
      "Triller",
      "Romance",
      "Horror",
      "Fiction",
      "Comedy",
      "Action",
      "Adventure",
    ],
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  languages: [
    {
      type: String,
      required: true,
      enum: ["English", "Hindi", "Telugu"],
    },
  ],
  theatre: {
    type: Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
});

const Movie = new model("movie", MovieSchema);

export default Movie;

// {
//     "title": "Trolls Band Together",
//     "description": "Based on one of the world`s largest and most successful Coal Mine Resc…",
//     "thumbnail": "https://image.tmdb.org/t/p/original//xgGGinKRL8xeRkaAR9RMbtyk60y.jpg",
//     "bannerImage": "https://image.tmdb.org/t/p/original//xgGGinKRL8xeRkaAR9RMbtyk60y.jpg",
//     "trailerVideo": "https://www.youtube.com/watch?v=QFf91hnpClI",
//     "rating": 8.8,
//     "genre": "Drama",
//     "releaseDate": "2023-12-06",
//     "languages": ["English", "Hindi"],
//     "theatre": {
//         "name": "Ajanta Cinema",
//         "phoneNumber": "9987933487",
//         "location": "Midnapur"
//     }
