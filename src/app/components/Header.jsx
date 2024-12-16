'use client';

import { useState } from "react";
import Image from "next/image";
import logoImage from "./HealthClick-logo.png";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex flex-wrap sticky top-0 z-50 justify-between items-center py-4 px-5 lg:px-10 shadow-md">
      <div>
        <Link href="/">
          <Image src={'/Health-Click-Logo.png'} width={164} height={55} alt="logo-HealthClick" />
        </Link>
      </div>

      <button
        className="block sm:hidden text-[#0056D6] focus:outline-none"
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
        className={`fixed top-0 w-full left-0 h-full bg-[#FFDAB9] shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between items-center px-5 py-4 shadow-md">
          <Link href="/">
            <Image src={logoImage} width={150} height={50} alt="logo-HealthClick" />
          </Link>
          <button
            className="text-[#0056D6] focus:outline-none"
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
        <nav className="flex flex-col gap-4 px-5 py-6 text-[#0056D6]">
          <a href="#" className="hover:text-[#008080]">
            Get Appointment
          </a>
          <a href="#" className="hover:text-[#008080]">
            Our Doctors
          </a>
          <Link href={"/auth/login"}>
            <button className="text-sm px-4 py-2 border border-[#008080] text-[#008080] rounded-md hover:bg-[#008080] hover:text-white">
              Login
            </button>
          </Link>
          <Link href={"/auth/register"}>
            <button className="text-sm px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#0056D6]">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>

      <div className="hidden sm:!flex justify-center items-center gap-4 lg:gap-6">
        <Link href="/get-appointment" className="text-[#0056D6] hover:text-[#008080]">
          Get Appointment
        </Link>
        <Link href="#" className="text-[#0056D6] hover:text-[#008080]">
          Our Doctors
        </Link>
        <Link href="/auth/login">
          <button className="text-sm px-4 py-2 border border-[#008080] text-[#008080] rounded-md hover:bg-[#008080] hover:text-white">
            Login
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="text-sm px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#0056D6]">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
