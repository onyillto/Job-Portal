const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  week: { type: Number, required: true },
  officeWorkStudyDone: { type: String, required: true },
  supervisorName: { type: String, required: true },
  hoursWorked: { type: Number, required: true },
  daysWorked: { type: Number, required: true },
  picturePath: { type: String, required: true }, // Store the file path of the image
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
