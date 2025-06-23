const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};










// const jwt = require("jsonwebtoken");
// const verifyToken = (req, res, next) => {
//   const token = req.headers.cookie.split("=")[1]; // Attempt to get the token from cookies
//     console.log(req.headers.cookie);
//     console.log(req.headers.cookie.split("="))
//     // const token = req.headers.cookie.access_token; // Attempt to get the token from cookies

//   if (!token) {
//     return res.status(401).json({ message: "Access Denied. No token provided." }); // No token found
//   }

//   try {
//     // Verify the token using the same secret key used during signing
//     // The 'secret' should be stored securely, e.g., in environment variables
//     const decoded = jwt.verify(token, 'blog'); // Replace 'secret' with your actual secret key
//     console.log(decoded);
//     // Add the decoded payload (which includes user ID) to the request object
//     // This makes user information available to subsequent route handlers
//         req.user = decoded;
//     next(); // Token is valid, proceed to the next middleware or route handler
//   } catch (err) {
//     // Token is invalid (e.g., expired, tampered)
//     return res.status(403).json({ message: "Invalid Token." });
//   }
// };