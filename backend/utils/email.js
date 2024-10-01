// sendEmail.js
const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Mail_Id,
      pass: process.env.Mail_Password,
    },
  });
 const name = data.name ? `${data.name},` : "";
  const emailTemplate = `
    <div style="text-align: center;">
      <img src="https://scontent.fabv6-1.fna.fbcdn.net/v/t39.30808-6/461661339_1051619016971323_7993049522037982891_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH9eY2Vb5Y92ash453CD1jVtlhcI6x_MJi2WFwjrH8wmCLHCN3-ZHO1vSUtlG_kCj7AVrxiJKJgiuOshVz_8RC7&_nc_ohc=WSreFvPB3gAQ7kNvgFFdonp&_nc_ht=scontent.fabv6-1.fna&_nc_gid=AfTZsW9pvCOS7SxYoXEXfMW&oh=00_AYDADpQ3rfJDqeS8C1bcvyD11pE62X7E24j2TGTBZMOgIA&oe=6700AA4E" alt="Company Logo" style="width: 150px; height: auto;" />
      
     
      <p>I am pleased to provide a reference for Zainab Adekunle, who worked with us at Chiflowz Automobile Parts in Lagos, Nigeria, as a Junior Logistics Manager and Workshop Supervisor from November 2021 to July 2023.</p>
      <p>During her time with us, Zainab demonstrated exceptional skills in providing technical supervision and oversight in our workshop. She was instrumental in ensuring that our operations ran smoothly by effectively managing our supply chain and logistics. Her ability to assign jobs and create schedules helped maintain efficiency and productivity within the team.

</p>
<p>Zainab consistently displayed professionalism and a strong work ethic, contributing positively to our company culture. I am confident that she will be a valuable asset to any organization.</p>
      <p>Please find the attached reference letter for further details.</p>
    </div>
  `;

  // Hardcoded email address
  const recipientEmail = "adekunlewunmi98@gmail.com"; // Replace with the desired email address

  let info = await transporter.sendMail({
    from: process.env.Mail_Id, // sender address
    to: recipientEmail, // hardcoded recipient's email
    subject: "Reference Confirmation", // Subject line
    html: emailTemplate, // HTML body
  });

  console.log("Email sent:", info.response);
  res.status(200).json({ message: "Email sent successfully!" });
});

module.exports = sendEmail;
