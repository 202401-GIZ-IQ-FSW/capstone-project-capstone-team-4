import React from "react";
import Navbar from "../components/profile/Navbar";
import Footer from "../components/about/Footer";
import TeamMembers from "../components/about/Teammember"

    const Header = () => {
      return (
        <header>
          <nav>
            <ul>
              <li><a href="#">Submit a</a></li>
              <li><a href="#">Check</a></li>
              <li><a href="#">Tec Our</a></li>
              <li><a href="#">Suppor</a></li>
            </ul>
          </nav>
          <button>Get Help</button>
        </header>
  );
};

export default Header;
