"use client";

import Link from "next/link";
import SearchModal from "./SearchModal";
import React, { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("running...");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-8 md:px-44 w-full pt-12 pb-8">
      <div className="flex items-center gap-2">
        <div>
          <img src="/ticket-logo.svg" width="40px" height="40px"></img>
        </div>
        <p className="text-2xl font-semibold">Tickets</p>
      </div>
      <div className="hidden md:flex justify-center gap-10 items-center">
        <Link href="/">
          <p>Home</p>
        </Link>
        <button onClick={openModal}>Search tickets</button>{" "}
        <SearchModal isOpen={isModalOpen} closeModal={closeModal} />
        <Link href="/createticket">
          <p>Create</p>
        </Link>
        <Link href="/">
          <p>Notification</p>
        </Link>
      </div>
      <div>
        <div className="border-[1px] border-black rounded px-8 py-2 text-center cursor-pointer hover:bg-gray-100">
          <p>Sign in</p>
        </div>
      </div>
    </nav>
  );
}
