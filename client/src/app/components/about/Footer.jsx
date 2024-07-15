import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter,  faInstagram  } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Services</a>
                </div>
                <div className="footer-center">
                    <p>&copy; 2023 Company Name. All Rights Reserved.</p>
                    </div>
                    <div className="social-media">
                <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> {/* Use faInstagram icon */}
                </a>
                </div>
        </footer>
    );
};



export default Footer;