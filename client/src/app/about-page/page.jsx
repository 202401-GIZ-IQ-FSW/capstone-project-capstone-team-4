import React from "react";
import Navbar from "../components/profile/Navbar";
import Footer from "../components/profile/Footer";
import TeamMembers from "../components/about/Teammember"
const page = () => {
  return (
    <>
      <Navbar />
      <h1> Hello! About page. </h1>
      <TeamMembers/>
          <Footer />
        
    </>
  );
};

export default page;
