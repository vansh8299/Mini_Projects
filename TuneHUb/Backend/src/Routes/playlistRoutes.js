const express = require("express");
const router = express.Router();
const playlistController = require("../Controllers/playlistController");

router.get("/", playlistController.getAllPlaylist);
router.get("/:id", playlistController.getAllPlaylistById);
router.post("/", playlistController.createPlaylist);
router.put("/:id", playlistController.updatePlaylist);
router.delete("/:id", playlistController.deletePlaylist);

module.exports = router;
