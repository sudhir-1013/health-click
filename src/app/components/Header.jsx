"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { UseGlobalContext } from "../../../helpers/context";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import ProfilePage from "./user/userProfilePopup";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, isAuthenticated } = UseGlobalContext();

  function AnimatedModalDemo() {
    return (
      <div className="flex max-w-full items-center justify-center">
        <Modal>
          <ModalTrigger className="bg-primaryTeal text-white flex justify-center group/modal-btn">
            <span className="text-center transition duration-500">Profile</span>
          </ModalTrigger>
          <ModalBody className={"max-w-full w-full mx-4 rounded-md"}>
            <ModalContent>
              <ProfilePage />
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-[99999999] bg-white py-4 px-5 lg:px-10 shadow-md">
        <div className="flex flex-wrap  container mx-auto justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="w-40 h-auto"
                src={"/Health-Click-Logo.png"}
                width={164}
                height={55}
                alt="logo-HealthClick"
                priority
              />
            </Link>
          </div>

          <button
            className="block md:hidden text-secondaryBlue focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className={` ${isSidebarOpen ? "hidden" : "w-6 h-6"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={`fixed top-0 w-full left-0 h-full bg-white shadow-lg z-40 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="flex justify-between items-center px-5 py-4 shadow-md">
              <Link href="/">
                <Image
                  src={"/Health-Click-Logo.png"}
                  width={164}
                  height={55}
                  alt="logo-HealthClick"
                />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4 px-5 py-6 text-primaryTeal">
              <a
                onClick={() => setIsSidebarOpen(false)}
                href="/get-appointment"
                className="text-primaryTeal hover:text-secondaryBlue"
              >
                Get Appointment
              </a>
              <a
                onClick={() => setIsSidebarOpen(false)}
                href="/about"
                className="text-primaryTeal hover:text-secondaryBlue"
              >
                About Us
              </a>

              {/* Show Profile button if user is logged in, otherwise show Login & Sign Up */}
              {user ? (
                <AnimatedModalDemo />
              ) : (
                <>
                  <Link href="/auth/login">
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="transition-all duration-300 text-sm px-4 py-2 border border-primaryTeal text-primaryTeal rounded-md hover:bg-primaryTeal hover:text-white"
                    >
                      Login
                    </button>
                  </Link>
                  <Link href="/auth/register">
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="transition-all duration-300 text-sm px-4 py-2 bg-primaryTeal text-white rounded-md hover:bg-secondaryBlue"
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:!flex justify-center items-center gap-4 lg:gap-6">
            {user?.role === "admin" && (
              <Link
                href="/admin/dashboard"
                className="text-primaryTeal hover:text-secondaryBlue"
              >
                Admin
              </Link>
            )}
            <Link
              href="/get-appointment"
              className="text-primaryTeal hover:text-secondaryBlue"
            >
              Get Appointment
            </Link>
            <Link
              href="/about"
              className="text-primaryTeal hover:text-secondaryBlue"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-primaryTeal hover:text-secondaryBlue"
            >
              Contact Us
            </Link>

            {/* Show Profile button if user is logged in, otherwise show Login & Sign Up */}
            {isAuthenticated ? (
              <AnimatedModalDemo />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
