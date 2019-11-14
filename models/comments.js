var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  author: String,
  body: String,
  date: {
    type: Date, default:Date.now
  }
});

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;