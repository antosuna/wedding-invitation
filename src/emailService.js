// src/emailService.js
import emailjs from '@emailjs/browser';

const sendEmailNotification = (templateParams) => {
    emailjs.send('service_nj1u2ye', 'template_5rmmktf', templateParams, {
        publicKey: '',
    }).then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
    }).catch((error) => {
        console.error("Failed to send email.", error);
    });
};

export { sendEmailNotification };
