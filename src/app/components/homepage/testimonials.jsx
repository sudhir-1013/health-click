"use client"; // Ensure this is a client component
import { useState } from "react";
import { H2 } from "../eleProvider";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      location: "New York, USA",
      message: "The best online consultation experience. Quick and easy to use!",
    },
    {
      name: "Jane Smith",
      location: "London, UK",
      message: "Highly recommended! The doctor was very helpful and patient.",
    },
    {
      name: "Sam Wilson",
      location: "Sydney, Australia",
      message: "Convenient, fast, and professional. I booked my appointment in minutes!",
    },
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-[#F4F7FB] px-3 py-10 lg:py-20 lg:px-20">
      <div className="container mx-auto text-center">
        <H2 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
          What Our Users Say
        </H2>
        <div className="flex justify-center items-center gap-2">
          <button
            className="h-14 w-14 flex justify-center items-center text-center bg-[#8BC34A] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out leading-0 hover:bg-[#7BB03D]"
            onClick={handlePrevTestimonial}
          >
            &lt;
          </button>

          <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
            <p className="text-lg italic text-[#333] mb-4">
            &quot;{testimonials[activeTestimonial].message}&quot;
            </p>
            <div className="text-right">
              <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-[#888]">{testimonials[activeTestimonial].location}</p>
            </div>
          </div>

          <button
            className="h-14 w-14 flex justify-center items-center text-center bg-[#8BC34A] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out leading-0 hover:bg-[#7BB03D]"
            onClick={handleNextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}



// "use client"; // Ensure this is a client component
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@shadcn/ui";
// import Image from "next/image";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "John Doe",
//       location: "New York, USA",
//       message: "The best online consultation experience. Quick and easy to use!",
//     },
//     {
//       name: "Jane Smith",
//       location: "London, UK",
//       message: "Highly recommended! The doctor was very helpful and patient.",
//     },
//     {
//       name: "Sam Wilson",
//       location: "Sydney, Australia",
//       message: "Convenient, fast, and professional. I booked my appointment in minutes!",
//     },
//     {
//       name: "Alice Johnson",
//       location: "Toronto, Canada",
//       message: "Great platform with a user-friendly interface and quick booking process.",
//     },
//     {
//       name: "Mark Lee",
//       location: "Los Angeles, USA",
//       message: "The consultation was smooth and informative. Highly recommend it.",
//     },
//   ];

//   return (
//     <section className="bg-[#F4F7FB] px-5 py-10 lg:py-20 lg:px-20">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
//           What Our Users Say
//         </h2>
//         <Carousel loop={true} className="relative">
//           <CarouselContent className="flex gap-6">
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem key={index} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
//                 <p className="text-lg italic text-[#333] mb-4">
//                   &quot;{testimonial.message}&quot;
//                 </p>
//                 <div className="text-right">
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm text-[#888]">{testimonial.location}</p>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-[#8BC34A] rounded-full p-2 hover:bg-[#7BB03D]">
//             &lt;
//           </CarouselPrevious>
//           <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-[#8BC34A] rounded-full p-2 hover:bg-[#7BB03D]">
//             &gt;
//           </CarouselNext>
//         </Carousel>
//       </div>
//     </section>
//   );
// }

