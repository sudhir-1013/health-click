"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Users,
  Shield,
  Lightbulb,
  Globe,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      id: 1,
      icon: <Heart className="w-6 h-6" />,
      title: "Patient-Centered Care",
      description:
        "We put patients at the center of everything we do, designing our services around their needs and preferences.",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Privacy",
      description:
        "We maintain the highest standards of data security and privacy, ensuring that patient information is always protected.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description:
        "We continuously innovate to improve healthcare delivery, embracing new technologies and approaches.",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      icon: <Users className="w-6 h-6" />,
      title: "Inclusivity",
      description:
        "We strive to make healthcare accessible to everyone, regardless of location, background, or circumstances.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description:
        "We aim to transform healthcare delivery globally, addressing healthcare disparities and improving outcomes.",
      color: "from-purple-500 to-violet-600",
    },
    {
      id: 6,
      icon: <Zap className="w-6 h-6" />,
      title: "Excellence",
      description:
        "We are committed to excellence in everything we do, from technical performance to customer service.",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00A8A8"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-primaryTeal opacity-5"></div>
        <div className="absolute -right-20 bottom-1/3 w-60 h-60 rounded-full bg-secondaryBlue opacity-5"></div>
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
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by a clear mission and strong values, we&apos;re committed
              to transforming healthcare through technology and compassion.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primaryTeal to-secondaryBlue rounded-2xl p-8 md:p-12 text-white mb-16 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -mb-20 -ml-20"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl relative z-10">
              To make quality healthcare accessible to everyone through
              innovative technology, connecting patients with the right care at
              the right time, and empowering them to take control of their
              health journey.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveValue(value.id)}
                onMouseLeave={() => setActiveValue(null)}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="mb-4 relative">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${value.color} text-white`}
                  >
                    {value.icon}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeValue === value.id ? [0, 0.5, 0] : 0,
                    }}
                    transition={{ duration: 1, times: [0, 0.5, 1] }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primaryTeal transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>

                <motion.div
                  className="absolute bottom-4 right-4 text-primaryTeal opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: activeValue === value.id ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat:
                      activeValue === value.id ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "loop",
                  }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
