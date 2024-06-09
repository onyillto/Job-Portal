const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workDetails: {
    week: { type: String, required: true },
    officeWorkStudyDone: { type: String, required: true },
    supervisorName: { type: String, required: true },
    hoursWorked: { type: Number, required: true },
    daysWorked: { type: Number, required: true }
  },
  weeklyPictures: [
    {
      week: { type: Number, required: true },
      pictureUrl: { type: String, required: true }
    }
  ]
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
