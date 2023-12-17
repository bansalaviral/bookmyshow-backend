import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const userData = req.body;
  userData.password = await bcrypt.hash(userData.password, 10);
  const data = await User.create(userData);
  res.status(200).send({ status: true, message: "Successfully registered!" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email: email.toLowerCase() }).select(
    "+password"
  );
  if (!userData) {
    res.status(401).send({ status: false, message: "Invalid credentials" });
    return;
  }
  if (!bcrypt.compare(password, userData.password)) {
    res.status(401).send({ status: false, message: "Invalid credentials" });
    return;
  }

  const jwtToken = await userData.generateJWTToken();
  console.log("jwtToken", jwtToken);

  res.cookie("jwt", jwtToken, {
    httpOnly: true,
    secure: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
    sameSite: "None",
  });

  res.status(200).json({ status: true, message: "Successfully loggedIn!" });
};

export const getProfile = async (req, res) => {
  const userId = req.user.id;
  const userDetail = await User.findById(userId);
  res.status(200).send(userDetail);
};
