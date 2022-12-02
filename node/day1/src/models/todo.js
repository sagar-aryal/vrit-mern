const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "please add first name"],
    maxlength: [100, "first name cannot be more than 100 characters"],
  },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
