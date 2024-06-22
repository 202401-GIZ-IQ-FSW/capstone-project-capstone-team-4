"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex justify-center">
      <div className="w-2/3 py-6 px-10">
        <h1 className="text-xl font-extrabold">Technical Support</h1>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 max-w-md w-full">
            <h2 className="text-4xl font-extrabold mb-2 text-center">
              Join our platform
            </h2>
            <p className="text-gray-500 mb-6 text-center text-sm">
              Provide your details to get started with support
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 text-sm"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="block w-full mt-2 pr-10 py-2 pl-2 border border-gray-400 focus:outline-black focus:ring-black focus:border-black sm:text-sm"
                  placeholder="First Last"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm"
                >
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  className="block w-full mt-2 pr-10 py-2 pl-2 border border-gray-400 focus:outline-black focus:ring-black focus:border-black sm:text-sm"
                  placeholder="tech_pro123"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="ema il" className="block text-gray-700 text-sm">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full mt-2 pr-10 py-2 pl-2 border border-gray-400 focus:outline-black focus:ring-black focus:border-black sm:text-sm"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm"
                >
                  Password *
                </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      className="size-4 text-gray-500"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-10 py-2 border border-gray-400 focus:outline-black focus:ring-black focus:border-black sm:text-sm"
                    placeholder="************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-gray-500"
                    >
                      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm"
                >
                  Confirm password *
                </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      className="size-4 text-gray-500"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="confirm-password"
                    className="block w-full px-10 py-2 border border-gray-400 focus:outline-black focus:ring-black focus:border-black sm:text-sm"
                    placeholder="************"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-gray-500"
                    >
                      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="my-4 text-xs text-gray-500">
                By tapping Submit, you agree to our Terms & Conditions and
                Privacy Policynow
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-black text-sm font-medium"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/3 min-h-screen flex-shrink-0 relative">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/static/images/laptop-2.jpg"
          alt="Laptop"
        />
      </div>
    </div>
  );
}
