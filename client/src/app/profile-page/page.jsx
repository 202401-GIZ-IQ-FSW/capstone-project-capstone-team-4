import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import Navbar from "../components/profile/Navbar";

const page = () => {
  return (
    <div className="mx-auto md:w-fit">
    <Navbar/>
    <main className="flex p-8 md:flex-row flex-col">
      {/* left side  */}
      <div className="pe-12">
        <div className="flex">
          <div className="rounded-full border-2 mx-4 hidden md:block ">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h3 className="font-bold text-2xl">Technical Support User</h3>
            <h6 className="px-1 py-2 inline-flex text-nowrap"> <FaMapPin  className="mt-1 me-2" size={15}/> Location: New York</h6>

            <div className="flex border-8 p-6 space-x-8 mt-2">
              <div>
                <h6 className="px-1 text-center text-xl">0</h6>
                <h6 className="px-1 text-center">My Tickets</h6>
              </div>
              <div>
                <h6 className="px-1 text-center text-xl">0</h6>
                <h6 className="px-1 text-center">My Tickets</h6>
              </div>
              <div>
                <h6 className="px-1 text-center text-xl">0</h6>
                <h6 className="px-1 text-center">My Tickets</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-xl pt-12 ">
            Tickets Statistics Overview
          </h3>
          <div className="flex pt-4 w-full justify-between">
            <div className="bg-gray-100 px-4 py-2 w-44 h-40">
              <div className="px-8 py-4 bg-white text-center mb-3">
                <FaCheck size={40} className="mx-auto text-gray-500" />
              </div>
              <h6 className="px-1 text-center font-medium">My Tickets</h6>
              <h6 className="px-1 text-center font-medium text-xl">0</h6>
            </div>
            <div className="bg-gray-100 px-4 py-2 w-44 h-40">
              <div className="px-8 py-4 bg-white text-center mb-3">
                <FaCheck size={40} className="mx-auto text-gray-500" />
              </div>
              <h6 className="px-1 text-center font-medium">My Tickets</h6>
              <h6 className="px-1 text-center font-medium text-xl">0</h6>
            </div>
            <div className="bg-gray-100 px-4 py-2 w-44 h-40">
              <div className="px-8 py-4 bg-white text-center mb-3">
                <FaCheck size={40} className="mx-auto text-gray-500" />
              </div>
              <h6 className="px-1 text-center font-medium">My Tickets</h6>
              <h6 className="px-1 text-center font-medium text-xl">0</h6>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-xl pt-12 ">
            Tickets Statistics Overview
          </h3>
          <div className="pt-4 w-full">
            <div className="flex items-center w-full h-32 bg-gray-100 px-4 py-2">
              <div className="px-8 py-4 bg-white text-center mb-3">
                <FaCheck size={40} className="mx-auto text-gray-500" />
              </div>
              <div className="w-full">
                <h6 className="inline-flex justify-between w-full px-1 font-semibold">
                  Dedicated Supporter <span>1/3</span>
                </h6>
                <h6 className="px-1 font-medium text-xl">progress bar</h6>
                <h6 className="px-1  text-sm">
                  Reach a 3 day streak of resolved tickets
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:ps-12 md:w-1/3 w-fit">
        <h3 className="font-medium text-xl pb-6">
          Tickets Statistics Overview
        </h3>
        <div className="bg-gray-100 p-4">
          <div className="flex items-center border-b-2 p-2">
            <div className="rounded-full border-2 mx-4 hidden md:block ">
              <Image
                src="/profile.png"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
            <h6 className="px-1 text-sm grow">Support Agent: Laura Evans</h6>
            <FaPlus className=" border-2 p-1 mx-4 cursor-pointer"  size={25}/>
            <IoCloseSharp className=" cursor-pointer" size={20}/>
          </div>
          <button className="mt-4 p-2 border-2">All Tickets</button>
        </div>
        <h3 className="font-medium text-xl pb-6 pt-12">
          Support NetWork
        </h3>
        <div className="bg-gray-100 p-4">
          <div className="flex items-center border-b-2 p-2">
            <div className="rounded-full border-2 mx-4 hidden md:block ">
              <Image
                src="/profile.png"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
            <h6 className="px-1 text-sm grow">Support Agent: Laura Evans</h6>
            <button className=" border-2 p-1"  size={25}>View profile</button>
          </div>
          <button className="mt-4 p-2 border-2">All Supporter</button>
        </div>
      </div>
    </main>
    </div>
  );
};

export default page;
