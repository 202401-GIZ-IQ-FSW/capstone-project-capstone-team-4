import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-row md:flex-col">
        <li className="pt-0 md:pt-2 pr-4">Home</li>
        <li className="pt-0 md:pt-2 pr-4">Tickets</li>
        <li className="pt-0 md:pt-2 pr-4">Profile</li>
        <li className="pt-0 md:pt-2">Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;
