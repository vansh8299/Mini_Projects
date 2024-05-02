const express = require("express");
const router = express.Router();
const songController = require("../Controllers/songController");

router.get("/", songController.getAllSongs);
router.get("/:id", songController.getAllSongById);
router.post("/", songController.createSong);
router.put("/:id", songController.updateSong);
router.delete("/:id", songController.deleteSong);
router.post("/addSong", songController.addSongToPlaylist);

module.exports = router;
