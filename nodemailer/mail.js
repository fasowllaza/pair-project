const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'elonlaundry@gmail.com', 
        pass: 'elonmusk'
    }
});

let mailOptions = {
    from: 'elonlaundry@gmail.com', 
    to: 'diorvalend@gmail.com',
    subject: 'Elon Laundry',
    text: 'Terima Kasih telah menjadi member Elon Laundry. Anda mendapatkan 5 DodgeCoin!'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error occurs', err);
    } else {
        console.log('Email sent!!!');
    }
});