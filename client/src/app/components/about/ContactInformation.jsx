import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
    return (
        <section>
            <h2>Contact Information</h2>
            <address>
                <p>Address: 123 Company Street, City, Country</p>
                <p>Phone: +123 456 7890</p>
                <p>Email: info@company.com</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </address>
        </section>

    );
};
      


export default ContactInformation;