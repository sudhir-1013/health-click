"use client"; // Ensure this is a client component
import { useState } from "react";

export default function HowItWorks() {
  return (
    <section className="bg-gray-300 bg-opacity-20 text-[#333] px-5 py-10 lg:py-20 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
          <span className="border-b-2 border-[#8BC34A]">
            How It Works
            </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
          className="p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform backdrop-blur-md bg-white/30 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Select Your Doctor</h3>
            <p className="text-lg">
              Browse through a wide range of specialists and choose the one that fits your needs.
            </p>
          </div>

          <div
            className="p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform backdrop-blur-md bg-white/30 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Book Your Appointment</h3>
            <p className="text-lg">
              Choose a convenient time, and book your appointment within minutes.
            </p>
          </div>

          <div
            className="p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform backdrop-blur-md bg-white/30 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Consult the Doctor</h3>
            <p className="text-lg">
              Have your consultation via audio/video and receive expert advice from the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
