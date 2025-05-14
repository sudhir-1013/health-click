"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { H2Grediant } from "@/components/eleProvider";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-[url('/contact-us-bg.jpeg')] bg-no-repeat bg-center bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!isSubmitted ? (
          <>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              w
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className=""
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.4,
                }}
              >
                <H2Grediant>Get in Touch With Our Health Experts</H2Grediant>
              </motion.div>
              <motion.p
                className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Have questions about your health journey? We&apos;re here to
                help you every step of the way.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-transparent backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="p-8 px-4 sm:px-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="w-full transition-all bg-transparent duration-200 border border-primaryTeal placeholder:text-primaryTeal text-primaryTeal placeholder:opacity-50 focus:ring-2 focus:ring-primaryTeal/50"
                        {...register("name", { required: "Name is required" })}
                      />
                    </motion.div>
                    {errors.name && (
                      <motion.p
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full transition-all bg-transparent duration-200 border border-primaryTeal placeholder:text-primaryTeal text-primaryTeal placeholder:opacity-50 focus:ring-2 focus:ring-primaryTeal/50"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </motion.div>
                    {errors.email && (
                      <motion.p
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="relative"
                    >
                      <Textarea
                        id="message"
                        placeholder="How can we help you today?"
                        className="w-full min-h-[150px] transition-all bg-transparent duration-200 border border-primaryTeal placeholder:text-primaryTeal text-primaryTeal placeholder:opacity-50 focus:ring-2 focus:ring-primaryTeal/50"
                        {...register("message", {
                          required: "Message is required",
                        })}
                      />
                    </motion.div>
                    {errors.message && (
                      <motion.p
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        type="submit"
                        className="w-full py-6 text-lg font-medium flex items-center justify-center gap-2 bg-primaryTeal/90 text-white rounded-lg shadow-lg transition-all duration-200"
                      >
                        <motion.span
                          initial={{ x: 10 }}
                          animate={{ x: 0 }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "mirror",
                            duration: 1.5,
                          }}
                        >
                          Send Message
                        </motion.span>
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                            transition: {
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              duration: 1.5,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          <Send className="h-5 w-5" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-green-100 mb-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600" />
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Thank You!
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Your message has been sent successfully. Our team will get back to
              you shortly.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3"
              >
                Send Another Message
              </Button>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="mt-16 text-center text-black text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>
            Need immediate assistance? Call us at{" "}
            <span className="font-medium text-primary">1-800-HEALTH</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
