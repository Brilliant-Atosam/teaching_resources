const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  loginID,
  password,
  TOKEN_VERIFICATION_SECRET,
} = require("../config.json");
router.post("/", async (req, res) => {
  // const { loginID, password } = req.body;
  const compared = await bcrypt.compare(req.body.password, password);
  try {
    if (req.body.loginID === loginID && compared) {
      const access_token = await jwt.sign(
        {
          id: loginID,
        },
        TOKEN_VERIFICATION_SECRET,
        {
          expiresIn: "15s",
        }
      );
      res.send({ access_token });
    } else {
      res.send("Incorrect login credentials");
    }
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
