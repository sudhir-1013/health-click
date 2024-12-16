"use client";
import Link from "next/link";
import { H3Green } from "../eleProvider";

// Ensure this is a client component

export default function WhyChoose() {
  return (
    <section className="text-gray-900 px-8 py-16 lg:px-32 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16">
        {/* Introduction Section */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#689F38] mb-6">
            Why Choose <span className="text-[#8BC34A]">HealthClick</span>?
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
            HealthClick simplifies healthcare by connecting you with trusted doctors online. Access consultations from the comfort of your home and manage your health efficiently with just a few clicks.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <H3Green>
              Benefits of Choosing Us
            </H3Green>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#8BC34A] mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                24/7 access to doctors via audio/video calls
              </li>
              <li className="flex items-start">
                <span className="text-[#8BC34A] mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Affordable consultations starting at ₹199
              </li>
              <li className="flex items-start">
                <span className="text-[#8BC34A] mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Access to over 90,000+ specialist doctors
              </li>
              <li className="flex items-start">
                <span className="text-[#8BC34A] mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Secure and private data handling
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <H3Green>
              Popular Specialties
            </H3Green>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>
                <strong>Dermatology:</strong> Skin, hair, and nail care
              </li>
              <li>
                <strong>Gynecology:</strong> Comprehensive women’s health
              </li>
              <li>
                <strong>ENT:</strong> Ear, nose, and throat care
              </li>
              <li>
                <strong>Neurology:</strong> Nervous system treatments
              </li>
              <li>
                <strong>General Medicine:</strong> Overall internal health
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <Link href="#">
            <button className="px-8 py-3 bg-[#8BC34A] text-white text-lg font-medium rounded-full shadow-lg hover:opacity-90 transition-opacity">
              Book Your Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
