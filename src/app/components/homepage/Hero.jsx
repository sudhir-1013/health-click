"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import heroImage from "./hero-banner-img.jpg";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const words = ["Anytime", "Anywhere", "Anyway", "Anyplace"];

  return (
    <section className="bg-gray-300 bg-opacity-20 mx-5 mt-5 lg:mx-10 text-black sm:px-5 py-10 lg:py-20">
      <div className="flex container mx-auto flex-col lg:flex-row items-center">
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            Book Your Doctor Appointment Online{" "}
            <FlipWords className={"text-primaryTeal"} words={words} />!
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl mb-8">
            HealthClick makes it easy for you to connect with trusted doctors
            and schedule appointments conveniently from home.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              className="px-6 sm:px-10 py-3 bg-primaryTeal text-white rounded-md font-medium hover:opacity-90 transition-all duration-200 ease-in-out"
              aria-label="Get Started with HealthClick"
            >
              Get Started
            </button>
            <button
              className="px-6 sm:px-10 py-3 border border-primaryTeal rounded-md font-medium hover:border-primaryTeal hover:scale-95 transition-all duration-200 ease-in-out"
              aria-label="Learn more about HealthClick"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative hidden sm:flex justify-center items-center mt-10 lg:mt-0">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={100}
            gyroscope={true}
          >
            <Image
              src={"/hero/hero-side-img.png"}
              alt="About us"
              width={1000}
              height={1000}
              className="rounded-lg min-w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
