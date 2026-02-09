const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CartModel = require('../Models/CartModel')

const UserRegister = async (req, res) => {
  const { fullname, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.json("user already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });


  await CartModel.create({ user: user._id, items: [] });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
    res.json({ user });
};
const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.json("invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.json("invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.status(201).json({ masseag: "user is loged in", email: user.email });
};

module.exports = { UserRegister, UserLogin };
