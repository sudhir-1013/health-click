"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 600);
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

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#F4F4F4] to-[#E8F5F5] px-5 lg:px-10 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryTeal to-transparent opacity-50" />

      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primaryTeal opacity-5" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondaryBlue opacity-5" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Logo & Tagline */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <Link href="/" className="relative group">
              <Image
                src="/Health-Click-Logo.png"
                alt="HealthClick Logo"
                width={160}
                height={60}
                className="relative mx-auto lg:mx-0"
                priority
              />
            </Link>
            <p className="text-sm text-gray-600 mt-3 text-center lg:text-left">
              Your trusted health companion for a healthier tomorrow.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-primaryTeal mb-4 text-center lg:text-left">
                Connect With Us
              </h4>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
                  { icon: <FaTwitter />, label: "Twitter", href: "#" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
                  { icon: <FaInstagram />, label: "Instagram", href: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={socialIconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <span className="text-primaryTeal">{social.icon}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <h4 className="text-md font-semibold text-primaryTeal mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              {[
                { name: "Get Appointment", href: "/get-appointment" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-primaryTeal transition-colors duration-300 relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryTeal group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <h4 className="text-md font-semibold text-primaryTeal mb-4">
              Coming Soon
            </h4>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              {[
                { name: "Telemedicine", href: "/services/telemedicine" },
                { name: "Health Checkups", href: "/services/checkups" },
                {
                  name: "Specialist Consultation",
                  href: "/services/consultation",
                },
                { name: "Preventive Care", href: "/services/preventive-care" },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-gray-700 hover:text-primaryTeal transition-colors duration-300 relative group"
                >
                  <span>{service.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryTeal group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          {/* <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <h4 className="text-md font-semibold text-primaryTeal mb-4">Our Services</h4>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              {[
                { name: "Telemedicine", href: "/services/telemedicine" },
                { name: "Health Checkups", href: "/services/checkups" },
                { name: "Specialist Consultation", href: "/services/consultation" },
                { name: "Mental Health", href: "/services/mental-health" },
                { name: "Preventive Care", href: "/services/preventive-care" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-gray-700 hover:text-primaryTeal transition-colors duration-300 relative group"
                >
                  <span>{service.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryTeal group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.div> */}

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center lg:items-start"
          >
            <h4 className="text-md font-semibold text-primaryTeal mb-4">
              Get On Mobile
            </h4>

            <div className="p-4 bg-white rounded-lg shadow-sm w-full max-w-xs">
              <p className="text-xs text-gray-500 text-center lg:text-left">
                <span className="font-semibold text-primaryTeal">
                  Health Click App
                </span>{" "}
                - Download our mobile app for instant access to doctors and
                health services.
              </p>
              <div className="mt-3 flex justify-center lg:justify-start gap-2">
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=30&width=100"
                    alt="App Store"
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=30&width=100"
                    alt="Google Play"
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="my-8 h-px bg-gradient-to-r from-transparent via-primaryTeal/30 to-transparent"
        />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center"
        >
          <p>
            &copy; {new Date().getFullYear()} HealthClick. All rights reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-primaryTeal transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primaryTeal transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primaryTeal text-white shadow-lg flex items-center justify-center hover:bg-primaryTeal/90 focus:outline-none focus:ring-2 focus:ring-primaryTeal focus:ring-offset-2 z-50"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
