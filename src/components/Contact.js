import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('gmail', 'template_tvsle2b', e.target, 'user_HU3CjvWfvARzWX8fzDveE')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className="contact-box">
            <form onSubmit={sendEmail}>
                <div className="form-container">
                    <div className="form">
                        <label>Name</label>
                        <input type="text" className="form-box" placeholder="Name" name="name" required />
                    </div>
                    <div className="form">
                        <label>Email</label>
                        <input type="email" className="form-box" placeholder="Email Address" name="email" required />
                    </div>
                    <div className="form">
                        <label>Subject</label>
                        <input type="text" className="form-box" placeholder="Subject" name="subject" required />
                    </div>
                    <div className="form">
                        <label>Message</label>
                        <textarea className="form-box" placeholder="Your Message" name="message" required />
                    </div>
                    <div className="button">
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
    )

}