const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true
  },
  week: { type: Number, required: true },
  officeWorkStudyDone: { type: String, required: true },
  supervisorName: { type: String, required: true },
  hoursWorked: { type: Number, required: true },
  daysWorked: { type: Number, required: true },
  pictureUrl: { type: String, required: true } // Assuming pictures are stored as URLs
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
