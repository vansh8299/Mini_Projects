const commentService = require("../Services/CommentService");

exports.createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.params.id, req.body);
    if (!comment) {
      res.status(404).json({ message: "Comment not found " });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Comment" });
  }
};
