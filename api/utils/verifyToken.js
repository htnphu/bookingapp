import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  //err, user => for return
  // user = { id: user._id, isAdmin: user.isAdmin }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    // req.user can be written to req.hello or ... because at the beginning we dont have anything like that
    // req.user = user's information from user;
    req.user = user;
    
    // go to next operation
    next()
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // check owner
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // check owner
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};