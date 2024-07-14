import React from "react";
import Navbar from "../components/about/Navbar";
import Footer from "../components/about/Footer";
import Introduction from "../components/about/Introduction";
import TeamMembers from "../components/about/Teammember";
import MissionVision from "../components/about/MissionVision";
import CompanyHistory from "../components/about/CompanyHistory";
import ContactInformation from "../components/about/ContactInformation";
import "../Styles/styles.css";
import '@fortawesome/fontawesome-svg-core/styles.css';




const page = () => {
  return (
    <>

    <div className="container">
      <header className="header">
      </header>
      <Navbar />
      <div className="Introduction"> 
        <Introduction />
        </div>
        <div className="team-members">
      <TeamMembers />
      </div>
      <div className="mission-vision">
      <MissionVision />
      </div>
      <div className="company-history">
      <CompanyHistory />
      </div>
      <div className="contact-information">
      <ContactInformation />
      </div>
      <Footer />
    </div>
      
        
    </>
  );
};

export default page;
