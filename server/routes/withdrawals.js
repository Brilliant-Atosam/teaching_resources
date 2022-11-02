const router = require("express").Router();
// GET WITHDRAWALS
router.get("/", (req, res) => res.send("Hello"));
// MAKE WITHDRAWALS
router.post("/", (req, res) => res.send("Hello"));
// COMPLETE WITHDRAWALS
router.put("/", (req, res) => res.send(""));
module.exports = router;
