"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Patient",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Health Click has completely transformed how I manage my healthcare. The app is intuitive, appointments are easy to schedule, and the doctors are incredibly responsive. I've never felt more in control of my health journey.",
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Robert Chen",
      role: "Cardiologist",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "As a healthcare provider, I've been impressed with Health Click's platform. It streamlines patient communication and allows me to provide more personalized care. The technology is reliable and secure, which is crucial in healthcare.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Healthcare Administrator",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Implementing Health Click at our clinic has significantly improved our operational efficiency. Patient satisfaction has increased, and our staff appreciates the intuitive interface. It's been a game-changer for our practice.",
      rating: 4,
    },
  ];

  const awards = [
    {
      id: 1,
      title: "Healthcare Innovation Award",
      organization: "Digital Health Association",
      year: 2023,
      icon: "🏆",
    },
    {
      id: 2,
      title: "Best Patient Experience",
      organization: "Healthcare Tech Summit",
      year: 2022,
      icon: "🌟",
    },
    {
      id: 3,
      title: "Top Health App",
      organization: "MedTech Innovators",
      year: 2021,
      icon: "📱",
    },
    {
      id: 4,
      title: "Excellence in Telemedicine",
      organization: "Global Health Initiative",
      year: 2022,
      icon: "🌐",
    },
  ];

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

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
    <section
      id="testimonials"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondaryBlue/20 to-transparent"></div>
        <div className="absolute -right-20 top-1/4 w-40 h-40 rounded-full bg-primaryTeal opacity-5"></div>
        <div className="absolute -left-20 bottom-1/4 w-60 h-60 rounded-full bg-secondaryBlue opacity-5"></div>
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
              Testimonials & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our users and see the recognition we&apos;ve received
              for our commitment to transforming healthcare.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div variants={itemVariants} className="mb-20 relative">
            <div className="absolute -top-10 -left-10 text-primaryTeal opacity-10">
              <Quote size={80} />
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primaryTeal to-secondaryBlue"></div>

              <div className="p-8 md:p-12 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primaryTeal/20">
                          <Image
                            src={
                              testimonials[activeIndex].image ||
                              "/placeholder.svg"
                            }
                            alt={testimonials[activeIndex].name}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primaryTeal"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: [0, 0.2, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-primaryTeal">
                        {testimonials[activeIndex].role}
                      </p>

                      <div className="flex items-center mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${
                              i < testimonials[activeIndex].rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                        {testimonials[activeIndex].quote}
                      </blockquote>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setAutoplay(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-primaryTeal w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden md:block">
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-primaryTeal hover:text-white"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:block">
                  <Button
                    onClick={handleNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-primaryTeal hover:text-white"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">
              Awards & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal/5 to-secondaryBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="text-4xl mb-3">{award.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primaryTeal transition-colors duration-300">
                    {award.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    {award.organization}
                  </p>
                  <p className="text-primaryTeal font-medium">{award.year}</p>

                  <motion.div
                    className="absolute inset-0 border-2 border-primaryTeal rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
