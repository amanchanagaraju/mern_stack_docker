const jwt = require("jsonwebtoken");

const authRole = (role) => (req, res, next) => {
  try {
    // Get the JWT token from the request header
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Verify the JWT token
    const decodedToken = jwt.verify(token, "your_secret_key");
    if (decodedToken.role !== role) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = authRole;
