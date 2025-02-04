import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export default function DoctorCategoriesTabs() {
  const tabs = [
    {
      title: "General Physician",
      value: "general",
      content: (
        <>
          <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white">
            <p>
              General Physicians provide primary healthcare services, diagnosing
              and treating a wide range of common illnesses and health
              conditions. They offer preventive care, health education, and
              management of chronic diseases.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cardiologist",
      value: "cardiologist",
      content: (
        <>
          <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white">
            <p>
              Cardiologists specialize in diagnosing and treating heart-related
              conditions, such as hypertension, heart disease, and arrhythmias.
              They also provide guidance on maintaining heart health and
              preventing cardiovascular diseases.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Dermatologist",
      value: "dermatologist",
      content: (
        <>
          <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white">
            <p>
              Dermatologists are experts in treating skin, hair, and nail
              disorders. They address conditions such as acne, eczema,
              psoriasis, and skin cancer, and provide cosmetic treatments like
              laser therapy and anti-aging procedures.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Pediatrician",
      value: "pediatrician",
      content: (
        <>
          <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white">
            <p>
              Pediatricians specialize in medical care for infants, children,
              and adolescents. They provide vaccinations, monitor growth and
              development, and treat childhood illnesses to ensure the
              well-being of young patients.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Orthopedic",
      value: "orthopedic",
      content: (
        <>
          <div className="w-full flex justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white">
            <p>
              Orthopedic doctors focus on the diagnosis and treatment of
              musculoskeletal disorders, including bone fractures, joint pain,
              arthritis, and sports injuries. They may perform surgeries or
              recommend physical therapy for recovery.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container py-10 px-5 h-[50rem] lg:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs activeTabClassName={"bg-primaryTeal"} tabClassName="whitespace-nowrap my-1 bg-gray-200 mx-1" tabs={tabs} />
    </div>
  );
}
