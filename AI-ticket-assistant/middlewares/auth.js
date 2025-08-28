import jwt from "jsonwebtoken";
import  User  from "../models/user.models.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token found." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const freshUser = await User.findById(decoded._id); // ✅ use await

    if (!freshUser) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = freshUser;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
