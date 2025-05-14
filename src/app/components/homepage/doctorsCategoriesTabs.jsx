"use client";

import { FiExternalLink } from "react-icons/fi";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DoctorCategoriesTabs() {
  function DoctorTabContent({ description, alt, image }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col lg:flex-row justify-between py-8 items-center relative h-full rounded-3xl p-6 md:p-10 text-white backdrop-blur-md bg-gradient-to-br from-[#0056D6] via-[#008080] to-[#00c9a7] shadow-xl overflow-hidden"
      >
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          <div className="flex justify-start items-start -space-x-2">
            <div className="size-6 rounded-full bg-secondaryBlue animate-pulse"></div>
            <div className="size-6 rounded-full bg-primaryTeal animate-ping"></div>
            <div className="size-6 rounded-full bg-secondaryPeach animate-bounce"></div>
          </div>
          <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
            {description}
          </p>

          <Link href="/get-appointment">
            <button className="group flex items-center gap-2 bg-white text-secondaryBlue font-semibold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Now{" "}
              <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 mt-10 lg:mt-0 relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Decorative Glow Background Element */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl z-0"></div>
      </motion.div>
    );
  }

  const doctorTabs = [
    {
      title: "General Physician",
      value: "general",
      description:
        "General Physicians provide primary healthcare services, diagnosing and treating a wide range of common illnesses and health conditions. They offer preventive care, health education, and management of chronic diseases.",
      alt: "General Physician",
    },
    {
      title: "Cardiologist",
      value: "cardiologist",
      description:
        "Cardiologists specialize in diagnosing and treating heart-related conditions, such as hypertension, heart disease, and arrhythmias. They also provide guidance on maintaining heart health and preventing cardiovascular diseases.",
      alt: "Cardiologist",
    },
    {
      title: "Dermatologist",
      value: "dermatologist",
      description:
        "Dermatologists are experts in treating skin, hair, and nail disorders. They address conditions such as acne, eczema, psoriasis, and skin cancer, and provide cosmetic treatments like laser therapy and anti-aging procedures.",
      alt: "Dermatologist",
    },
    {
      title: "Pediatrician",
      value: "pediatrician",
      description:
        "Pediatricians specialize in medical care for infants, children, and adolescents. They provide vaccinations, monitor growth and development, and treat childhood illnesses to ensure the well-being of young patients.",
      alt: "Pediatrician",
    },
    {
      title: "Orthopedic",
      value: "orthopedic",
      description:
        "Orthopedic doctors focus on the diagnosis and treatment of musculoskeletal disorders, including bone fractures, joint pain, arthritis, and sports injuries. They may perform surgeries or recommend physical therapy for recovery.",
      alt: "Orthopedic",
    },
  ];

  const tabs = doctorTabs.map((doc) => ({
    title: doc.title,
    value: doc.value,
    content: (
      <DoctorTabContent
        description={doc.description}
        alt={doc.alt}
        image="/hero/hero-side-img.png"
      />
    ),
  }));

  return (
    <section className="bg-gray-100">
      <div className="container py-10 px-4 h-[50rem] lg:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs
          activeTabClassName={"bg-primaryTeal"}
          tabClassName="whitespace-nowrap my-1 bg-gray-200 mx-1"
          tabs={tabs}
        />
      </div>
    </section>
  );
}
