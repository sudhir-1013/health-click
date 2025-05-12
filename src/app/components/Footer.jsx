"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] px-5 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left items-center">
        {/* Logo & Tagline */}
        <div>
          <Link href="/">
            <Image
              src="/Health-Click-Logo.png"
              alt="HealthClick Logo"
              width={160}
              height={60}
              className="mx-auto lg:mx-0"
              priority
            />
          </Link>
          <p className="text-sm text-gray-600 mt-3">Your trusted health companion.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-md font-semibold text-primaryTeal mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/get-appointment"
              className="text-gray-800 hover:text-secondaryBlue transition-colors"
            >
              Get Appointment
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-secondaryBlue transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-md font-semibold text-primaryTeal mb-4">Follow Us</h4>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 text-gray-800 hover:text-primaryTeal transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 text-gray-800 hover:text-primaryTeal transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 text-gray-800 hover:text-primaryTeal transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} HealthClick. All rights reserved.</p>
      </div>
    </footer>
  );
}
