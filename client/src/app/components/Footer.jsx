import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 p-8 md:px-24 flex justify-between items-center">
      <div className="flex flex-col justify-between py-8 gap-12">
        <div>
          <p className="text-xl md:text-2xl font-semibold mb-1">
            Ticket Master
          </p>
          <p className="md:text-base text-sm w-[80%] md:w-full">
            Your ultimate ticket support solution!
          </p>
        </div>
        <p className="text-sm text-gray-500">TicketMaster © 2024</p>
      </div>
      <div className="flex flex-col text-end gap-1 text-sm md:text-md">
        <Link className="font-semibold" href="/">
          Submit a ticket
        </Link>
        <Link className=" text-gray-500" href="/">
          Track ticket
        </Link>
        <Link className=" text-gray-500" href="/">
          Receive
        </Link>
        <Link className=" text-gray-500" href="/">
          Troubleshooting
        </Link>
        <Link className=" text-gray-500" href="/">
          Contact support
        </Link>
      </div>
    </footer>
  );
}
