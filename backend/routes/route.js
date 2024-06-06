const express = require("express");
const route = express.Router();
const {authMiddleware,isAdmin} = require('../middleware/authMiddleWare')
const {
  registerAndFillData,
  login,
  
  studentsTotal,
  countTotalApplicants,
  createJob,
  getApplicationData,
  getApplicationById,
  acceptApplication,
  rejectApplication,
  getAllJobs,
  singleUser,
  filledApplications,
  createAttendance,
  getAttendanceById,
  getAllAttendance,
  att
} = require("../controller/user");


// New route to count non-admin users
route.get('/students',isAdmin,studentsTotal);
route.get("/applicant-count",isAdmin, countTotalApplicants);
route.post('/post-job',createJob)
route.get("/get-jobs", getAllJobs);
route.get("/applications",isAdmin, getApplicationData);
route.get("/applications/:id", getApplicationById);
route.patch("/applications/:id/accept",isAdmin, acceptApplication);
route.patch("/applications/:id/reject",isAdmin, rejectApplication);
route.get('/:id',singleUser)

// Define route to fetch filled applications
route.post("/register", registerAndFillData);
route.post("/login", login);
route.get("/:id/filledApplications", filledApplications);
route.post('/:userId/attendance', createAttendance);
route.get('/a/attendance', getAllAttendance);
// Get attendance by ID
route.get('/:userId/:attendanceId', getAttendanceById);
module.exports = route;
