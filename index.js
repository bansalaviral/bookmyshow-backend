import express from "express";
import UserRoutes from "./routes/user.routes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./config/dbconfig.js";
import MovieRoutes from "./routes/movie.routes.js";
import ShowRoutes from "./routes/show.routes.js";
import cors from "cors";
config();

const app = express();
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.use("/api/user", UserRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);

app.get("*", (req, res) => {
  res.status(400).send("Page not found!");
});

app.listen(5050, async () => {
  await connectToDB();
  console.log(`Server is running on http://localhost:5050`);
});
