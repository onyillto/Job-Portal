const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const  User  = require("../model/user");
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
          location: user.location,
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

const createApplication = async (req, res) => {
  try {
    // Extract form data from request body
    const {
      userName,
      matricNumber,
      phoneNumber,
      supervisorNumber,
      officeWork,
      userEmail,
      attendancePercentage,
      attendanceForm,
    } = req.body;

    // Check if the matric number already exists in the database
    const existingApplication = await Application.findOne({ matricNumber });
    if (existingApplication) {
      return res
        .status(400)
        .json({ success: false, message: "Matric number already exists" });
    }

    // Create a new application document
    const newApplication = new Application({
      userName,
      userEmail,
      matricNumber,
      phoneNumber,
      supervisorNumber,
      officeWork,
      attendancePercentage,
      attendanceForm,
    });

    // Save the application to the database
    await newApplication.save();

    // Send a success response
    res.status(201).json({
      data: {
        message: "Application created successfully",
        data:newApplication,
      },
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating application:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create application" });
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
const singleUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId); // Fetch user by ID from the database

    if (!user) {
      return res.status(404).json({
        data: {
          message: "User not found",
        },
      });
    }

    res.status(200).json({
      data: {
        message: "User retrieved successfully",
        user: user,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: {
        message: "Server error",
      },
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
    const { company, course, studentRequired, Position, totalApplicantsRequired } = req.body;
    const job = new Job({
      company,
      course,
      studentRequired,
      Position,
      totalApplicantsRequired
    });
    await job.save();
    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: job
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

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

module.exports = {
  registerAndFillData,
  login,
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
};
