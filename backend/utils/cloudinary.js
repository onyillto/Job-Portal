const cloudinary = require("cloudinary").v2;

// Configure cloudinary
cloudinary.config({
  cloud_name: "diemc336d",
  api_key: "623342495557489",
  api_secret: "QMsg4GL5gQlUq42nDmekj9rpSXY",
});

module.exports = cloudinary;
