"use client";
import { useState } from "react";
import { RegisterUser } from "../../../../helpers/page";

export default function Signup() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerFormData.password !== registerFormData.confirmpassword) {
      return console.error("Passwords do not match!");
    }

    try {
      const createUser = await RegisterUser({
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
      });
      console.log("User Created Successfully:", createUser);
    } catch (error) {
      console.error("Cannot create user. Please try again:", error.message);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center bg-fixed bg-cover bg-[url('/sign-up-bg-fixed.jpg')]">
      <div className="max-w-screen-lg backdrop-blur-sm mx-auto shadow-2xl rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Welcome Section */}
        <div className="w-full md:w-1/2 p-8 bg-teal-100">
          <h1 className="text-3xl font-bold text-center text-teal-700 mt-6 mb-4">Welcome</h1>
          <p className="text-lg text-center text-teal-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <h1 className="text-2xl xl:text-3xl font-bold text-center text-blue-700 mt-6">
            Sign up for Templatana
          </h1>
          <form className="mt-8" onSubmit={handleRegisterSubmit}>
            {[
              { name: "name", placeholder: "Name" },
              { name: "email", placeholder: "Email" },
              { name: "password", placeholder: "Password" },
              { name: "confirmpassword", placeholder: "Confirm Password" },
            ].map(({ name, placeholder }) => (
              <div key={name} className="mt-5">
                <input
                  type={name.includes("password") ? "password" : "text"}
                  placeholder={placeholder}
                  name={name}
                  value={registerFormData[name]}
                  onChange={handleChange}
                  className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-5 w-full py-4 rounded-lg bg-blue-500 text-white hover:bg-teal-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
