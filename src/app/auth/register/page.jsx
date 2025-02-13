"use client";
import { useEffect, useState } from "react";
import { RegisterUser } from "../../../../helpers/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { UseGlobalContext } from "../../../../helpers/context";
import { H3Grediant } from "@/components/eleProvider";

export default function Signup() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const router = useRouter();
  const { toast } = useToast();
  const { user } = UseGlobalContext();

  useEffect(() => {
    if (user) {
      router.push("/");
      toast({
        title: `${user.name || "User"} is already logged in`,
        description: `${user.name || "User"} is already logged in`,
        variant: "default",
      });
    }
  }, [user, router, toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerFormData.password !== registerFormData.confirmpassword) {
      return console.log("Passwords do not match!");
    }

    try {
      const createUser = await RegisterUser({
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
      });

      console.log("User Created Successfully:", createUser);
      
      toast({
        title: "Account Created Successfully",
        description: `Welcome, ${registerFormData.name}! Log in with these Email and password to get Full access to our site.`,
        variant: "default",
      });
      router.push("/auth/login")
      
    } catch (error) {
      console.log("Cannot create user. Please try again:", error.message);
      toast({
        title: "Cannot create user. Please try again:",
        description: error.message || `Sometihng Went Wrong`,
        variant: "default",
      });
    }
  };

  return (
    <div className="h-screen p-5 my-10 flex justify-center items-center bg-fixed bg-cover bg-[url('/sign-up-bg-fixed.jpg')]">
      <div className="w-full mx-auto rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="relative hidden md:block md:w-1/2 p-8 bg-[url('/sign-up.png')] bg-contain bg-no-repeat bg-center bg-white"></div>

        <div className="w-full md:w-1/2 p-2 md:p-8 bg-gray-50 rounded-lg">
          {/* <Image src={'/Health-Click-Logo.png'} className="mx-auto" alt="Health-Click" height={200} width={200} /> */}
          {/* New heading for sign-up form */}
          <H3Grediant className="text-center text-xl font-semibold text-gray-800">Create Your Account</H3Grediant>

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
                  className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-5 w-full py-4 rounded-lg bg-primaryTeal text-white transition duration-300"
            >
              Sign Up
            </button>
            <div className="text-center w-full mt-5">
              <p>Already have an Account?</p>
              <a href="/auth/login" className="px-4 py-1 text-primaryTeal underline text-center mx-auto">Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
