const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  matricNumber: {
    type: String,
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  applicationStatus: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending"
  },
  hasDisciplinaryIssues: {
    type: Boolean,
    default: false
  },
  imageOfGpa: {
    type: String
  },
  email: {
    type: String,
    required: true
  }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
