import { Router } from "express";
import {
  createShow,
  listShows,
  showDetail,
} from "../controllers/show.controller.js";

const router = Router();

router.post("/", createShow);
router.get("/list", listShows);
router.get("/:showId", showDetail);

export default router;
