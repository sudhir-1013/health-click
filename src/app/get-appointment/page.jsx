'use client';

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appointmentDate: "",
    doctorType: "",
    reason: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        "service_fhxd08m", // Replace with your service ID
        "template_lnd9bwt", // Replace with admin template ID
        adminTemplateParams,
        "2Lq5yaxQBhKrIW7Ej" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("Admin email sent successfully!", response.status, response.text);

          // Email to user
          emailjs
            .send(
              "service_fhxd08m", // Replace with your service ID
              "template_z597car", // Replace with user template ID
              userTemplateParams,
              "2Lq5yaxQBhKrIW7Ej" // Replace with your Public Key
            )
            .then(
              (response) => {
                console.log("User email sent successfully!", response.status, response.text);
                setEmailSent(true); // Set email sent status
              },
              (error) => {
                console.error("Failed to send user email...", error);
              }
            );
        },
        (error) => {
          console.error("Failed to send admin email...", error);
        }
      );

      console.log(formData);
      
  };

  return (
    <div className="w-full flex justify-center items-center bg-fixed bg-[url('/get-appointment-bg-img.jpg')] px-2 md:px-4 lg:px-10 py-20 h-auto bg-cover bg-center">
  <div className="flex justify-center items-center flex-col lg:flex-row max-w-screen-xl w-full gap-8 px-6 md:px-14 py-16 lg:py-24 rounded-lg bg-gray-800 bg-opacity-40 backdrop-blur-md">
    <div className="flex-1 w-full text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl text-white">
        Book an Appointment with Your Doctor
      </h2>
      <p className="text-white mt-2 text-sm md:text-base">
        Schedule your appointment quickly and easily.
      </p>
      <Image
        src="/get-appointment-vector-img.svg"
        alt="Appointment illustration"
        width={200}
        height={200}
        className="mt-6 mx-auto lg:mx-0"
      />

{emailSent && (
      <p className="text-green-500 font-semibold mt-6 text-start animate-bounce ">
        Appointment request submitted and confirmation email sent!
      </p>
    )}
    </div>

    <form noValidate onSubmit={handleSubmit} className="space-y-6 flex-1 w-full max-w-md">
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
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
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
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
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
          onChange={handleChange}
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
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
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
        >
          <option value="" disabled>Select Doctor Type</option>
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
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
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
          className="w-full p-3 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900 hover:bg-violet-500"
      >
        Book Appointment
      </button>
      {emailSent && (
      <p className="text-green-500 font-semibold mt-6 text-start animate-bounce ">
        Appointment request submitted and confirmation email sent!
      </p>
    )}
    </form>

  </div>
</div>

  );
};

export default Page;
