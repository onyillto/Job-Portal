const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  matricNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  supervisorNumber: {
    type: String,
    required: true,
  },
  officeWork: {
    type: String,
    required: true,
  },
  attendancePercentage: {
    type: Number,
    required: true,
  },
  attendanceForm: {
    type: String,
    required: true,
  },
  attendanceForm: {
    type: String,
    required: true,
  },
  applicationStatus: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
