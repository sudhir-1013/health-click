import { H2Grediant } from "@/components/eleProvider";
import Image from "next/image";

export default function OurDoctors() {
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
    {
      id: 5,
      name: "Dr. Alan Brown",
      speciality: "Pediatrician",
      photo: "/doctor-3.jpg",
      experience: "8 years",
      hospital: "Children's Health Center",
      description:
        "Dedicated to the health and development of children from infancy through adolescence.",
    },
    {
      id: 6,
      name: "Dr. Jane Smith",
      speciality: "Dermatologist",
      photo: "/doctor-2.jpg",
      experience: "10 years",
      hospital: "Skin Care Clinic",
      description:
        "Expert in skin health, providing advanced treatments for acne, eczema, and skin cancer.",
    },
  ];

  return (
    <section className="bg-primaryTeal bg-opacity-5 text-white py-10">
      <div className="container mx-auto px-4">
        <H2Grediant className="inline-block mb-2">Our Doctors</H2Grediant>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="bg-primaryTeal p-2">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  width={320}
                  height={160}
                  className="object-cover object-top w-24 h-24 m-auto rounded-full"
                />
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-teal-300">{doctor.speciality}</p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Experience:</span> {doctor.experience}
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Hospital:</span> {doctor.hospital}
                </p>
                <p className="mt-2 text-sm">{doctor.description}</p>
                <a
                  href="#contact"
                  className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
