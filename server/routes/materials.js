const { verifyToken } = require("../verification/verify");
const Video = require("../models/Video");
const router = require("express").Router();
// GET MATERIALS
router.get("/videos", verifyToken, async (req, res) => {
  try {
    const videos = await Video.find();
    res.send(videos);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});
// ADD video
router.post("/video", async (req, res) => {
  const newVideo = new Video(req.body);
  console.log(newVideo);
  try {
    // await newVideo.save();
    res.status(201).json("New video added to db");
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});
// EDIT MATERIAL
router.put("/", (req, res) => res.send("Hello"));
// DELETE MATERIAL
router.delete("/", (req, res) => res.send("Hello"));
module.exports = router;
