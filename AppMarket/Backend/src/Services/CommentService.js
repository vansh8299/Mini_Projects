const Comment = require("../Model/Comment");

exports.createComment = async (id, newFields) => {
  newFields.application = id;
  const newComment = new Comment(newFields);
  return await newComment.save();
};
