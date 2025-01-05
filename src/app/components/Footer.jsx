'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] py-8 px-5 lg:px-10">
      <div className="container mx-auto text-center flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 lg:mb-0">
          <Link href="/">
            <Image src={'/Health-Click-Logo.png'} width={150} height={50} alt="logo-HealthClick" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 lg:mb-0 text-gray-800">
          <Link href="#" className="hover:text-primaryTeal">
            About Us
          </Link>
          <Link href="#" className="hover:text-primaryTeal">
            Contact
          </Link>
          <Link href="#" className="hover:text-primaryTeal">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primaryTeal">
            Terms of Service
          </Link>
        </div>

        {/* Social Media Icons (Optional) */}
        <div className="flex gap-4">
          <Link href="#">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-primaryTeal"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l13-2v12l-13-2v-4l-6 2v4z" />
            </svg>
          </Link>
          <Link href="#">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-primaryTeal"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
            </svg>
          </Link>
          <Link href="#">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-primaryTeal"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5l-6 6 6 6M6 5l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} HealthClick. All rights reserved.</p>
      </div>
    </footer>
  );
}
