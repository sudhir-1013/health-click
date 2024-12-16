import Link from "next/link";
import { H2Green } from "../eleProvider";

export default function GetAppointment() {
  return (
    <section className="bg-gray-300 bg-opacity-20 px-5 py-10 lg:py-20 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <H2Green spanText={"Appointment?"}>Ready to Book Your</H2Green>
        <p className="text-lg lg:text-xl mb-8">
          Don’t wait for your health. Connect with a trusted doctor at your convenience. Get started today and book your appointment in just a few clicks!
        </p>

        <div className="relative inline-block mb-8 group">
          <Link href={"/get-appointment"}>
          <button
            className="px-8 py-4 text-xl group-hover:animate-bounce font-semibold rounded-md transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:bg-white group-hover:text-[#8BC34A] bg-[#7BB03D] text-white"
            aria-label="Book Your Appointment"
            >
            Book Your Appointment
          </button>
            </Link>
        </div>

        <p className="text-sm lg:text-md opacity-80">
          Your health is just a click away. Our doctors are ready to assist you!
        </p>
      </div>
    </section>
  );
}
