"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Calendar, FileText, Users, Info } from "lucide-react";
import { H2Grediant } from "@/components/eleProvider";
import { UseGlobalContext } from "../../../helpers/context";

export default function AppointmentPage() {
  const { toast } = useToast();
  const { user } = UseGlobalContext();

  const [appointment, setAppointment] = useState({
    name: user?.name ?? "",
    email: "",
    doctorType: "",
    date: "",
    reason: "",
    age: "",
    gender: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !appointment.name ||
      !appointment.email ||
      !appointment.date ||
      !appointment.doctorType ||
      !appointment.reason
    ) {
      toast({
        title: "Error",
        description: "Please fill all the required fields.",
        variant: "default",
      });
      setIsSubmitting(false);
      return;
    }

    const adminTemplateParams = {
      user_name: appointment.name,
      user_email: appointment.email,
      appointment_date: appointment.date,
      doctor_type: appointment.doctorType,
      appointment_reason: appointment.reason,
      message: appointment.additionalInfo,
    };

    emailjs
      .send(
        "service_fhxd08m",
        "template_lnd9bwt",
        adminTemplateParams,
        "2Lq5yaxQBhKrIW7Ej"
      )
      .then(() => {
        return emailjs.send(
          "service_fhxd08m",
          "template_z597car",
          adminTemplateParams,
          "2Lq5yaxQBhKrIW7Ej"
        );
      })
      .then(() => {
        toast({
          title: "Success",
          description:
            "Appointment booked successfully! Check your email for details.",
          variant: "default",
        });
        setAppointment({
          name: "",
          email: "",
          doctorType: "",
          date: "",
          reason: "",
          age: "",
          gender: "",
          additionalInfo: "",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to book appointment. Please try again!",
          variant: "default",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[url('/get-appointment.jpeg')] bg-cover bg-right p-4 py-10 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div className="mx-auto p-4 sm:p-8 rounded-lg shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-center"
          >
            <H2Grediant className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl pb-4">
              Book an Appointment
            </H2Grediant>
          </motion.div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                name: "name",
                icon: <User />,
                placeholder: "Full Name",
                type: "text",
              },
              {
                name: "email",
                icon: <Mail />,
                placeholder: "Email",
                type: "email",
              },
              { name: "date", icon: <Calendar />, type: "date" },
              {
                name: "doctorType",
                icon: <Users />,
                type: "select",
                options: [
                  "General Physician",
                  "Cardiologist",
                  "Dermatologist",
                  "Pediatrician",
                  "Orthopedic",
                ],
              },
              {
                name: "reason",
                icon: <FileText />,
                placeholder: "Reason for visit",
                type: "text",
              },
              {
                name: "additionalInfo",
                icon: <Info />,
                placeholder: "Additional Information (optional)",
                type: "textarea",
              },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {field.icon}
                  </span>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={appointment[field.name]}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full p-3 border rounded focus:outline-primaryTeal"
                    >
                      <option value="" disabled>
                        Select {field.placeholder}
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={appointment[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="pl-10 w-full p-3 border rounded focus:outline-primaryTeal"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={appointment[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="pl-10 w-full p-3 border rounded focus:outline-primaryTeal"
                    />
                  )}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 bg-primaryTeal text-white font-bold rounded hover:opacity-80"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
