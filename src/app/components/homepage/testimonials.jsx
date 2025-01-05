"use client"; // Ensure this is a client component
import Image from "next/image";
import { H2Grediant } from "../../../components/eleProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Elona Mosco",
      role: "Head of Community @Goldman",
      message: "At HealthClick, the focus on making healthcare accessible and stress-free is evident. The platform provides an intuitive way to connect with trusted doctors and schedule appointments effortlessly. It has truly redefined how I approach healthcare.",
      image: "/user.png"
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      message: "HealthClick makes healthcare easy and accessible. It’s free and seamless to use, allowing me to connect with trusted doctors and schedule appointments from the comfort of my home. I couldn’t ask for a better experience!",
      image: "/user.png"
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      message: "HealthClick ensures my healthcare journey is simple and stress-free. Scheduling appointments is seamless, and the quality of care provided is exceptional. It’s a game-changer for anyone looking for reliable healthcare solutions.",
      image: "/user.png"
    },
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      message: "I love how HealthClick connects me with trusted doctors and streamlines appointment scheduling. The platform is user-friendly, free to use, and ensures a smooth experience every time. Highly recommended for quality care!",
      image: "/user.png"
    },
    {
      name: "Michael Brown",
      role: "Business Consultant",
      message: "HealthClick has transformed how I approach my health needs. It’s an intuitive platform that makes it easy to book appointments with trusted doctors. The stress-free and seamless process is perfect for busy individuals like me.",
      image: "/user.png"
    },
    {
      name: "Emily Davis",
      role: "Marketing Specialist",
      message: "With HealthClick, managing healthcare is now effortless. It’s free, intuitive, and makes scheduling appointments with trusted doctors quick and easy. I appreciate how stress-free the entire process is.",
      image: "/user.png"
    }
  ]  ;

  return (
    <section className="px-3 pt-10 pb-2 lg:pt-20 lg:px-20">
      <div className="container mx-auto text-center">
        <H2Grediant className="mb-0">What Our Users Say</H2Grediant>
        <Carousel className="w-full bg-[url('/diversity-83.png')] bg-[100%]">
        <div className="bg-white bg-opacity-70 pt-10">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full mx-auto">
                <div className="p-6 border-primaryTeal text-center">
                  <div className="flex justify-center items-center flex-col mb-4">
                    <div>
                      <p className="font-semibold text-[#333]">{testimonial.name}</p>
                      <p className="text-sm text-[#888]">{testimonial.role}</p>
                    </div>
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} photo`}
                      width={50}
                      height={50}
                      className="w-20 h-20 rounded-full my-2"
                    />
                  </div>
                  <p className="md:text-2xl text-lg italic text-[#333] max-w-screen-lg mx-auto">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <svg className="h-12 transform rotate-180 mx-auto mb-3 text-primaryTeal" viewBox="0 0 24 27"  xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            </div>
          <CarouselPrevious className="hidden lg:inline-flex absolute bg-primaryTeal text-secondaryPeach size-12 hover:bg-secondaryBlue duration-300 transition-all -translate-x-2" />
          <CarouselNext className="hidden lg:inline-flex absolute bg-primaryTeal text-secondaryPeach size-12 hover:bg-secondaryBlue duration-300 transition-all translate-x-2" />
        </Carousel>
      </div>
    </section>
  );
}
