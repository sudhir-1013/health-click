import Link from "next/link";
import { H2Grediant } from "../../../components/eleProvider";

export default function GetAppointment() {
  return (
    <section className="bg-[url('/GetAppointment.jpg')] bg-cover bg-center bg-fixed  relative overflow-hidden">
      <div className="size-full backdrop-blur-sm text-center bg-white bg-opacity-0 px-5 py-10 lg:py-20 lg:px-20">
        <H2Grediant>Ready to Book Your Appointment?</H2Grediant>
        <p className="text-lg lg:text-xl mb-8 mx-auto max-w-4xl">
          Don’t wait for your health. Connect with a trusted doctor at your convenience. Get started today and book your appointment in just a few clicks!
        </p>

        <div className="relative inline-block mb-8 group">
          <Link href={"/get-appointment"}>
          <button
            className="px-6 sm:px-10 py-3 sm:p-4 text-xl font-semibold rounded-md transition-all duration-300 ease-in-out hover:opacity-90 transform group-hover:scale-105  bg-primaryTeal text-white"
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

