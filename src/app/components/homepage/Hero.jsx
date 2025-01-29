"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import heroImage from "./hero-banner-img.jpg";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const words = ["Anytime", "Anywhere", "Anyway", "Anyplace"];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2; // Normalize -1 to 1
    const y = (clientY / window.innerHeight - 0.5) * 2; // Normalize -1 to 1
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyle = (offsetX, offsetY) => ({
    transform: `translate(${mousePosition.x * offsetX}px, ${
      mousePosition.y * offsetY
    }px)`,
  });

  return (
    <section className="bg-gray-300 bg-opacity-20 mx-5 mt-5 lg:mx-10 text-black sm:px-5 py-10 lg:py-20">
      <div className="flex container mx-auto flex-col lg:flex-row items-center">
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            Book Your Doctor Appointment Online <FlipWords className={'text-primaryTeal'} words={words} />!
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
        <div className="flex-1 relative hidden sm:flex justify-end mt-10 lg:mt-0">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={100}
            gyroscope={true}
            reset={false}
          >
            <Image
              src={"/hero/hero-side-img.png"}
              alt="About us"
              width={500}
              height={300}
              style={parallaxStyle(10, -10)}
              className="rounded-lg w-auto h-full object-cover"
            />
          </Tilt>
          <Image
            src={"/hero/welcome.png"}
            alt="welcome"
            width={100}
            height={100}
            style={parallaxStyle(30, 30)}
            className="hidden lg:block absolute top-0 left-[15%]"
          />
          <Image
            src={"/hero/counsult.png"}
            alt="counsult"
            width={100}
            height={100}
            style={parallaxStyle(20, -20)}
            className="hidden lg:block absolute top-1/3 left-10"
          />
          <Image
            src={"/hero/feedback.png"}
            alt="feedback"
            width={100}
            height={100}
            style={parallaxStyle(-30, 30)}
            className="hidden lg:block absolute top-1 right-10"
          />
          <Image
            src={"/hero/proud.png"}
            alt="proud"
            width={100}
            height={100}
            style={parallaxStyle(-25, -20)}
            className="hidden lg:block absolute -bottom-3 left-20"
          />
          <Image
            src={"/hero/time.png"}
            alt="time"
            width={100}
            height={100}
            style={parallaxStyle(30, -25)}
            className="hidden lg:block absolute -bottom-[20%] right-10"
          />
        </div>
      </div>
    </section>
  );
}
