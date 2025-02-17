"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    photo: "/doctor-1.jpg",
    experience: "15 years",
    hospital: "City Heart Hospital",
    description:
      "Specialized in treating cardiovascular diseases with a focus on minimally invasive procedures.",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    speciality: "Dermatologist",
    photo: "/doctor-2.jpg",
    experience: "10 years",
    hospital: "Skin Care Clinic",
    description:
      "Expert in skin health, providing advanced treatments for acne, eczema, and skin cancer.",
  },
  {
    id: 3,
    name: "Dr. Alan Brown",
    speciality: "Pediatrician",
    photo: "/doctor-3.jpg",
    experience: "8 years",
    hospital: "Children's Health Center",
    description:
      "Dedicated to the health and development of children from infancy through adolescence.",
  },
  {
    id: 4,
    name: "Dr. Emily White",
    speciality: "Neurologist",
    photo: "/doctor-4.jpg",
    experience: "12 years",
    hospital: "Neuro Wellness Hospital",
    description:
      "Focused on diagnosing and treating disorders of the nervous system with personalized care.",
  },
]

export default function OurDoctorsAnimated() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % doctors.length))
    }, 5000)
    return () => clearInterval(timer)
  }, [activeIndex])

  return (
    <div className="container bg-gray-100 mx-auto px-4 py-16 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-primaryTeal">Meet Our Experts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              onClick={() => setActiveIndex(index)} // <-- Add this line
              animate={{
                opacity: activeIndex === index ? 1 : 0.5,
                y: 0,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "ring-4 ring-primaryTeal" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  width={80}
                  height={80}
                  className="object-cover object-center w-20 h-20 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-primaryTeal text-center">{doctor.name}</h3>
              <p className="text-teal-500 text-center">{doctor.speciality}</p>
              <p className="mt-2 text-sm text-center">
                <span className="font-semibold">Experience:</span> {doctor.experience}
              </p>
              <p className="mt-1 text-sm text-center">
                <span className="font-semibold">Hospital:</span> {doctor.hospital}
              </p>
              <p className="mt-2 text-sm text-center">{doctor.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {doctors.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-primaryTeal" : "bg-secondaryBlue"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
