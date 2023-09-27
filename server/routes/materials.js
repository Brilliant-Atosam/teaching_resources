const { verifyToken } = require("../verification/verify");

const router = require("express").Router();
// GET MATERIALS
router.get("/", verifyToken, async (req, res) => {
  try {
    res.send("hello");
  } catch (err) {
    res.status(500).send("server error");
  }
});
// ADD MATERIAL
router.post("/", (req, res) => res.send("Hello"));
// EDIT MATERIAL
router.put("/", (req, res) => res.send("Hello"));
// DELETE MATERIAL
router.delete("/", (req, res) => res.send("Hello"));
module.exports = router;
