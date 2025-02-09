import { FiExternalLink } from "react-icons/fi";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export default function DoctorCategoriesTabs() {
  const tabs = [
    {
      title: "General Physician",
      value: "general",
      content: (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-center py-5 items-center overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-2xl font-bold text-white">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-start items-start -space-x-2">
                  <div className="size-6 rounded-full bg-secondaryBlue"></div>
                  <div className="size-6 rounded-full bg-primaryTeal"></div>
                  <div className="size-6 rounded-full bg-secondaryPeach"></div>
              </div>
              <p>
                General Physicians provide primary healthcare services,
                diagnosing and treating a wide range of common illnesses and
                health conditions. They offer preventive care, health education,
                and management of chronic diseases.
              </p>
              <button className="flex justify-center items-center gap-2 bg-secondaryBlue rounded-lg text-white text-lg float-start mr-full w-max px-8 py-2 mt-4">
                Book Now <FiExternalLink />
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={"/hero/hero-side-img.png"}
                alt={"General Physician"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Cardiologist",
      value: "cardiologist",
      content: (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-center py-5 items-center overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-2xl font-bold text-white">
            <div className="flex-1 flex flex-col">
            <div className="flex justify-start items-start -space-x-2">
                  <div className="size-6 rounded-full bg-secondaryBlue"></div>
                  <div className="size-6 rounded-full bg-primaryTeal"></div>
                  <div className="size-6 rounded-full bg-secondaryPeach"></div>
              </div>
              <p>
                Cardiologists specialize in diagnosing and treating
                heart-related conditions, such as hypertension, heart disease,
                and arrhythmias. They also provide guidance on maintaining heart
                health and preventing cardiovascular diseases.
              </p>
              <button className="flex justify-center items-center gap-2 bg-secondaryBlue rounded-lg text-white text-lg float-start mr-full w-max px-8 py-2 mt-4">
                Book Now <FiExternalLink />
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={"/hero/hero-side-img.png"}
                alt={"Cardiologist"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Dermatologist",
      value: "dermatologist",
      content: (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-center py-5 items-center overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-2xl font-bold text-white">
            <div className="flex-1 flex flex-col">
               <div className="flex justify-start items-start -space-x-2">
                  <div className="size-6 rounded-full bg-secondaryBlue"></div>
                  <div className="size-6 rounded-full bg-primaryTeal"></div>
                  <div className="size-6 rounded-full bg-secondaryPeach"></div>
              </div>
              <p>
                Dermatologists are experts in treating skin, hair, and nail
                disorders. They address conditions such as acne, eczema,
                psoriasis, and skin cancer, and provide cosmetic treatments like
                laser therapy and anti-aging procedures.
              </p>
              <button className="flex justify-center items-center gap-2 bg-secondaryBlue rounded-lg text-white text-lg float-start mr-full w-max px-8 py-2 mt-4">
                Book Now <FiExternalLink />
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={"/hero/hero-side-img.png"}
                alt={"Dermatologist"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Pediatrician",
      value: "pediatrician",
      content: (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-center py-5 items-center overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-2xl font-bold text-white">
            <div className="flex-1 flex flex-col">
               <div className="flex justify-start items-start -space-x-2">
                  <div className="size-6 rounded-full bg-secondaryBlue"></div>
                  <div className="size-6 rounded-full bg-primaryTeal"></div>
                  <div className="size-6 rounded-full bg-secondaryPeach"></div>
              </div>
              <p>
                Pediatricians specialize in medical care for infants, children,
                and adolescents. They provide vaccinations, monitor growth and
                development, and treat childhood illnesses to ensure the
                well-being of young patients.
              </p>
              <button className="flex justify-center items-center gap-2 bg-secondaryBlue rounded-lg text-white text-lg float-start mr-full w-max px-8 py-2 mt-4">
                Book Now <FiExternalLink />
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={"/hero/hero-side-img.png"}
                alt={"Pediatrician"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Orthopedic",
      value: "orthopedic",
      content: (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-center py-5 items-center overflow-hidden relative h-full rounded-2xl p-4 md:p-10 text-xl md:text-2xl font-bold text-white">
            <div className="flex-1 flex flex-col">
               <div className="flex justify-start items-start -space-x-2">
                  <div className="size-6 rounded-full bg-secondaryBlue"></div>
                  <div className="size-6 rounded-full bg-primaryTeal"></div>
                  <div className="size-6 rounded-full bg-secondaryPeach"></div>
              </div>
              <p>
                Orthopedic doctors focus on the diagnosis and treatment of
                musculoskeletal disorders, including bone fractures, joint pain,
                arthritis, and sports injuries. They may perform surgeries or
                recommend physical therapy for recovery.
              </p>
              <button className="flex justify-center items-center gap-2 bg-secondaryBlue rounded-lg text-white text-lg float-start mr-full w-max px-8 py-2 mt-4">
                Book Now <FiExternalLink />
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={"/hero/hero-side-img.png"}
                alt={"Orthopedic"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="container py-10 px-4 h-[50rem] lg:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs
          activeTabClassName={"bg-primaryTeal"}
          tabClassName="whitespace-nowrap my-1 bg-gray-200 mx-1"
          tabs={tabs}
        />
      </div>
    </section>
  );
}
