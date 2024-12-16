import AboutUs from "./components/homepage/AboutUs";
import GetAppointment from "./components/homepage/GetAppointment";
import HeroSection from "./components/homepage/Hero";
import HowItWorks from "./components/homepage/How";
import Testimonials from "./components/homepage/testimonials";
import WhyChoose from "./components/homepage/WhyChoose";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <AboutUs/>
   <HowItWorks/>
   <WhyChoose/>
   <GetAppointment/>
   <Testimonials/>
   </>
  );
}
