import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { createError } from "../utils/error.js"

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User( {
      username: req.body.username,
      email: req.body.email, 
      password: hash,
    })

    await newUser.save();

    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    })

    if (!user) {
      return next(createError(404, "User not found!"));
    } 
    
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

    // for verifying identity of users whether they're admin or normal user
    // use this command on terminal to generate secret key: openssl rand -base64 32
    
    // PURPOSE: when we need to CRUD a hotel or models, its verify our token first, then check our user information
    // if it is admin, we will allow it to do CRUD models
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    const {password, isAdmin, ...otherDetails} = user._doc;
    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong password or username!"));
    }

    // httpOnly: true => does not allow any client secret to reach this cookie => much more secure
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};