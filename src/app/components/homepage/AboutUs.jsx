import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { H2, H2Grediant } from "@/components/eleProvider";

export default function AboutUs() {
  return (
    <section className="py-16 px-4">
      <div className="container flex flex-col md:flex-row justify-center items-start gap-10 mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <H2Grediant className="mb-4">WHO WE ARE</H2Grediant>
          <p className="text-lg sm:text-xl mb-5 text-center md:text-left max-w-7xl">
            At HealthClick, we aim to redefine your healthcare experience by providing an intuitive platform that connects you with trusted doctors, streamlines appointment scheduling, and offers seamless access to quality care. We believe that your health journey should be simple, accessible, and stress-free.
          </p>
          <button className="bg-primaryTeal mb-5 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-secondaryBlue transition">
            <span>Know More About</span>
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="w-full max-w-4xl">
            <AccordionItem value="item-0">
              <AccordionTrigger className="flex items-center gap-4">
                <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 14.25c-3.6 0-6.75 1.293-6.75 2.25v.75h13.5v-.75c0-.957-3.15-2.25-6.75-2.25z"
                  />
                </svg> Our Doctors</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg text-gray-500 mt-2">
                  Explore our network of experienced doctors, specialized in various fields, to find the right healthcare provider for your needs.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center gap-4">
                <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h7.5m-10.5 4.5h13.5m-10.5 4.5h7.5M6 4.5h12a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5z"
                  />
                </svg>
                  Appointments</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg text-gray-500 mt-2">
                  Easily book appointments online or call us to arrange same-day consultations with our trusted doctors.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center gap-4">
                <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c4.418 0 8-3.582 8-8S16.418 5 12 5s-8 3.582-8 8 3.582 8 8 8zM12 5v16m0-16c-4.418 0-8 3.582-8 8m8-8c4.418 0 8 3.582 8 8"
                  />
                </svg>
                  Find Locations</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg text-gray-500 mt-2">
                  Locate nearby clinics or hospitals in your area using our intuitive search feature.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center gap-4">
                <h3 className="flex justify-center items-center text-lg font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c3.866 0 7 3.134 7 7 0 5.25-7 11-7 11s-7-5.75-7-11c0-3.866 3.134-7 7-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                  Our Mission</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg text-gray-500 mt-2">
                  At HealthClick, our mission is to ensure everyone has access to convenient, affordable, and high-quality healthcare services.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
