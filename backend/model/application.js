const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    matricNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    supervisorNumber: {
      type: String,
      required: true,
      trim: true,
    },
    officeWork: {
      type: String,
      required: true,
      trim: true,
    },
    attendanceForm: {
      type: String, // Assuming this could be a URL or path to the form
      required: true,
    },
    attendancePercentage: {
      type: Number, // Assuming this is a percentage represented as a number
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
