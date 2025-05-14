"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 50000, label: "Patients Served", icon: "👨‍⚕️" },
    { value: 200, label: "Medical Experts", icon: "🏥" },
    { value: 15, label: "Years Experience", icon: "🗓️" },
    { value: 98, label: "Satisfaction Rate", suffix: "%", icon: "⭐" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F4F9FA] pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primaryTeal opacity-5"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-secondaryBlue opacity-5"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00A8A810"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primaryTeal to-secondaryBlue bg-clip-text text-transparent"
          >
            Revolutionizing Healthcare Access
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
          >
            At Health Click, we&apos;re on a mission to make quality healthcare
            accessible to everyone through innovative technology and
            compassionate service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primaryTeal hover:bg-primaryTeal/90 text-white rounded-full px-8"
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primaryTeal text-primaryTeal hover:bg-primaryTeal/10 rounded-full px-8"
            >
              Meet Our Team
            </Button>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative">
            <Image
              src="/about-us-.jpeg"
              alt="Health Click Team"
              width={1280}
              height={720}
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Our Dedicated Team</h2>
              <p className="text-white/90">
                Working together to transform healthcare delivery
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Counter */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal/5 to-secondaryBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-primaryTeal mb-1">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
