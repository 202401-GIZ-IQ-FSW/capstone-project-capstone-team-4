import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex justify-between md:flex-row flex-col  h-full p-4">
      <div className="flex gap-6">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">
          <FaFacebookF />
        </Link>
        <Link href="/">
          <FaXTwitter />
        </Link>
        <Link href="/">
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
