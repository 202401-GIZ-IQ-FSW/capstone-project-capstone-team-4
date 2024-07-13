import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div>
      <Navbar></Navbar>
      {/* *************************** */}
      <div className="py-2 pb-8 md:pb-24 bg-gray-100 mx-8  md:mx-16 rounded-[4rem]">
        <div className="flex md:flex-row flex-col items-start justify-between max-w-full flex-1 px-10 md:px-24 md:mt-40 mt-10 text-center">
          <div className="md:w-1/2 text-left">
            <h1 className="md:text-6xl text-2xl font-bold mb-10 leading-tight">
              Submit your technical issues and queries easily!
            </h1>
            <p className="mt-3 md:text-xl text-sm w-10/12 md:w-full">
              Securely submit and manage support tickets for technical issues.
            </p>

            <div className="flex  md:mt-14 mt-4 gap-4">
              <div className="border-[1px] border-black rounded px-8 py-2 text-center cursor-pointer hover:bg-gray-100">
                <p className="text-nowrap"><Link href={'auth/sign-up'}>Sign Up</Link></p>
              </div>
              <div className="border-[1px] border-black rounded px-8 py-2 text-center cursor-pointer hover:bg-gray-100">
                <p className="text-nowrap"><Link href='tickets/creates'>New ticket</Link></p>
              </div>
            </div>
          </div>

          <div className="hidden md:block mr-28">
            <img src="/tickets.svg" width="250px" height="100px"></img>
          </div>
          <div className="block md:hidden mr-28 mt-4">
            <img src="/tickets.svg" width="100px" height="100px"></img>
          </div>
        </div>
      </div>
      {/* *************************** */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:px-16 px-8 py-10 w-fit">
        <div className="flex flex-col md:flex-row  md:items-center items-start md:gap-8 gap-4 pt-8 md:pt-28 pb-8 bg-gray-100 px-8 rounded-md">
          <div className="block md:hidden">
            <img src="/tickets-2.svg" width="65px" height="65px"></img>
          </div>
          <div>
            <p className="md:text-2xl text-base text-gray-800 mb-3 text-nowrap">
              Tickets activity
            </p>
            <p className="text-3xl md:text-6xl font-semibold text-gray-800">
              10K+
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/tickets-2.svg" width="100px" height="100px"></img>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:items-center items-start md:gap-8 gap-4 pt-8 md:pt-28 pb-8 bg-gray-100 px-8 rounded-md">
          <div className="block md:hidden">
            <img src="/tickets.svg" width="65px" height="65px"></img>
          </div>
          <div>
            <p className="md:text-2xl text-base text-gray-800 mb-3 text-nowrap">
              Tickets submitted
            </p>
            <p className="text-3xl md:text-6xl font-semibold text-gray-800">
              100K+
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/tickets.svg" width="100px" height="100px"></img>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:items-center items-start md:gap-8 gap-4 pt-8 md:pt-28 pb-8 bg-gray-100 px-8 rounded-md">
          <div>
            <div className="block md:hidden">
              <img src="/arrow-up.svg" width="65px" height="65px"></img>
            </div>
            <p className="md:text-2xl text-base text-gray-800 mb-3 text-nowrap mt-4">
              Tickets resolved
            </p>
            <p className="text-3xl md:text-6xl font-semibold text-gray-800">
              500K+
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/arrow-up.svg" width="100px" height="100px"></img>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:items-center items-start md:gap-8 gap-4 pt-8 md:pt-28 pb-8 bg-gray-100 px-8 rounded-md">
          <div>
            <div className="block md:hidden">
              <img src="/support.svg" width="65px" height="65px"></img>
            </div>
            <p className="md:text-2xl text-base text-gray-800 mb-3 text-nowrap mt-4">
              Get help now
            </p>
            <p className="text-3xl md:text-6xl font-semibold text-gray-800">
              Support
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/support.svg" width="100px" height="100px"></img>
          </div>
        </div>
      </div>
      {/* *************************** */}
      <Footer />
    </div>
  );
}
