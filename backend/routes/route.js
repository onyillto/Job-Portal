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
  createApplication,
  userReport,
  getAllUser
} = require("../controller/user");

const upload = require("../utils/uploader");

// New route to count non-admin users
route.get('/students',isAdmin,studentsTotal);
route.get("/applicant-count",isAdmin, countTotalApplicants);
route.post('/post-job',isAdmin, createJob)
route.get("/jobs", getAllJobs);
route.get("/applications",isAdmin, getApplicationData);
route.get("/applications/:id",isAdmin, getApplicationById);
route.patch("/applications/:id/accept",isAdmin, acceptApplication);
route.patch("/applications/:id/reject",isAdmin, rejectApplication);
route.get('/:userId',singleUser)

// Define route to fetch filled applications
route.post("/register", registerAndFillData);
route.post("/login", login);
route.get("/:id/filledApplications",isAdmin, filledApplications);
route.post(
  "/:userId/attendance",
  upload.single("pictureFile"),
  createAttendance
);
route.get('/all/attendance',isAdmin, getAllAttendance);
// Get attendance by ID
route.get('/:userId/:attendanceId', getAttendanceById);
//User Create Application
route.post("/:userId/aply", upload.single("imageOfGpa"), createApplication);
route.get('/report/:userId/attendance',isAdmin, userReport);
route.get('/',getAllUser)
module.exports = route;