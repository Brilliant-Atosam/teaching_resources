const router = require("express").Router();
// GET MATERIALS
router.get("/", (req, res) => res.send("Hello"));
// ADD MATERIAL
router.post("/", (req, res) => res.send("Hello"));
// EDIT MATERIAL
router.put("/", (req, res) => res.send("Hello"));
// DELETE MATERIAL
router.delete("/", (req, res) => res.send("Hello"));
module.exports = router;
