const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");

const UserAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("please login first");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
  } catch (err) {
    res.json({ message: err.message });
  }
};
 module.exports= UserAuth