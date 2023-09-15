const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // host: process.env.EMAIL_HOST,
            port: 465,
            // port: process.env.EMAIL_PORT,
            service: "gmail",
            // service: process.env.EMAIL_SERVICE,
            secure: true,
            // secure: Boolean(process.env.EMAIL_SECURE),
            auth: {
                user: "hazemhassine.business@gmail.com",
                // user: process.env.EMAIL_USER,
                pass: "xpfdxttjfhmdyrqj",
                // pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: process.env.From_EMAIL,
            to: email,
            subject: subject,
            text: message,
        });
        console.log("Email sent");
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
};

// export default sendEmail;
console.log(process.env.EMAIL_PASSWORD)
const random_object = {
    test: "test one",
    test_TWO: 1234,
    test_THREE: true
}

const msg = `
THIS IS A MESSAGE I'mma tes this
`

sendEmail("hazemhassine.edu@gmail.com", "TEST", `${msg} ${JSON.stringify(random_object, null, 2)}`)