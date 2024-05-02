const Playlist = require("../Model/Playlist");

exports.getAllPlaylist = async () => {
  try {
    return await Playlist.find();
  } catch (error) {
    throw new Error("Failed to fetch the application");
  }
};

exports.getAllPlaylistById = async (id) => {
  try {
    const song = await Playlist.findById(id);

    if (!song) {
      throw new Error("Song not found");
    }

    return song;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createPlaylist = async (newFields) => {
  const newPlaylist = new Playlist(newFields);
  return await newPlaylist.save();
};

exports.updatelaylist = async (id, updatedFields) => {
  return await Playlist.findByIdAndUpdate(id, updatedFields, { new: true });
};

exports.deletePlaylist = async (id) => {
  return await Playlist.findByIdAndDelete(id);
};
