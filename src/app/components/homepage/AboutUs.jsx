"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { H2, H2Grediant } from "@/components/eleProvider";
import Link from "next/link";

export default function AboutUs() {
  const accordionItems = [
    {
      title: "What services does HealthClick offer?",
      content:
        "HealthClick allows patients to book appointments with qualified doctors online. We provide access to general physicians, specialists, diagnostic services, and health consultations—all from the comfort of your home.",
    },
    {
      title: "How does the appointment booking process work?",
      content:
        "Patients can browse available doctors by specialty, location, or availability. Once a preferred doctor is selected, users can choose a time slot and confirm the appointment online. You'll receive instant confirmation and reminders.",
    },
    {
      title: "Is there any support after booking an appointment?",
      content:
        "Yes, HealthClick offers ongoing support for appointment-related queries, cancellations, and rescheduling. Our team is available to help ensure you have a smooth and stress-free healthcare experience.",
    },
    {
      title: "Are the doctors on HealthClick verified?",
      content:
        "Absolutely. All doctors listed on HealthClick go through a strict verification process, including credential checks and medical registration validation. Your health and safety are our top priorities.",
    },
  ];

  function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
      <div className="w-full mx-auto px-4">
        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="border border-primaryTeal rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primaryTeal" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-4 bg-gray-50 text-gray-600">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container flex flex-col md:flex-row justify-center items-start gap-10 mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <H2Grediant className="mb-4">WHO WE ARE</H2Grediant>
          <p className="text-lg sm:text-xl mb-5 text-center md:text-left max-w-7xl">
            At HealthClick, we aim to redefine your healthcare experience by
            providing an intuitive platform that connects you with trusted
            doctors, streamlines appointment scheduling, and offers seamless
            access to quality care. We believe that your health journey should
            be simple, accessible, and stress-free.
          </p>
          <Link href="/about">
            <button className="bg-primaryTeal mb-5 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-secondaryBlue transition">
              <span>Know More About</span>
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <Accordion />
        </div>
      </div>
    </section>
  );
}
