const playlistService = require("../Services/playlistService");

exports.getAllPlaylist = async (req, res) => {
  try {
    const playlists = await playlistService.getAllPlaylist();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch playlist" });
  }
};

exports.getAllPlaylistById = async (req, res) => {
  try {
    const playlist = await playlistService.getAllPlaylistById(req.params.id);
    if (!song) {
      res.status(404).json({ message: "playlist not found " });
    }
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch playlist" });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    await playlistService.deletePlaylist(req.params.id);
    res.json({ message: "Playlist deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const song = await playlistService.updatelaylist(req.params.id, req.body);
    if (!song) {
      res.status(404).json({ message: "song not found " });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPlaylist = async (req, res) => {
  try {
    const song = await playlistService.createPlaylist(req.body);
    if (!song) {
      res.status(404).json({ message: "song not found " });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: "Failed to create song" });
  }
};
