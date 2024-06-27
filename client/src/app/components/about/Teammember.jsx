import React from "react";

const TeamMembers = () => {
    return (
        <section>
            <h2>Team Members</h2>
            <div>
                <div>
                    <img src="path/to/johndoe.jpg" alt="John Doe" />
                    <h3>John Doe</h3>
                    <p>CEO<br/>Responsible for leading the...</p>
                </div>
                <div>
                    <img src="path/to/janesmith.jpg" alt="Jane Smith" />
                    <h3>Jane Smith</h3>
                    <p>CTO<br/>In charge of technological development</p>
                </div>
                <div>
                    <img src="path/to/alicejohnson.jpg" alt="Alice Johnson" />
                    <h3>Alice Johnson</h3>
                    <p>CFO<br/>Handles financial matters...</p>
                </div>
            </div>
        </section>
    );
};


export default TeamMembers;