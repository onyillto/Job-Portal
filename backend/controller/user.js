const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const  User  = require("../model/user");
const  Attendance  = require("../model/attendance");
const  Application = require("../model/application");
const Job = require('../model/jobs')
const sendEmail = require('../utils/email')
//Register Endpoint
const registerAndFillData = async (req, res, next) => {
  try {
    const { name, email, password,level, course } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
      level, 
      course,
    });

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Save user to database
    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          course: user.course,
          level:user.level,
          role: user.role,
          token: token,
        },
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          level: user.level,
          course: user.course,
          role: user.role,
          token: token,
        },
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};



const createAttendance = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { week, officeWorkStudyDone, supervisorName, hoursWorked, daysWorked, weekNumber, pictureUrl } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find or create the attendance record for the user
    let attendance = await Attendance.findOne({ user: userId });

    if (!attendance) {
      attendance = new Attendance({
        user: userId,
        workDetails: {
          week,
          officeWorkStudyDone,
          supervisorName,
          hoursWorked,
          daysWorked
        },
        weeklyPictures: []
      });
    } else {
      // Update workDetails if attendance record already exists
      attendance.workDetails = {
        week,
        officeWorkStudyDone,
        supervisorName,
        hoursWorked,
        daysWorked
      };
    }

    // Check if the week already has a picture
    const weekExists = attendance.weeklyPictures.some(picture => picture.week === weekNumber);
    if (weekExists) {
      return res.status(400).json({ message: 'Picture for this week already exists' });
    }

    // Add the weekly picture
    attendance.weeklyPictures.push({ week: weekNumber, pictureUrl });

    // Save the updated attendance record
    await attendance.save();

    res.status(200).json({ message: 'Attendance record updated successfully', attendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate('user', 'name email');
    res.status(200).json({
      success: true,
      data: attendanceRecords
    });
  } catch (error) {
    res.status(500).json({
      data: {
        message: "Server error",
      },
    });
  }
};

const getAttendanceById = async (req, res, next) => {
  try {
    const { userId, attendanceId } = req.params;

    // Find the attendance record by ID and ensure it belongs to the specified user
    const attendanceRecord = await Attendance.findOne({ _id: attendanceId, user: userId }).populate('user', 'name email');

    if (!attendanceRecord) {
      return res.status(404).json({ message: 'Attendance record not found or does not belong to the specified user' });
    }

    res.status(200).json({
      success: true,
      data: attendanceRecord
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


const studentsTotal = async (req, res, next) => {
  try {
    // Count the total number of users
    const totalUserCount = await User.countDocuments();

    res.status(200).json({
      success: true,
      data: { totalUserCount },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//Get User By Id
const singleUser = async (req, res, next) =>  {
  const userId = req.params.userId;

  // Validate ObjectId
 

  try {
    const user = await User.findById(userId); // Fetch user by ID from the database

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          level: user.level,
          course: user.course,
          role: user.role,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



const countTotalApplicants = async (req, res, next) => {
  try {
    // Count the total number of applicants
    const applicantCount = await Application.countDocuments();

    res.status(200).json({
      success: true,
      data: { applicantCount },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};



// Apply the isAdmin middleware to the route for creating jobs
// const createJob = async (req, res,next) => {
//   try {
//     const { company, course, studentRequired } = req.body;

//     // Create a new job instance
//     const newJob = new Job({
//       company,
//       course,
//       studentRequired
//     });

//     // Save the job to the database
//     await newJob.save();

//     res.status(201).json({
//       success: true,
//       message: 'Job created successfully',
//       data: newJob
//     });
//   } catch (error) {
//     console.error('Error creating job:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error'
//     });
//   }
// };

const getApplicationData = async (req, res, next) => {
  try {
    // Fetch applicant data from the database
    const applications = await Application.find();

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getApplicationById = async (req, res, next) => {
  try {
    const applicationId = req.params.id;

    // Find application by ID
    const application = await Application.findById(applicationId);

    // Check if application exists
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


const acceptApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const application = await Application.findByIdAndUpdate(
      id,
      { applicationStatus: "accepted" },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Extract user email from the application
    const userEmail = application.userEmail; // Adjust according to your schema

    // Send email notification
    const emailData = {
      to: userEmail,
      subject: 'Application Accepted',
      text: 'Your job application has been accepted.',
      html: '<p>Your job application has been accepted.</p>',
    };

    await sendEmail(emailData, req, res);

    res.status(200).json({
      success: true,
      message: "Application accepted successfully and email sent",
      data: application,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const rejectApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const application = await Application.findByIdAndUpdate(
      id,
      { applicationStatus: "rejected" },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application rejected successfully",
      data: application,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createJob =async (req, res,next) => {
  
  try {
    const { company, studentRequired, position, totalApplicantsRequired,location, interestedApplicants } = req.body;

    const newJob = new Job({
      company,
      studentRequired,
      position,
      location,
      totalApplicantsRequired,
      interestedApplicants,
    });

    const savedJob = await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: savedJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
const getAllJobs =  async (req, res,next) => {
  try {
    // Query the database for all job documents
    const jobs = await Job.find();

    // Send the fetched job documents as a response
    res.status(201).json({
      success: true,
      message: "Jobs Fetched Successfully",
      data: jobs,
    });
  } catch (error) {
    // If there's an error, send an error response
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const filledApplications = async (req, res) => {
  try {
    // Assuming filledApplications is a separate endpoint, not a user ID
    // If it's meant to handle user IDs, ensure proper validation on the frontend
    // and handle it accordingly on the backend

    // Query the database for filled applications
    const filledApplications = await Application.find();

    // Respond with the fetched filled applications
    res.json({ filledApplications });
  } catch (error) {
    // Handle errors
    console.error("Error fetching filled applications:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createApplication = async (req, res) => {
  try {
    // Extract data from request body
    const {
      position,
      matricNumber,
      cgpa,
      hasDisciplinaryIssues,
      imageOfGpa
    } = req.body;

    // Extract userId from request parameters
    const { userId } = req.params;

    // Check if userId is present
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Fetch user details from the database
    const user = await User.findById(userId);

    // If user is not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Create a new application object
    const newApplication = new Application({
      position,
      matricNumber,
      cgpa,
      hasDisciplinaryIssues,
      imageOfGpa,
      userId, // Assign userId to the application
      email: user.email // Assign user's email to the application
    });

    // Save the new application
    await newApplication.save();

    // Send response with the created application
    res.status(201).json({
      success: true,
      message: "Application created successfully",
      data: newApplication
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating application:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};



module.exports = {
  registerAndFillData,
  login,
  getAttendanceById,
  getAllAttendance,
  createApplication,
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
  createAttendance
};
