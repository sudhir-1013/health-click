"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Edit2, Camera } from "lucide-react";
import Link from "next/link";
import AboutUs from "../components/homepage/AboutUs";
import HowItWorks from "../components/homepage/How";
import WhyChoose from "../components/homepage/WhyChoose";
import GetAppointment from "../components/homepage/GetAppointment";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "********",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated user data to your backend
  };

  return (
    <>
      <AboutUs />
      <HowItWorks />
      <WhyChoose />
      <GetAppointment />
    </>
  );
}
