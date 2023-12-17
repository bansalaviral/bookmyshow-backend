import { Router } from "express";
import {
  createMovie,
  getMovies
} from "../controllers/movie.controller.js";
import isLoggedIn from "../middlewares/authentication.js";
import authorizedRoles from "../middlewares/authorization.js";
const router = Router();

router.post(
  "/",
  isLoggedIn,
  authorizedRoles("SUPERADMIN", "ADMIN"),
  createMovie
);
// router.post("/", createMovie);
router.get("/list", getMovies);
router.get("/detail/:movieId");
// router.get('/count', getMovieCount)
export default router;
