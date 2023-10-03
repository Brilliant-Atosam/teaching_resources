const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Refresh_token = require("../models/RefreshToken");
const {
  loginID,
  password,
  TOKEN_VERIFICATION_SECRET,
  REFRESH_TOKEN_VERIFICATION_SECRET,
} = require("../config.json");
// GENERATE ACCESS TOKEN
const generateAccessToken = () =>
  jwt.sign({}, TOKEN_VERIFICATION_SECRET, {
    expiresIn: "15s",
  });
// GENERATE REFRESH TOKEN
const generateRefreshToken = () =>
  jwt.sign({}, REFRESH_TOKEN_VERIFICATION_SECRET, { expiresIn: "20m" });
router.post("/", async (req, res) => {
  const compared = await bcrypt.compare(req.body.password, password);
  try {
    if (req.body.loginID === loginID && compared) {
      const access_token = generateAccessToken();
      const refresh_token = generateRefreshToken();
      const newRefreshToken = await new Refresh_token({ token: refresh_token });
      await newRefreshToken.save();
      res.send({ access_token, refresh_token });
    } else {
      res.send("Incorrect login credentials");
    }
  } catch (err) {
    res.send(err);
  }
});
router.post("/token/refresh", async (req, res) => {
  try {
    const refresh_token = req.headers?.refresh_token?.split(" ")[1];
    const token = await Refresh_token.findOne({ token: refresh_token });
    const verified_refresh_token = await jwt.verify(
      refresh_token,
      REFRESH_TOKEN_VERIFICATION_SECRET
    );
    if (token && verified_refresh_token) {
      const newRefreshToken = await generateRefreshToken();
      await Refresh_token.updateOne(
        { token: refresh_token },
        { $set: { token: newRefreshToken } }
      );
      res.send({ refresh_token: newRefreshToken });
    } else {
      res.send("We received an invalid token or nothing");
    }
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
