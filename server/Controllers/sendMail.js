const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const name = await req.body.name;
    const email = await req.body.email;
    const phNumber = await req.body.phNumber;
    const message = await req.body.message;

    const mail = {
      from: name,
      to: process.env.TO_Email,
      subject: "Contact Form Submission - Portfolio",
      html: `<p><b>Name</b>: ${name}</p>
      <p><b>Email</b>: ${email}</p>
      <p><b>Phone Number</b>: ${phNumber}</p>
      <p><b>Message</b>: ${message}</p>`,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_Email,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify((error) => {
      if (error) {
        console.log("Verification Error is " + error);
      } else {
        console.log("Ready to send!");
      }
    });

    transporter.sendMail(mail, (error) => {
      if (error) {
        throw Error("Something went wrong!" + error);
      } else {
        res.status(201).json({
          status: "success",
          mail,
        });
      }
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

module.exports = sendMail;
