import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-row md:flex-col">
        <Link href="/" className="pt-0 md:pt-2 pr-4">
          Home
        </Link>
        <Link href="/" className="pt-0 md:pt-2 pr-4">
          Tickets
        </Link>
        <Link href="/" className="pt-0 md:pt-2 pr-4">
          Profile
        </Link>
        <Link href="/" className="pt-0 md:pt-2">
          Setting
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
