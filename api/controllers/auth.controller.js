import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill up all required fields.");
  }

  //Check password length
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters.");
  }

  //Check if username already exist
  const checkUsername = await User.findOne({ username });

  if (checkUsername) {
    res.status(400);
    throw new Error("Username has already been register.");
  }

  //Check if email already exist
  const checkEmail = await User.findOne({ email });

  if (checkEmail) {
    res.status(400);
    throw new Error("Email has already been register.");
  }

  //Hash user password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //Create user in database
  const newUser = new User({ username, email, password: hashPassword });
  const user = await newUser.save();

  res.status(201).json({ msg: "User created successfully", user });
});
