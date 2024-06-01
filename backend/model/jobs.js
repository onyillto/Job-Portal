const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  field: String,
  studentRequired: Number,
  Position:String,
  interestedApplicants: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
