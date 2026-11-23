const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        isUserAlreadyExists.email === email
          ? "email already exists"
          : "username already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
    bio,
    profileImage,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { userInput, password } = req.body;

  // userInput = email OR username

  const user = await userModel.findOne({
    $or: [
        { email: userInput }, 
        { username: userInput }
    ],
  });

  if (!user) {
    return res.status(401).json({
      message: "user not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign(
    { id: user._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "1d"});

  res.cookie("token", token);

  res.status(200).json({
    message: "user logged in",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}


module.exports = {
    registerController,
    loginController
}