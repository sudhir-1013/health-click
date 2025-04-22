"use client";
import Link from "next/link";
import { H2Grediant, H3Grediant } from "../../../components/eleProvider";
import { FaCheck } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

// Ensure this is a client component

export default function WhyChoose() {
  return (
    <section className="pt-40 text-gray-900 bg-gray-100 px-5 lg:px-10 py-10 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 gap-10">
        {/* Introduction Section */}
        <div className="text-center">
          <H2Grediant>
            Why Choose <span className="text-primaryTeal">HealthClick</span>?
          </H2Grediant>
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            HealthClick simplifies healthcare by connecting you with trusted
            doctors online. Access consultations from the comfort of your home
            and manage your health efficiently with just a few clicks.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12">
          <div className="bg-[url('/left.png')] overflow-hidden bg-no-repeat bg-cover bg-right rounded-lg shadow-lg">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={100}
              gyroscope={true}
              className="size-full"
              reset={false}
            >
              <div className="bg-[#EEEBE2] bg-opacity-85 sm:bg-opacity-70 size-full p-6 sm:p-8">
                <H3Grediant>Benefits of Choosing Us</H3Grediant>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="text-black flex items-center justify-start gap-2">
                    <FaCheck className="text-primaryTeal" />
                    24/7 access to doctors via audio/video calls
                  </li>
                  <li className="text-black flex items-center justify-start gap-2">
                    <FaCheck className="text-primaryTeal" />
                    Affordable consultations starting at ₹199
                  </li>
                  <li className="text-black flex items-center justify-start gap-2">
                    <FaCheck className="text-primaryTeal" />
                    Access to over 90,000+ specialist doctors
                  </li>
                  <li className="text-black flex items-center justify-start gap-2">
                    <FaCheck className="text-primaryTeal" />
                    Secure and private data handling
                  </li>
                </ul>
              </div>
            </Tilt>
          </div>

          <div className="bg-[url('/right.png')] overflow-hidden bg-no-repeat bg-cover bg-right rounded-lg shadow-lg">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={100}
              gyroscope={true}
              className="size-full"
              reset={false}
            >
              <div className="bg-[#EEEBE2] bg-opacity-85 sm:bg-opacity-70 size-full p-6 sm:p-8">
                <H3Grediant>Popular Specialties</H3Grediant>
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
            </Tilt>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-4">
          <Link href="/get-appointment">
            <button className="px-8 py-3 bg-primaryTeal text-white text-lg font-medium rounded-full shadow-lg hover:opacity-90 transition-opacity">
              Book Your Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
