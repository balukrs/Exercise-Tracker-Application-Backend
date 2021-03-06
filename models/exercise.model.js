const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseschema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseschema);

module.exports = Exercise;
