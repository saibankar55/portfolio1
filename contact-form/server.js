const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, surname, mobile, email, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saibankar44@gmail.com',  // Your Gmail account
            pass: 'Deepa@1234'          // Your Gmail password or App password
        }
    });

    const mailOptions = {
        from: email,
        to: 'saibankar44@gmail.com',
        subject: `New message from ${name} ${surname}`,
        text: `
            Name: ${name} ${surname}
            Mobile: ${mobile}
            Email: ${email}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});