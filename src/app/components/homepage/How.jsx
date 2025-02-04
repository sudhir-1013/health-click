"use client"; // Ensure this is a client component

import Tilt from "react-parallax-tilt";

import Image from "next/image";
import { useState } from "react";
import { H2Grediant } from "@/components/eleProvider";

export default function HowItWorks() {
  return (
    <section className="bg-[url('/concentric_background.png')]  bg-cover bg-fixed bg-no-repeat bg-opacity-20 text-[#333] px-5 py-10 lg:py-20 lg:px-20">
      <div className="container relative flex justify-center items-center md:items-start flex-col md:flex-row mx-auto">

        <div className="flex-1 md:sticky top-32 z-10">
        <H2Grediant className="mb-2"> How HealthClick Works </H2Grediant>
        <p className="text-lg text-black">
          Simple Steps to Connect with Your Trusted Doctors From finding the
          right doctor to booking your appointment, HealthClick ensures a
          smooth, reliable, and hassle-free experience for patients.
        </p>
        <Image src={'/how-icons/How.png'} width={600} height={600} alt="How HealthClick Works"/>
        </div>
        <div className="flex-1 flex flex-col justify-end items-end space-y-10">
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    transitionSpeed={100}
    gyroscope={true}
    className="cursor-pointer max-w-lg mx-auto"
  >
    <div className="flex justify-center items-start flex-col p-8 rounded-lg min-h-80 shadow-xl transition-all duration-300 ease-in-out relative transform backdrop-blur-md group bg-white">
      <h3 className="font-semibold mb-4 text-2xl text-primaryTeal">
        <span className="font-bold text-secondaryBlue">1.</span> Go to HealthClick
      </h3>
      <Image
        width={200}
        src={"/how-icons/Search.png"}
        height={200}
        alt="how-go-to-healthclick-icon"
        className="my-6"
      />
      <p className="text-lg text-black">
        Visit our platform to get started with your journey towards better health.
      </p>
    </div>
  </Tilt>

  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    transitionSpeed={100}
    gyroscope={true}
    className="cursor-pointer max-w-lg mx-auto"
  >
    <div className="flex justify-center items-start flex-col p-8 rounded-lg min-h-80 shadow-xl transition-all duration-300 ease-in-out relative transform backdrop-blur-md group bg-white">
      <h3 className="font-semibold mb-4 text-2xl text-primaryTeal">
        <span className="font-bold text-secondaryBlue">2.</span> Select Your Doctor
      </h3>
      <Image
        width={200}
        src={"/how-icons/select-doctor.png"}
        height={200}
        alt="how-select-your-doctor-icon"
        className="my-6"
      />
      <p className="text-lg text-black">
        Browse through a wide range of specialists and choose the one that fits your needs.
      </p>
    </div>
  </Tilt>

  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    transitionSpeed={100}
    gyroscope={true}
    className="cursor-pointer max-w-lg mx-auto"
  >
    <div className="flex justify-center items-start flex-col p-8 rounded-lg min-h-80 shadow-xl transition-all duration-300 ease-in-out relative transform backdrop-blur-md group bg-white">
      <h3 className="font-semibold mb-4 text-2xl text-primaryTeal">
        <span className="font-bold text-secondaryBlue">3.</span> Book Your Appointment
      </h3>
      <Image
        width={200}
        src={"/how-icons/book-your-appointment.png"}
        height={200}
        alt="how-book-your-appointment-icon"
        className="my-6"
      />
      <p className="text-lg text-black">
        Choose a convenient time, and book your appointment within minutes.
      </p>
    </div>
  </Tilt>

  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    transitionSpeed={100}
    gyroscope={true}
    className="cursor-pointer max-w-lg mx-auto"
  >
    <div className="flex justify-center items-start flex-col p-8 rounded-lg min-h-80 shadow-xl transition-all duration-300 ease-in-out relative transform backdrop-blur-md group bg-white">
      <h3 className="font-semibold mb-4 text-2xl text-primaryTeal">
        <span className="font-bold text-secondaryBlue">4.</span> Consult the Doctor
      </h3>
      <Image
        width={200}
        src={"/how-icons/consult-the-doctor.png"}
        height={200}
        alt="how-consult-the-doctor-icon"
        className="my-6"
      />
      <p className="text-lg text-black">
        Have your consultation via audio/video and receive expert advice from the comfort of your home.
      </p>
    </div>
  </Tilt>
</div>

      </div>
    </section>
  );
}
