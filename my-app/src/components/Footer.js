import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Policy</a>
                <a href="#">Terms of Services</a>
                </div>
                <div>&copy; 2023 Company Name. All Rights Reserved.</div>
                <div>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
        </footer>
    );
};



export default Footer;