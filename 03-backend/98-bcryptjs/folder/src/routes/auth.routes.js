const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")

const authRouter = express.Router();

// api/auth/register
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex")

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered",
    user,
  });
});

// api/auth/protected
authRouter.post("/protected", (req, res) => {
  let ck = req.cookies;
  res.send(ck);
  console.log(ck);
});

// api/auth/login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email: email });

  if (!user) {
    return res.status(404).json({
      message: "user not found with this email",
    });
  }

  const isPasswordMatched = crypto.createHash("md5").update(password).digest("hex")  === user.password;

  if (!isPasswordMatched) {
    return res.status(404).json({
      message: "wrong password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user logged in succesfully",
    user,
  });
});

module.exports = authRouter;
