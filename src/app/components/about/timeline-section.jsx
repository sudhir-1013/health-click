"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState(2023);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineEvents = [
    {
      year: 2015,
      title: "The Beginning",
      description:
        "Health Click was founded with a vision to bridge the gap between patients and healthcare providers through technology.",
      icon: "🚀",
      color: "bg-blue-500",
    },
    {
      year: 2017,
      title: "First Mobile App",
      description:
        "Launched our first mobile application, allowing patients to book appointments and consult with doctors remotely.",
      icon: "📱",
      color: "bg-green-500",
    },
    {
      year: 2019,
      title: "Expansion Phase",
      description:
        "Expanded our services to 5 major cities and partnered with over 50 healthcare institutions.",
      icon: "🌐",
      color: "bg-purple-500",
    },
    {
      year: 2021,
      title: "AI Integration",
      description:
        "Integrated AI-powered health assessment tools to provide preliminary diagnoses and personalized health recommendations.",
      icon: "🤖",
      color: "bg-amber-500",
    },
    {
      year: 2023,
      title: "Health Click 2.0",
      description:
        "Completely redesigned our platform with enhanced features, improved user experience, and expanded network of specialists.",
      icon: "✨",
      color: "bg-red-500",
    },
  ];

  const handlePrevious = () => {
    const currentIndex = timelineEvents.findIndex(
      (event) => event.year === activeYear
    );
    if (currentIndex > 0) {
      setActiveYear(timelineEvents[currentIndex - 1].year);
    }
  };

  const handleNext = () => {
    const currentIndex = timelineEvents.findIndex(
      (event) => event.year === activeYear
    );
    if (currentIndex < timelineEvents.length - 1) {
      setActiveYear(timelineEvents[currentIndex + 1].year);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="timeline" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryTeal/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondaryBlue/20 to-transparent"></div>
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-primaryTeal opacity-5"></div>
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-secondaryBlue opacity-5"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading healthcare platform, explore the
              key milestones that have shaped Health Click&apos;s evolution.
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primaryTeal to-secondaryBlue rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${
                    (timelineEvents.findIndex((e) => e.year === activeYear) +
                      1) *
                    (100 / timelineEvents.length)
                  }%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Timeline Points */}
            <div className="relative flex justify-between mb-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <button
                    onClick={() => setActiveYear(event.year)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold relative z-10 transition-transform duration-300 ${
                      activeYear === event.year
                        ? "ring-4 ring-offset-4 ring-primaryTeal/30 scale-110"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    style={{
                      background:
                        activeYear === event.year
                          ? "linear-gradient(135deg, #00A8A8, #0077B6)"
                          : "#CBD5E1",
                    }}
                    aria-label={`View milestone from ${event.year}`}
                  >
                    {event.year}
                  </button>
                  <div
                    className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-sm font-medium ${
                      activeYear === event.year
                        ? "text-primaryTeal"
                        : "text-gray-500"
                    }`}
                  >
                    {event.year}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Event Details */}
            <div className="relative">
              {timelineEvents.map((event) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeYear === event.year ? 1 : 0,
                    y: activeYear === event.year ? 0 : 20,
                    display: activeYear === event.year ? "block" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center text-white text-2xl flex-shrink-0`}
                    >
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={activeYear === timelineEvents[0].year}
                variant="outline"
                className="flex items-center gap-2 ro4uunded-full px-6"
              >
                <ChevronLeft size={18} />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  activeYear === timelineEvents[timelineEvents.length - 1].year
                }
                variant="outline"
                className="flex items-center gap-2 rounded-full px-6"
              >
                Next
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
