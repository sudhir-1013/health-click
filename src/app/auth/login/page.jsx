"use client";
import { useState } from "react";
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputValueChange = (e) => {
    const formInputName = e.target.name;
    const formInputValue = e.target.value;
    setLoginFormData({ ...loginFormData, [formInputName]: formInputValue });
  };
  console.log(loginFormData);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <h1 className="text-2xl xl:text-3xl font-extrabold text-center mt-12">
            Sign up for templatana
          </h1>
          <div className="mt-8 max-w-xs mx-auto">
            <input
              className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5"
              type="email"
              name="email"
              placeholder="Email"
              value={FormData.email}
              onChange={handleInputValueChange}
            />
            <input
              className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5"
              type="password"
              placeholder="Password"
              name="password"
              value={FormData.password}
              onChange={handleInputValueChange}
            />
            <button className="mt-5 w-full py-4 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition duration-300">
    
              Login 
            </button>
            <p className="text-center mt-4">or</p>
            <button className="mt-4 w-full py-4 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition duration-300">
    
              Sign up
            </button>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 hidden lg:flex"></div>
      </div>
    </div>
  );
}
