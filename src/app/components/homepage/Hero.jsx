
import Image from "next/image";
import heroImage from "./hero-banner-img.jpg"; 

export default function HeroSection() {

  return (
    <section className="flex flex-col lg:flex-row items-center bg-opacity-20 bg-gray-300 mx-5 mt-10 lg:mx-10 text-black px-5 py-10 lg:py-20 lg:px-20">
      <div className="flex-1 w-full text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
          Book Your Doctor Appointment Online Anytime, Anywhere!
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          HealthClick makes it easy for you to connect with trusted doctors and
          schedule appointments conveniently from home.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button
            className="px-6 py-3 bg-[#7BB03D] text-white rounded-md font-medium hover:bg-[#0C5C41] hover:text-white transition-all duration-200 ease-in-out"
            aria-label="Get Started with HealthClick"
          >
            Get Started
          </button>
          <button
            className="px-6 py-3 border border-[#7BB03D] rounded-md font-medium hover:border-[#0C5C41] hover:scale-95 transition-all duration-200 ease-in-out"
            aria-label="Learn more about HealthClick"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 hidden sm:block mt-10 lg:pl-10 lg:mt-0">
        <Image
          src={heroImage}
          alt="About us"
          layout="responsive"
          width={200}
          height={150}
          className="rounded-lg w-40 shadow-lg"
        />
      </div>
    </section>
  );
}
