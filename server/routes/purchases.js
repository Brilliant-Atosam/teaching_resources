const router = require("express").Router();
// GET ALL PURCHASES
router.get("/", (req, res) => res.send("Hello"));
// ADD A PURCHASE
router.post("/", (req, res) => res.send("Hello"));
module.exports = router;
