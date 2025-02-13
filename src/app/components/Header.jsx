'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex flex-wrap sticky top-0 z-[99999999] justify-between bg-white items-center py-4 px-5 lg:px-10 shadow-md">
      <div>
        <Link href="/">
          <Image className="w-40 h-auto" src={'/Health-Click-Logo.png'} width={164} height={55} alt="logo-HealthClick" />
        </Link>
      </div>

      <button
        className="block md:hidden text-secondaryBlue focus:outline-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        className={`fixed top-0 w-full left-0 h-full bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-5 py-4 shadow-md">
        <Link href="/">
          <Image src={'/Health-Click-Logo.png'} width={164} height={55} alt="logo-HealthClick" />
        </Link>
          <button
            className="text-secondaryBlue focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-5 py-6 text-primaryTeal">
          <a onClick={()=>{setIsSidebarOpen(false)}} href="#" className="text-primaryTeal hover:text-secondaryBlue">
            Get Appointment
          </a>
          <a onClick={()=>{setIsSidebarOpen(false)}} href="#" className="text-primaryTeal hover:text-secondaryBlue">
            Get Appointment
          </a>
          <a onClick={()=>{setIsSidebarOpen(false)}} href="#" className="text-primaryTeal hover:text-secondaryBlue">
            Get Appointment
          </a>
          <a onClick={()=>{setIsSidebarOpen(false)}} href="#" className="text-primaryTeal hover:text-secondaryBlue">
            Our Doctors
          </a>
          <Link href={"/auth/login"}>
            <button onClick={()=>{setIsSidebarOpen(false)}} className="transition-all duration-300 text-sm px-4 py-2 border border-primaryTeal text-primaryTeal rounded-md hover:bg-primaryTeal hover:text-white">
              Login
            </button>
          </Link>
          <Link href={"/auth/register"}>
            <button onClick={()=>{setIsSidebarOpen(false)}} className="transition-all duration-300 text-sm px-4 py-2 bg-primaryTeal text-white rounded-md hover:bg-secondaryBlue">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>

      <div className="hidden md:!flex justify-center items-center gap-4 lg:gap-6">
        <Link href="/get-appointment" className="text-primaryTeal hover:text-secondaryBlue">
          About Us
        </Link>
        <Link href="/get-appointment" className="text-primaryTeal hover:text-secondaryBlue">
          Services
        </Link>
        <Link href="#" className="text-primaryTeal hover:text-secondaryBlue">
          Our Doctors
        </Link>
        <Link href="/get-appointment" className="text-primaryTeal hover:text-secondaryBlue">
          Get Appointment
        </Link>
        <Link href="/auth/login">
          <button className="transition-all duration-300 text-sm px-4 py-2 border border-primaryTeal text-primaryTeal rounded-md hover:bg-primaryTeal hover:text-white">
            Login
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="transition-all duration-300 text-sm px-4 py-2 bg-primaryTeal text-white rounded-md hover:bg-secondaryBlue">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
