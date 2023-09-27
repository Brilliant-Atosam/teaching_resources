const jwt = require("jsonwebtoken");
const { TOKEN_VERIFICATION_SECRET } = require("../config.json");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.access_token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, TOKEN_VERIFICATION_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Expired Token: Login again to refresh token");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json("Access to this resource requires authentication.");
  }
};
module.exports = { verifyToken };
