const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com', // Your Gmail email address
      pass: 'your-password', // Your Gmail password or application-specific password
    },
  });

  // Configure the email details
  const mailOptions = {
    from: 'your-email@gmail.com', // Your Gmail email address
    to: 'shri66688@gmail.com', // Destination email address
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// ...rest of your server-side code...

// Start the server
app.listen(8001, () => {
    console.log('Server started on port 8001');
  });
  
