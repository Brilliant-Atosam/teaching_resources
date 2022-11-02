const router = require("express").Router();
const Teacher = require("../models/Teacher");
// REGISTER NEW TEACHER
router.post("/register", async (req, res) => {
  const newMember = new Teacher(req.body);
  await newMember.save();
  console.log(await newMember.save());
  res.send("Awesome");
});
// TEACHER LOGIN
router.post("/login", (req, res) => res.send("Hello"));
// RESET PASSWORD
router.put("/reset", (req, res) => res.send("hello"));
// CHANGE PASSWORD
router.put("/change/password", (req, res) => res.send("Hello"));
module.exports = router;
