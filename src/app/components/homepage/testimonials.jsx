"use client"; // Ensure this is a client component
import Image from "next/image";
import { H2Grediant } from "../../../components/eleProvider";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Elona Mosco",
      role: "Head of Community @Goldman",
      message: "At HealthClick, the focus on making healthcare accessible and stress-free is evident. The platform provides an intuitive way to connect with trusted doctors and schedule appointments effortlessly. It has truly redefined how I approach healthcare.",
      image: "/testimonials/user-7.jpg"
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      message: "HealthClick makes healthcare easy and accessible. It’s free and seamless to use, allowing me to connect with trusted doctors and schedule appointments from the comfort of my home. I couldn’t ask for a better experience!",
      image: "/testimonials/user-2.jpg"
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      message: "HealthClick ensures my healthcare journey is simple and stress-free. Scheduling appointments is seamless, and the quality of care provided is exceptional. It’s a game-changer for anyone looking for reliable healthcare solutions.",
      image: "/testimonials/user-3.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      message: "I love how HealthClick connects me with trusted doctors and streamlines appointment scheduling. The platform is user-friendly, free to use, and ensures a smooth experience every time. Highly recommended for quality care!",
      image: "/testimonials/user-4.jpg"
    },
    {
      name: "Michael Brown",
      role: "Business Consultant",
      message: "HealthClick has transformed how I approach my health needs. It’s an intuitive platform that makes it easy to book appointments with trusted doctors. The stress-free and seamless process is perfect for busy individuals like me.",
      image: "/testimonials/user-5.jpg"
    },
    {
      name: "Emily Davis",
      role: "Marketing Specialist",
      message: "With HealthClick, managing healthcare is now effortless. It’s free, intuitive, and makes scheduling appointments with trusted doctors quick and easy. I appreciate how stress-free the entire process is.",
      image: "/testimonials/user-6.jpg"
    }
  ] 

  return (
    <section className="bg-[url('/testimonials/testimonals-bg.svg')] bg-no-repeat bg-fixed bg-cover bg-center">
      <div className=" px-3 pt-10 pb-2 lg:pt-20 lg:px-20 bg-slate-400/50">
      <div className="container mx-auto text-center">
      </div>
        <H2Grediant className="mb-0">What Our Users Say</H2Grediant>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
