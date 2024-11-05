import User from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ErrorHandler } from "../Utils/Error.js";

export const Signup = async (req, res) => {
  const { fullname, email, password, phonenumber, nationality, gender } =
    req.body;
  const HashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    fullname,
    email,
    password: HashPassword,
    phonenumber,
    nationality,
    gender,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(ErrorHandler(404, "User Not Found"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword)
      return next(ErrorHandler(401, "Something Wrong User Credntials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: Hashpassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 Hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
