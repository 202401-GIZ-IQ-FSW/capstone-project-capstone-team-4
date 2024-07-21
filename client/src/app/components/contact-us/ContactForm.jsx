import React from "react";


const ContactForm = () => {
    return (
        <form className="contact-form">
            <h2>Get in touch</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Your Email Address" />
            <textarea placeholder="Describe your issue"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};


export default ContactForm;
