"use client";
import Link from "next/link";
import { H2Green, H3 } from "../eleProvider";

// Ensure this is a client component

export default function AboutUs() {
  return (
    <section className=" text-gray-900 px-8 py-16 lg:px-32 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-lg bg-white shadow-lg p-8 border-t-4 border-[#8BC34A]">
            <H3>Why Choose Us?</H3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-3 text-[#8BC34A]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                Easy and fast appointment bookings
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-[#8BC34A]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                Access to a wide network of trusted doctors
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-[#8BC34A]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                User-friendly platform for all ages
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-[#8BC34A]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                Secure and private data handling
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <H2Green spanText={"HealthClick"}>Welcome to</H2Green>
          <p className="text-lg leading-relaxed mb-4">
            At HealthClick, we believe in making healthcare accessible,
            reliable, and user-friendly for everyone. We bridge the gap between
            patients and healthcare providers by offering a seamless experience.
          </p>
          <p className="text-lg leading-relaxed">
            Join us in revolutionizing healthcare and enjoy an effortless,
            secure platform tailored to meet your needs.
          </p>
          <Link href={"#"}>
            <button className="mt-6 px-8 py-3 bg-[#8BC34A] text-white text-lg font-medium rounded-full shadow hover:opacity-90 transition-opacity">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
