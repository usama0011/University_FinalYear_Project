import jwt from "jsonwebtoken";
// middleware to verify token
export const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.headers.authorization;
  let splitIt = token ? token.split(" ")[1] : null;

  // Check if token exists
  if (!splitIt) {
    return res.redirect("/");
  }

  try {
    // Verify token
    const decoded = jwt.verify(splitIt, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// middleware to verify admin
export const adminMiddleware = (req, res, next) => {
  // Check if user is an admin
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ msg: "Not authorized as an admin" });
  }
};
