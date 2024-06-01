const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const  User  = require("../model/user");
const  Application = require("../model/application");
const {Job} = require('../model/jobs')
const registerAndFillData = async (req, res, next) => {
  try {
    const { name, email, password, location, field } = req.body;

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
      location,
      field,
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
          location: user.location,
          field: user.field,
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
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          location: user.location,
          field: user.field,
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

const createApplication = async (req, res, next) => {
  try {
    const {
      userName,
      matricNumber,
      phoneNumber,
      supervisorNumber,
      officeWork,
      attendanceForm,
      attendancePercentage,
    } = req.body;

    // Validate that the matric number is unique
    let existingApplication = await Application.findOne({ matricNumber });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Application with this matric number already exists",
      });
    }
console.log('hi')
    // Assuming you have some way to identify the user, e.g., from a JWT token
    const userId = req.user._id; // Assuming the user ID is available in req.user

    // Create new application with the user reference
    const newApplication = new Application({
      user: userId,
      userName,
      matricNumber,
      phoneNumber,
      supervisorNumber,
      officeWork,
      attendanceForm,
      attendancePercentage,
    });

    // Save application to database
    await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application created successfully.",
      data: newApplication,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


const studentsTotal = async (req, res, next) => {
  try {
    // Count the number of non-admin users
    const nonAdminUserCount = await User.countDocuments({ isAdmin: false });

    res.status(200).json({
      success: true,
      data: { nonAdminUserCount },
    });
  } catch (error) {
    console.error(error);
    next(error);
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
const createJob = async (req, res,next) => {
  try {
    const { company, field, studentRequired } = req.body;

    // Create a new job instance
    const newJob = new Job({
      company,
      field,
      studentRequired
    });

    // Save the job to the database
    await newJob.save();

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: newJob
    });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

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
module.exports = {
  registerAndFillData,
  login,
  createApplication,
  studentsTotal,
  countTotalApplicants,
  createJob,
  getApplicationData,
};
