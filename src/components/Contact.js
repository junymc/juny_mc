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
        <div className="bigbox">
            <form onSubmit={sendEmail}>
                <div className="contact-box">
                    <h1 className="contact-title">Contact Me</h1>
                    <div className="form-container">
                        <div className="form">
                            <input type="text" className="form--box" placeholder="Name" name="name" required />
                        </div>
                        <div className="form">
                            <input type="email" className="form--box" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="form">
                            <input type="text" className="form--box" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="form">
                            <textarea className="form--box form--box__textarea" placeholder="Your Message" name="message" required />
                        </div>

                    </div>
                    <div className="submit">
                        <input className="button" type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
    )

}