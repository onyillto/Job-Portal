const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  
  studentRequired: {
    type: Number,
    required: true,
  },
  location:{
    type:String,
    required:true
  },
  position: {
    type: String,
    required: true,
  },
  totalApplicantsRequired: {
    type: Number,
    required: true,
  },
  
  interestedApplicants: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;