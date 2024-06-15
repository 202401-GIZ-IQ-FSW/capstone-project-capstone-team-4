import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between md:flex-row flex-col  h-full">
      <div className="flex">
        <h5 className="ps-2">Terms of Service</h5>
        <h5 className="ps-2">Privacy Policy</h5>
        <h5 className="ps-2">Contact Us</h5>
      </div>
      <div className="flex ">
        <h5 className="ps-2">Terms</h5>
        <h5 className="ps-2">Privac</h5>
        <h5 className="ps-2">Contact</h5>
      </div>
    </footer>
  );
};

export default Footer;
