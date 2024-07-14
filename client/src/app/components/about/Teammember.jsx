import React from "react";

import Image from "next/image";




const TeamMembers = () => {
    return (
      <div>
      <h2 className="team-members-heading">Team Members</h2>
      <div className="team-members">
        <div className="team-member">
        <Image
          src="/static/images/john-Doe.jpg"
          alt="John Doe"
          width={100}
          height={100}
          layout="fixed"
        />
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Responsible for leading the...</p>
        </div>
        <div className="team-member">
        <Image 
          className="jane-smith"
          src="/static/images/jane-Smith.jpg"
          alt="John Doe"
          width={100}
          height={100}
          layout="fixed"
        />
            <h3>Jane Smith</h3>
            <h4>CTO</h4>
            <p>In charge of technological development...</p>
        </div>
        <div className="team-member">
        <Image
          src="/static/images/alice-Johnson.jpg"
          alt="Alice Johnson"
          width={100}
          height={100}
          layout="fixed"
        />
            <h3>Alice Johnson</h3>
            <h4>CFO</h4>
            <p>Handles finanicial matters...</p>
        </div>
      </div>
    </div>

    );
};


export default TeamMembers;