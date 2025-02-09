"use client";

import { H2 } from "@/components/eleProvider";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const GetAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appointmentDate: "",
    doctorType: "",
    reason: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation check
    if (
      !formData.name ||
      !formData.email ||
      !formData.appointmentDate ||
      !formData.doctorType ||
      !formData.reason ||
      !formData.message
    ) {
      setStatusMessage("Please Fill all the Fields");
      return; // Stop execution if any field is missing
    }
  
    const adminTemplateParams = {
      user_name: formData.name,
      user_email: formData.email,
      appointment_date: formData.appointmentDate,
      doctor_type: formData.doctorType,
      appointment_reason: formData.reason,
      message: formData.message,
    };
  
    const userTemplateParams = {
      user_name: formData.name,
      user_email: formData.email,
      appointment_date: formData.appointmentDate,
      doctor_type: formData.doctorType,
      appointment_reason: formData.reason,
      message: formData.message,
    };
  
    // Email to admin
    emailjs
      .send(
        "service_fhxd08m",
        "template_lnd9bwt",
        adminTemplateParams,
        "2Lq5yaxQBhKrIW7Ej"
      )
      .then(
        (response) => {
          console.log(
            "Admin email sent successfully!",
            response.status,
            response.text
          );
  
          // Email to user
          emailjs
            .send(
              "service_fhxd08m",
              "template_z597car",
              userTemplateParams,
              "2Lq5yaxQBhKrIW7Ej"
            )
            .then(
              (response) => {
                console.log(
                  "User email sent successfully!",
                  response.status,
                  response.text
                );
                setEmailSent(true); // Set email sent status
                setStatusMessage(
                  "email sent successfully!",
                  <br />,
                  "Please Check Your Email"
                );
                setSuccessMsg("Your appointment request has been sent successfully!");
              },
              (error) => {
                console.log("Failed to send user email...", error);
                setStatusMessage("Please Fill all the Fields Correctly.");
              }
            );
        },
        (error) => {
          console.log("Failed to send admin email...", error);
          setStatusMessage("email sent successfully!", <br />, "Please Check Your Email");
        }
      );
      console.log(formData);
  };
  
  return (
    <>
      <section className="container mx-auto w-full bg-[#f7f6f5] py-10 md:py-20 px-5 lg:px-10">
        <div className="!relative w-full flex justify-start items-start flex-col lg:flex-row">
          <div className="flex-1 lg:sticky top-20 z-10 size-full text-lg text-start flex justify-start items-start flex-col md:p-5 bg-[#f7f6f5]">
            <H2 className="">See HealthClick in Action</H2>
            <p className="text-lg mb-5">
              Schedule an online doctor consultation today.
            </p>
            <ul className="space-y-2 mb-5">
              <li>
                <b className="text-primaryTeal">✔</b> Find the right doctor for
                your needs
              </li>
              <li>
                <b className="text-primaryTeal">✔</b> Get expert medical advice
                anytime, anywhere
              </li>
              <li>
                <b className="text-primaryTeal">✔</b> Book hassle-free
                appointments online
              </li>
            </ul>
            <div>
              <p>
                “ Trusted by thousands of patients for quality healthcare. ”
              </p>
            </div>
            {
                <p className="text-black font-semibold mt-6 text-start animate-bounce ">
                  {statusMessage}
                </p>
              }
          </div>
          <div className="flex-1 bg-white flex justify-center mt-10 lg:mt-0 items-center flex-col size-full">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="space-y-6 p-4 flex-1 w-full"
            >
              <div>
                <label htmlFor="name" className="text-sm text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="on"
                  autoCapitalize="on"
                  autoCorrect="on"
                  required
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="on"
                  autoCapitalize="on"
                  autoCorrect="on"
                  required
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="appointmentDate" className="text-sm text-white">
                  Appointment Date
                </label>
                <input
                  id="appointmentDate"
                  name="appointmentDate"
                  type="date"
                  value={formData.appointmentDate}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const today = new Date();
                    if (selectedDate < today) {
                      alert("Past dates are not allowed!");
                      e.target.value = today.toISOString().split("T")[0];
                    }

                    handleChange(e);
                  }}
                  autoComplete="on"
                  autoCapitalize="on"
                  autoCorrect="on"
                  required
                  min={new Date().toISOString().split("T")[0]} // Restricts past dates
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white after:text-white before:text-white placeholder-gray-400 autofill:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="doctorType" className="text-sm text-white">
                  Type of Doctor
                </label>
                <select
                  id="doctorType"
                  name="doctorType"
                  value={formData.doctorType}
                  onChange={handleChange}
                  autoComplete="on"
                  autoCapitalize="on"
                  required
                  autoCorrect="on"
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2"
                >
                  <option value="" disabled>
                    Select Doctor Type
                  </option>
                  <option value="general">General Physician</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="dermatologist">Dermatologist</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="orthopedic">Orthopedic</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="text-sm text-white">
                  Reason for Appointment
                </label>
                <input
                  id="reason"
                  name="reason"
                  type="text"
                  placeholder="Reason for visit"
                  value={formData.reason}
                  onChange={handleChange}
                  autoComplete="on"
                  autoCapitalize="on"
                  required
                  autoCorrect="on"
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Additional information (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="on"
                  autoCapitalize="on"
                  autoCorrect="on"
                  className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primaryTeal text-white hover:opacity-80"
              >
                Book Appointment
              </button>
              {
                <p className="text-black font-semibold mt-6 text-start animate-bounce ">
                  {statusMessage}
                </p>
              }
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAppointmentPage;
